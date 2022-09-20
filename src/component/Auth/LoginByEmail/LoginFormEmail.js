import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField } from '../../../CommonFieldComponent/FormFields';
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
} from '@mui/material';
// import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import { makeStyles } from '@material-ui/styles';
// components
import { Link, useHistory } from 'react-router-dom';
import Page from '../../../component/Page';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { API_URL, GETOTP } from '../../../Apiconst/Apiconst';
import { SectionWrapperStyled } from '../LoginFormStyle';

const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: 'auto',
  },
  submit: {
    top: '17px',
  },
  avatarpreview: {
    width: '136px',
    height: '131px',
  },
  svg: {
    display: 'noneimportant',
  },
}));
function LoginFormEmail() {
  const history = useHistory();
  const success = () => {};
  const classes = useStyles();

  const url = `${API_URL}/${GETOTP}`;

  const onSubmit = (values, e) => {
    const url1 = `${API_URL}/${GETOTP}`;
    var bodyFormData = new FormData();
    bodyFormData.append('section', values.section);
    bodyFormData.append('phone_or_email', values.phone_or_email);
    bodyFormData.append('email', values.email);
    axios
      .post(url1, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          success(toast.success(response.data.message));
          history.push('/login-verfication-email');
        } else {
          history.push('/get-otp');
          success(toast.success(response.data.message));
        }
      });
  };

  return (
    <>
      <Formik
        key='one'
        enableReinitialize
        initialValues={{
          section: 'login',
          phone_or_email: 'email',
          email: '',
        }}
        validationSchema={Yup.object().shape({
          phone_or_email: Yup.string().required('Phone or email is required'),
          email: Yup.string().required('Email is required'),
        })}
        onSubmit={(values) => {
          onSubmit(values);
          console.log(values);
        }}
      >
        {({ setFieldValue, touched, values }) => (
          <>
            <SectionWrapperStyled>
              <div className='form-bg login-formm'>
                <div className='container'>
                  <div className='row d-flex justify-content-center'>
                    <div className='col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8'>
                      <div className='formm-container'>
                        <div className='formm-icon'>
                          <i className='fa fa-user-circle'></i>
                          <span className='signup'>
                            <a href=''>Don't have account? Signup</a>
                          </span>
                        </div>
                        <Form className='formm-horizontal'>
                          <h3 className='title'>Member Login</h3>
                          <div className='form-group'>
                            <span className='input-icon'>
                              <i className='fa fa-envelope'></i>
                            </span>

                            <Field
                              className='formm-control'
                              label='Email'
                              type='email'
                              name='email'
                              placeholder='Email Address'
                            />
                          </div>
                          <button type='submit' className='btn signin'>Login</button>
                         
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapperStyled>
          </>
        )}
      </Formik>
    </>
  );
}

export default LoginFormEmail;
