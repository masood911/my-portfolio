import React, { useEffect } from 'react'
import Header from '../Includes/Header'
import Footer from '../Includes/Footer'
import { useFormik } from 'formik';
import { contactValidation } from '../schema';
import { Link, useNavigate } from 'react-router-dom';
import GeneralService from '../../services/general.service';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

export default function ContactUs() {
  const state = useSelector((state) => state.stateVals);
  const { id, accessToken, uType } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken || (accessToken && uType === 'admin')) {
      navigate("/login");
    }
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        subject: "",
        message: "",
      },
      validationSchema: contactValidation,
      onSubmit: (values, action) => {
        console.log(values);
        formSubmit(values, action);
      },
    });

  const formSubmit = async (values, action) => {
    // setLoading(true);
    try {
      values.created_by = id;
      await GeneralService.submitMessage(values);
      toast.success("Message sent successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    } catch (err) {
      // setLoading(false);
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
  };

  return (
    <>
      <Header />
      <div className="page-heading contact normal-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text">
                <h6>Mr FREELANCER</h6>
                <h2>View Contact Us</h2>
                <span><Link to="/">Home ＞</Link>Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="item-details-page">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <div class="line-dec"></div>
                <h2>Let's discuss your project<em> Contact us</em> today!</h2>
              </div>
            </div>
            <div class="col-lg-12">
              <form id="contact" noValidate onSubmit={handleSubmit}>
                <div class="row">
                  <div class="col-lg-6">
                    <fieldset>
                      <label for="subject">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={values.subject || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Subject"
                        required />
                      {errors.subject && touched.subject ? (
                        <p className="help is-danger">{errors.subject}</p>
                      ) : null}
                    </fieldset>
                  </div>
                  <div class="col-lg-6">
                    <fieldset>
                      <label for="message">Message</label>
                      <textarea
                        type="text"
                        name="message"
                        id="message"
                        value={values.message || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Something Message..."
                        required></textarea>
                      {errors.message && touched.message ? (
                        <p className="help is-danger">{errors.message}</p>
                      ) : null}
                    </fieldset>
                  </div>

                  <fieldset>
                    <button type="submit" id="form-submit" class="orange-button">Submit Message</button>
                  </fieldset>
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
