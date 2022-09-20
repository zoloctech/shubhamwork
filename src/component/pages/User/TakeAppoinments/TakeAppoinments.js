import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { TextField } from '../../../../CommonFieldComponent/FormFields';
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import { default as DatePick } from 'react-date-picker';
// import TimePicker from 'react-time-picker';
// import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
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

const useStyles = makeStyles({
  input: {
    width: 'inherit',
    paddingLeft : '2px',
    paddingRight : '2px',
  },
});

const useStyles1 = makeStyles({
    input: {
        fontFamily: 'sans-serif',
        fontSize: '30px',
        minHeight: '38px !important',
        width: '500px !important',
        backgroundColor: 'white',
        border: '1px solid hsl(0, 0%, 70%)',
        borderRadius : '5px',
        fontSize: '14px',
        fontFamily: 'sans-serif',
        margin: '2px',
        paddingBottom : '-2px',
        paddingTop: '2px',
        flex: '1 1 auto',
        display: 'inline-grid',
        gridArea: '1/1/2/3',
        // textAlign : 'center',
        // justifyContent : 'center',
       
      },
    });
function TakeAppoinments() {
  const success = () => {};
  const classes = useStyles();
  const classes1 = useStyles1();

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
          <div className='wrapper'>
    <div className="content-wrapper">
	  <div className="container-full">
<div className="content-header">
			<div className="d-flex align-items-center">
				<div className="me-auto">
					<h4 className="page-title">General Form Elements</h4>
					<div className="d-inline-block align-items-center">
						<nav>
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
								<li className="breadcrumb-item" aria-current="page">Forms</li>
								<li className="breadcrumb-item active" aria-current="page">General Form Elements</li>
							</ol>
						</nav>
					</div>
				</div>
				
			</div>
		</div>	  
                  <Formik
                    key='one'
                    enableReinitialize
                    initialValues={{
                      start_date: '',
                      doctor_id: '',
                      end_date: '',
                      start_time: '',
                      end_time: '',
                      shortdescription: ''
                      
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
                         <section className="content">
                      <div className="box">
                      <div className="box-header with-border">
						  <h4 className="box-title">APPOINTMENT FORM</h4>
						</div>
                        <Form key='oneForm'>
                        <div  className="box-body">
								<h4  className="box-title text-info mb-0"><i  className="ti-user me-15"></i>TAKE APPOINTMENT</h4>
								<hr  className="my-15"/>
                            <div className='row'>
                              <div className='col-6'>
                              <label className="form-label" style={{ fontWeight : '1000'}} >Start Date</label>
                                <div className='input-group'>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <DateTimePicker
                                    value={valid_from_date}
                                    onChange={handleDateChange}
                                    name='start_date'
                                    className={classes1.input}
                                  />
                                </MuiPickersUtilsProvider>
                                </div>
                              </div>{' '}
                              
                              <div className='col-6'>
                              <label className="form-label" style={{ fontWeight : '1000'}} >Doctor Id</label>

                                <div className='input-group'>
                                <Select
                                  options={label}
                                  onChange={setSelected}
                                  value={selected}
                                  selected={selected}
                                  placeholder='Select doctor id'
                                  name='doctor_id'
                                  className={classes.input}
                                />
                              </div>
                            </div>

                            <div className='col-6'>
                            <label className="form-label" style={{ fontWeight : '1000'}} >End Date</label>

                                <div className='input-group'>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <DateTimePicker
                                    value={valid_till_date}
                                    onChange={handleDateChange1}
                                    name='end_date'
                                    className={classes1.input}
                                  />
                                </MuiPickersUtilsProvider>
                                </div>
                            </div>
                            <div className='col-6'>
                            <label className="form-label" style={{ fontWeight : '1000'}} >Start Time</label>

                                <div className='input-group'>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <TimePicker
                                    openTo='hours'
                                    views={['hours', 'minutes', 'seconds']}
                                    value={from_time}
                                    name='start_time'
                                    onChange={handleDateChange3}
                                    className={classes1.input}
                                  />
                                </MuiPickersUtilsProvider>
                              </div>
                            </div>

                            <div className='col-6'>
                            <label className="form-label" style={{ fontWeight : '1000'}} >End Date</label>

                                <div className='input-group'>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <TimePicker
                                    openTo='hours'
                                    views={['hours', 'minutes', 'seconds']}
                                    value={to_time}
                                    name='end_time'
                                    placeholder='Enter end time'
                                    onChange={handleDateChange4}
                                    className={classes1.input}
                                  />
                                </MuiPickersUtilsProvider>
                                </div>
                            </div>
                            <div className='col-6'>
                            <label className="form-label" style={{ fontWeight : '1000'}} >Short Description</label>

                                <div className='input-group'>
                                <Field
                                  label='Short Description'
                                  type='text'
                                  name='shortdescription'
                                  className={classes1.input}
                                  placeholder='Enter short description'
                                />
                              </div>
                            </div>
                            </div>
                            <div  className="box-footer">
                            <button
                                type='submit'
                                className="btn btn-primary"
                              >
                                  <i  className="ti-save-alt"></i>
                                ADD
                              </button>
                              </div>  
                             
                             </div>
                  
                        </Form>
                        </div>
                        </section>
                      </>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
    </>
  );
}
export default TakeAppoinments;
