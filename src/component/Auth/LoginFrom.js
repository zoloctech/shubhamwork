import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { API_URL, ADMINLOGIN } from "../../Apiconst/Apiconst";
import { Formik, Form, Field } from "formik";
import { login } from "../../InnerComponent/Route/index";
import axios from "axios";
function LoginFrom() {
  // const navigate = useNavigate();

  const url = `${API_URL}/${ADMINLOGIN}`;

  const onSubmit = (values, e) => {
    console.log(values);
    axios
      .post(url, {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        if (response.data.data.phoneNumber) {
          const token = response.data.data.phoneNumber;
          login(token);
          if (response.data.data.phoneNumber === "admin") {
            window.location.href = "/"
          } else if (response.data.data.phoneNumber === "user") {
            window.location.href = "user"
          } else if (response.data.data.phoneNumber === "doctor") {
            window.location.href = "doctor"
          } else if (response.data.data.phoneNumber.length == 0) {
            window.location.href = "/login"
          }
        } else {
          window.location.href = "/login"
        }
      });
  };

  return (
    <>
      <Formik
        key="one"
        enableReinitialize
        initialValues={{
          email: "",
          password: "",
          remember: true,
        }}
        // validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
          onSubmit(values);
        }}
      >
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          setFieldValue,
        }) => (
          <>
          <div className="limiter">
          <div className="container-login100" style={{backgroundImage: "url('images/bg-01.jpg')"}}>
              <div className="wrap-login100 p-t-30 p-b-50">
                  <span className="login100-form-title p-b-41">
  Account Login
  </span>
                  <Form className="login100-form validate-form p-b-33 p-t-5">
                      <div className="wrap-input100 validate-input" data-validate="Enter username">
                        <Field   className="input100" name="email" placeholder="email" />
                          <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                      </div>
                      <div className="wrap-input100 validate-input" data-validate="Enter password">
                      <Field  className="input100" name="password" placeholder="password"/>
                          <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                      </div>
                      <div className="container-login100-form-btn m-t-32">
                          <button className="login100-form-btn" type="submit">
  Login
  </button>
                      </div>
                  </Form>
              </div>
          </div>
      </div>
      <div id="dropDownSelect1"></div>
      </>
        )}
      </Formik>
    </>
  );
}

export default LoginFrom;
