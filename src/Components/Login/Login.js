import React, { useEffect } from 'react'
import logo from '../Includes/Images/logo.png';
import './Login.css'
import { useFormik } from 'formik';
import { loginValidation } from '../schema';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import GeneralService from '../../services/general.service';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreaters } from '../../Redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const userActions = bindActionCreators(actionCreaters, dispatch);

  const state = useSelector((state) => state.stateVals);
  const { id, accessToken, uType } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken && uType == 'admin') {
      navigate("/dashboard");
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
      const response = await GeneralService.loginAdmin(values);
      const { data } = response;
      const { access_token, user } = data;
      const { id, name } = user;

      userActions.logIn({
        accessToken: access_token,
        id: id,
        name: name,
        uType: "admin"
      });

      action.resetForm();
      window.location.href = "/dashboard";
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
    <div className="login-container">
      <ToastContainer />
      <div className="login-form">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Login</h2>
        <form noValidate onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={values.username || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              required />
            {errors.username && touched.username ? (
              <p className="help is-danger">{errors.username}</p>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              required />
            {errors.password && touched.password ? (
              <p className="help is-danger">{errors.password}</p>
            ) : null}
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  )
}
