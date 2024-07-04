import React, { useEffect } from 'react'
import Header from '../Includes/Header'
import Footer from '../Includes/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import { loginValidation } from '../schema';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreaters } from "../../Redux/index";
import GeneralService from '../../services/general.service';
import { bindActionCreators } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';

export default function UserLogin() {
  const dispatch = useDispatch();
  const userActions = bindActionCreators(actionCreaters, dispatch);

  const navigate = useNavigate();

  const state = useSelector((state) => state.stateVals);
  const { name, uType, accessToken } = state;

  useEffect(() => {
    if (accessToken && uType == 'user') {
      navigate("/");
    }
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: loginValidation,
      onSubmit: (values, action) => {
        formSubmit(values, action);
      },
    });

  const formSubmit = async (values, action) => {
    // setLoading(true);
    try {
      const response = await GeneralService.login(values);
      // console.log(response);
      const { data } = response;
      const { access_token, user } = data;
      const { id, name } = user;
      // console.log(data);
      userActions.logIn({
        accessToken: access_token,
        id: id,
        name: name,
        uType: "user"
      });

      action.resetForm();
      window.location.href = "/";
      // setLoading(false);
    } catch (err) {
      // setLoading(false);

      if (err?.response?.status === 401) {
        toast.error("Username or Password is incorrect", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error("Something went wrong", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  return (
    <>
      <Header />
      <div className="page-heading contact normal-space">
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text">
                <h6>Mr FREELANCER</h6>
                <h2>Login</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="item-details-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form id="contact" noValidate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-4">
                    <fieldset>
                      <label for="username">Username</label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Username"
                        required />
                      {errors.username && touched.username ? (
                        <p className="help is-danger">{errors.username}</p>
                      ) : null}
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                      <label for="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Password"
                        required />
                      {errors.password && touched.password ? (
                        <p className="help is-danger">{errors.password}</p>
                      ) : null}
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button">Login</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
