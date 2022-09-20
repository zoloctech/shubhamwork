import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import {
  Button, TextField,
} from '@mui/material';
import { Upload } from 'antd';
import { makeStyles } from '@material-ui/styles';
import {
  API_URL,
  RATING,
  VIEWALLDOCTOR,
} from '../../../../Apiconst/Apiconst';
// components
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Page from '../../../../component/Page';
import { Formik, Form, Field } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import * as Yup from 'yup';

const useStyles = makeStyles({
  input: {
    fontFamily: 'sans-serif',
    fontSize: '14px',
    height: '45px',
    backgroundColor: 'white',
    '& .react-date-picker__wrapper': {
      padding: '0 20px',
      borderColor: '#ccc',
      borderRadius: '4px',
      width: '475px',
    },
    '& .react-date-picker--open': {
      borderColor: 'red',
    },
  },
  label: {
    width: '58px',
    marginTop: '-7px',
    marginLeft: '12px',
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: '2000',
    fontSize: '11px',
    fontFamily: 'sans-serif',
    paddingLeft: '10px',
  },
});

function DoctorRatingReview() {
  const success = () => {};
  const classes = useStyles();
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState([]);
  const [userRequest, setUserRequest] = useState([]);
  const keyUser = localStorage.getItem('key_user');

  const onSubmit = (values, e) => {
    console.log(values)
    const url1 = `${API_URL}/${RATING}`;
    var bodyFormData = new FormData();
    bodyFormData.append('user', keyUser);
    bodyFormData.append('doctor', selected.value);
    bodyFormData.append('rating', values.rating);
    bodyFormData.append('review', values.review);

  
    axios
      .post(url1, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          success(toast.success(response.data.message));
        }
      });
  };

  const [label, setlables] = useState();
  useEffect(() => {
    setLoading(true);
    const url = `${API_URL}/${VIEWALLDOCTOR}`;

    axios
      .get(url, {})
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        setUserRequest(data.response);
        let lablearray = [];
        for (let index = 0; index < data.response.length; index++) {
          lablearray.push({
            label: data.response[index].clinic_name,
            value: data.response[index].id,
          });
        }
        setlables(lablearray);
      });
  }, [state]);
  return (
    <>
      <div className='content-wrapper'>
        <div className='container-full'>
          {/* <!-- Content Header (Page header) --> */}
          <div className='content-header'>
            <div className='d-flex align-items-center'>
              <div className='me-auto'>
                <h4 className='page-title'>DOCTOR RATING</h4>
                <div className='d-inline-block align-items-center'>
                  {/* <ToastContainer  toastStyle={{backgroundColor : 'black', color : 'white'}}/> */}
                  <Formik
                    key='one'
                    enableReinitialize
                    initialValues={{
                      rating: '',
                      review: '',
                    }}
                    validationSchema={Yup.object().shape({

                      // rating: Yup.string()
                      //       .required('Rating is required'),
                      //       review: Yup.string()
                      //       .required('Review is required')
                          
                    })}

                    onSubmit={(values) => {
                      onSubmit(values);
                      console.log(values);
                    }}
                  >
                    {({ setFieldValue, touched, values }) => (
                      <>
                        <Form key='oneForm'>
                          <div className='form-row row p-15'>
                            <div className='row'>
                              <label>Doctor Id</label>
                            
                              <div className='form-group col-xl-5 '>
                                <Select
                                  options={label}
                                  onChange={setSelected}
                                  value={selected}
                                  selected={selected}
                                  placeholder='Select doctor id'
                                  name='doctor_id'
                                />
                              </div>
                            </div>

                

                            <div className='row'>
                            <label>Rating</label>
                              <div className='form-group col-md-5 '>
                              <Field
                                  type='number'
                                  name='rating'
                                  className='form-control p-10'
                                  placeholder='Select Rating'
                                />
                              </div>
                              </div>
                              <div className='row'>
                              <label>Review</label>
                              <div className='form-group col-md-5 '>
                                <Field
                                  type='text'
                                  name='review'
                                  className='form-control p-10'
                                  placeholder='Enter review'
                                />
                              </div>
                            </div>

                            <div className='col-md-10 '>
                              <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                color='primary'
                                className='form-control btn btn-primary '
                              >
                                ADD
                              </Button>
                            </div>
                          </div>
                        </Form>
                      </>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DoctorRatingReview;
