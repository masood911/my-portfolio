import React, { useState } from 'react'
import Header from '../Includes/Header'
import Footer from '../Includes/Footer'
import { Link } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from 'formik';
import { registerValidation } from '../schema';
import { useDispatch } from 'react-redux';
import { actionCreaters } from "../../Redux/index";
import GeneralService from '../../services/general.service';
import { bindActionCreators } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {
  const [usernameErr, setUsernameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const dispatch = useDispatch();
  const userActions = bindActionCreators(actionCreaters, dispatch);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: registerValidation,
      onSubmit: (values, action) => {
        formSubmit(values, action);
      },
    });

    const formSubmit = async (values, action) => {
      // setLoading(true);
      setEmailErr("");
      setUsernameErr("");
      
      try {
        const response = await GeneralService.register(values);
        console.log(response);
    
        // Display success toast
        toast.success("Registration successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
    
        // setLoading(false);
      } catch (err) {
        // setLoading(false);
        // console.log(err?.response?.data.username);
        if (err?.response?.status === 422) {
          if (err?.response?.data?.username) {
            setUsernameErr("Username already taken");
          }
    
          if (err?.response?.data?.email) {
            setEmailErr("Email already taken");
          }
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

      <ToastContainer />
      <div className="page-heading contact normal-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text">
                <h6>Mr FREELANCER</h6>
                <h2>Signup</h2>
                <span>Register</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="item-details-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <div className="line-dec"></div>
                <h2>Register now to<em> join our community</em> and access exclusive features!</h2>
              </div>
            </div>
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
                        value={values.username || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Username"
                        required />
                      {errors.username && touched.username ? (
                        <p className="help is-danger">{errors.username}</p>
                      ) : null}
                      {usernameErr && (<p className="help is-danger">{usernameErr}</p>)}
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                      <label for="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={values.name || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Name"
                        required />
                      {errors.name && touched.name ? (
                        <p className="help is-danger">{errors.name}</p>
                      ) : null}
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                      <label for="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={values.email || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Email Address"
                        required />
                      {errors.email && touched.email ? (
                        <p className="help is-danger">{errors.email}</p>
                      ) : null}
                      {emailErr && (<p className="help is-danger">{emailErr}</p>)}
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                      <label for="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={values.password || ""}
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
                      <label for="confirm-password">Confirm Password</label>
                      <input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        value={values.confirm_password || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter confirm Password"
                        required />
                      {errors.confirm_password && touched.confirm_password ? (
                        <p className="help is-danger">{errors.confirm_password}</p>
                      ) : null}
                    </fieldset>
                  </div>
                  <div className="col-lg-8">
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button">Register</button>
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
