import { bindActionCreators } from '@reduxjs/toolkit';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import secureLocalStorage from 'react-secure-storage';
import { actionCreaters } from '../../Redux';

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userActions = bindActionCreators(actionCreaters, dispatch);

    const state = useSelector((state) => state.stateVals);
    const { name, uType, accessToken } = state;

    const logOut = async (event) => {
        event.preventDefault();
        secureLocalStorage.clear();
        userActions.logOut(null);
        navigate("/");
    };

    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <Link to="/" className="logo">
                                <img src="assets/images/logo.png" alt="" />
                            </Link>
                            <ul className="nav">
                                <li><Link to="/" className="active">Home</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                {
                                    (!accessToken || (accessToken && uType === 'admin')) && (
                                        <>
                                            <li><Link to="/register">Register</Link></li>
                                            <li><Link to="/login">Login</Link></li>
                                        </>
                                    )
                                }
                                {accessToken && uType == 'user' && (
                                    <li><Link to="/contact-us">Contact Us</Link></li>
                                )}

                                {accessToken && uType == 'user' && (
                                    <li><Link to="#" onClick={(e) => {
                                        logOut(e);
                                    }}>Logout</Link></li>
                                )}

                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    )
}
