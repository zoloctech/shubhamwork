import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { TextField } from '../../../../CommonFieldComponent/FormFields';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import {
  API_URL,
  TAKEAPPOINTMENT,
  VIEWALLDOCTOR,
} from '../../../../Apiconst/Apiconst';
// components
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Page from '../../../../component/Page';
import { Formik, Form, Field } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
// import Loader from '../../../CommonFieldComponent/Loader'

// const useStyles = makeStyles((theme) => ({
//   tableOverflow: {
//     overflow: 'auto',
//   },
//   submit: {
//     top: '17px',
//   },
//   avatarpreview: {
//     width: '136px',
//     height: '131px',
//   },
//   svg: {
//     display: 'noneimportant',
//   },
// }));
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

function DoctorTiming() {
  const success = () => {};
  const classes = useStyles();
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState([]);
  const [userRequest, setUserRequest] = useState([]);
  const [valid_from_date, handleDateChange] = useState(new Date());
  const [valid_till_date, handleDateChange1] = useState(new Date());
  const newFromDate = moment(valid_from_date).format('YYYY/MM/DD');
  const newTillDate = moment(valid_till_date).format('YYYY/MM/DD');
  const [from_time, handleDateChange3] = useState();
  const [to_time, handleDateChange4] = useState();
  const fromTime = moment(from_time).format('hh:mm:ss');
  const toTime = moment(to_time).format('hh:mm:ss');
  const keyUser = localStorage.getItem('key_user');

  const onSubmit = (values, e) => {
    const url1 = `${API_URL}/${TAKEAPPOINTMENT}`;
    var bodyFormData = new FormData();
    bodyFormData.append('start_date', newFromDate);
    bodyFormData.append('doctor_id', selected.value);
    bodyFormData.append('end_date', newTillDate);
    bodyFormData.append('start_time', fromTime);
    bodyFormData.append('end_time', toTime);
    bodyFormData.append('user_id', keyUser);
    bodyFormData.append('shortdescription', values.shortdescription);

    axios
      .post(url1, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          success(toast.success(response.data.message));
          // navigate('/dashboard/press-releases', { replace: true });
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
                <h4 className='page-title'>Patients</h4>
                <div className='d-inline-block align-items-center'>
                  {/* <ToastContainer
                    toastStyle={{ backgroundColor: 'black', color: 'white' }}
                  /> */}
                  <Formik
                    key='one'
                    enableReinitialize
                    initialValues={{
                      start_date: '',
                      doctor_id: '',
                      end_date: '',
                      start_time: '',
                      end_time: '',
                      shortdescription: '',
                    }}
                    validationSchema={Yup.object().shape({
                      // start_date: Yup.string()
                      //       .required('Start Date is required'),
                      //       doctor_id: Yup.string()
                      //       .required('Doctor id is required'),
                      //       end_date: Yup.string()
                      //       .required('End Date is required'),
                      //       start_time: Yup.string()
                      //       .required('Start time is required'),
                      //       end_time: Yup.string()
                      //       .required('End time is required')
                    })}
                    onSubmit={(values) => {
                      onSubmit(values);
                      console.log(values);
                    }}
                  >
                    {({ setFieldValue, touched, values }) => (
                      <>
                        <Form key='oneForm'>
                          <div className='form-row row p-75'>
                            <div className='row'>
                              <label>Start date</label>
                              <div className='form-group col-md-5 '>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <DateTimePicker
                                    value={valid_from_date}
                                    onChange={handleDateChange}
                                    name='start_date'
                                    className={classes.input}
                                  />
                                </MuiPickersUtilsProvider>
                              </div>

                              <div className='form-group col-md-5 '>
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
                              <label>End date</label>
                              <div className='form-group col-md-5 '>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <DateTimePicker
                                    value={valid_till_date}
                                    onChange={handleDateChange1}
                                    name='end_date'
                                    className={classes.input}
                                  />
                                </MuiPickersUtilsProvider>
                              </div>
                              <div className='form-group col-md-5 '>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <TimePicker
                                    openTo='hours'
                                    views={['hours', 'minutes', 'seconds']}
                                    value={from_time}
                                    name='start_time'
                                    onChange={handleDateChange3}
                                    // renderInput={(params) => (
                                    //   <TextField {...params} />
                                    // )}
                                    className={classes.input}
                                  />
                                </MuiPickersUtilsProvider>
                              </div>
                            </div>

                            <div className='row'>
                              <div className='form-group col-md-5 '>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <TimePicker
                                    openTo='hours'
                                    views={['hours', 'minutes', 'seconds']}
                                    value={to_time}
                                    name='end_time'
                                    onChange={handleDateChange4}
                                    // renderInput={(params) => (
                                    //   <TextField {...params} />
                                    // )}
                                    className={classes.input}
                                  />
                                </MuiPickersUtilsProvider>
                              </div>
                              <div className='form-group col-md-5 '>
                                <Field
                                  label='Short Description'
                                  type='text'
                                  name='shortdescription'
                                  className='form-control p-10'
                                  placeholder='Enter short description'
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
export default DoctorTiming;
