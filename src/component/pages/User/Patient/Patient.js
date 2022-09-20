import React from 'react'
import {Link} from 'react-router-dom'
function Patient() {
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
                                    <nav>
                                        <ol className='breadcrumb'>
                                            <li className='breadcrumb-item'><Link to='#'><i className='mdi mdi-home-outline'></i></Link></li>
                                            <li className='breadcrumb-item active' aria-current='page'>Patients</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Main content --> */}
                    <section className='content'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='box'>
                                    <div className='box-body'>
                                        <div className='table-responsive rounded card-table'>
                                            <table className='table border-no' id='example1'>
                                                <thead>
                                                    <tr>
                                                        <th>Patient ID</th>
                                                        <th>Date Check In</th>
                                                        <th>Patient Name</th>
                                                        <th>Doctor Assgined</th>
                                                        <th>Disease</th>
                                                        <th>Status</th>
                                                        <th>Room No</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className='hover-primary'>
                                                        <td>#p245879</td>
                                                        <td>14 April 2021, 10:30 AM</td>
                                                        <td>Aaliyah clark</td>
                                                        <td>Dr. Johen Doe</td>
                                                        <td>Cold & Flu</td>
                                                        <td><span className='badge badge-danger-light'>New Patient</span></td>
                                                        <td>FF-103</td>
                                                        <td>
                                                            <div className='btn-group'>
                                                                <Link to='#'  className='hover-primary dropdown-toggle no-caret' data-bs-toggle='dropdown'><i className='fa fa-ellipsis-h'></i></Link>
                                                                <div className='dropdown-menu'>
                                                                    <Link className='dropdown-item' to='#'>View Details</Link>
                                                                    <Link className='dropdown-item' to='#'>Edit</Link>
                                                                    <Link className='dropdown-item' to='#'>Delete</Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='hover-primary'>
                                                        <td>#p245880</td>
                                                        <td>18 April 2021, 11:30 AM</td>
                                                        <td>Mical clark</td>
                                                        <td>Dr. Aiden Doe</td>
                                                        <td>Diabetes</td>
                                                        <td><span className='badge badge-success-light'>Recovered</span></td>
                                                        <td>FF-105</td>
                                                        <td>
                                                            <div className='btn-group'>
                                                                <Link to='#'  className='hover-primary dropdown-toggle no-caret' data-bs-toggle='dropdown'><i className='fa fa-ellipsis-h'></i></Link>
                                                                <div className='dropdown-menu'>
                                                                    <Link className='dropdown-item' to='#'>View Details</Link>
                                                                    <Link className='dropdown-item' to='#'>Edit</Link>
                                                                    <Link className='dropdown-item' to='#'>Delete</Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='hover-primary'>
                                                        <td>#p245881</td>
                                                        <td>22 May 2021, 15:30 PM</td>
                                                        <td>Stela clark</td>
                                                        <td>Dr. Lalvani doe</td>
                                                        <td>Hearing Loss</td>
                                                        <td><span className='badge badge-danger-light'>New Patient</span></td>
                                                        <td>FF-112</td>
                                                        <td>
                                                            <div className='btn-group'>
                                                                <Link to='#'  className='hover-primary dropdown-toggle no-caret' data-bs-toggle='dropdown'><i className='fa fa-ellipsis-h'></i></Link>
                                                                <div className='dropdown-menu'>
                                                                    <Link className='dropdown-item' to='#'>View Details</Link>
                                                                    <Link className='dropdown-item' to='#'>Edit</Link>
                                                                    <Link className='dropdown-item' to='#'>Delete</Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='hover-primary'>
                                                        <td>#p245882</td>
                                                        <td>26 April 2021, 10:30 AM</td>
                                                        <td>Boone Doe</td>
                                                        <td>Dr. Don Paton</td>
                                                        <td>Allergies & Asthma</td>
                                                        <td><span className='badge badge-danger-light'>New Patient</span></td>
                                                        <td>FF-124</td>
                                                        <td>
                                                            <div className='btn-group'>
                                                                <Link to='#'  className='hover-primary dropdown-toggle no-caret' data-bs-toggle='dropdown'><i className='fa fa-ellipsis-h'></i></Link>
                                                                <div className='dropdown-menu'>
                                                                    <Link className='dropdown-item' to='#'>View Details</Link>
                                                                    <Link className='dropdown-item' to='#'>Edit</Link>
                                                                    <Link className='dropdown-item' to='#'>Delete</Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='hover-primary'>
                                                        <td>#p245883</td>
                                                        <td>30 April 2021, 10:30 AM</td>
                                                        <td>Carlie Paton</td>
                                                        <td>Dr. Mical Doe</td>
                                                        <td>Sleep Problem</td>
                                                        <td><span className='badge badge-warning-light'>In Treatment</span></td>
                                                        <td>FF-117</td>
                                                        <td>
                                                            <div className='btn-group'>
                                                                <Link to='#'  className='hover-primary dropdown-toggle no-caret' data-bs-toggle='dropdown'><i className='fa fa-ellipsis-h'></i></Link>
                                                                <div className='dropdown-menu'>
                                                                    <Link className='dropdown-item' to='#'>View Details</Link>
                                                                    <Link className='dropdown-item' to='#'>Edit</Link>
                                                                    <Link className='dropdown-item' to='#'>Delete</Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='hover-primary'>
                                                        <td>#p245884</td>
                                                        <td>1 May 2021, 10:30 AM</td>
                                                        <td>Delilah</td>
                                                        <td>Dr. Johen Doe</td>
                                                        <td>Dental Care</td>
                                                        <td><span className='badge badge-success-light'>Recovered</span></td>
                                                        <td>FF-141</td>
                                                        <td>
                                                            <div className='btn-group'>
                                                                <Link to='#'  className='hover-primary dropdown-toggle no-caret' data-bs-toggle='dropdown'><i className='fa fa-ellipsis-h'></i></Link>
                                                                <div className='dropdown-menu'>
                                                                    <Link className='dropdown-item' to='#'>View Details</Link>
                                                                    <Link className='dropdown-item' to='#'>Edit</Link>
                                                                    <Link className='dropdown-item' to='#'>Delete</Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='hover-primary'>
                                                        <td>#p245885</td>
                                                        <td>2 May 2021, 10:30 AM</td>
                                                        <td>Hannah Doe</td>
                                                        <td>Dr. Jennifer Ruby</td>
                                                        <td>Diabetes</td>
                                                        <td><span className='badge badge-warning-light'>In Treatment</span></td>
                                                        <td>SF-203</td>
                                                        <td>
                                                            <div className='btn-group'>
                                                                <Link to='#'  className='hover-primary dropdown-toggle no-caret' data-bs-toggle='dropdown'><i className='fa fa-ellipsis-h'></i></Link>
                                                                <div className='dropdown-menu'>
                                                                    <Link className='dropdown-item' to='#'>View Details</Link>
                                                                    <Link className='dropdown-item' to='#'>Edit</Link>
                                                                    <Link className='dropdown-item' to='#'>Delete</Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='hover-primary'>
                                                        <td>#p245886</td>
                                                        <td>3 May 2021, 10:30 AM</td>
                                                        <td>Emerson Clark</td>
                                                        <td>Dr. Alex Siauw</td>
                                                        <td>Covid-19 Suspect</td>
                                                        <td><span className='badge badge-warning-light'>In Treatment</span></td>
                                                        <td>SF-201</td>
                                                        <td>
                                                            <div className='btn-group'>
                                                                <Link to='#'  className='hover-primary dropdown-toggle no-caret' data-bs-toggle='dropdown'><i className='fa fa-ellipsis-h'></i></Link>
                                                                <div className='dropdown-menu'>
                                                                    <Link className='dropdown-item' to='#'>View Details</Link>
                                                                    <Link className='dropdown-item' to='#'>Edit</Link>
                                                                    <Link className='dropdown-item' to='#'>Delete</Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='hover-primary'>
                                                        <td>#p245887</td>
                                                        <td>4 May 2021, 10:30 AM</td>
                                                        <td>Crystal Doe</td>
                                                        <td>Dr. Samuel Jr.</td>
                                                        <td>Cold & Flu</td>
                                                        <td><span className='badge badge-success-light'>Recovered</span></td>
                                                        <td>SF-205</td>
                                                        <td>
                                                            <div className='btn-group'>
                                                                <Link to='#'  className='hover-primary dropdown-toggle no-caret' data-bs-toggle='dropdown'><i className='fa fa-ellipsis-h'></i></Link>
                                                                <div className='dropdown-menu'>
                                                                    <Link className='dropdown-item' to='#'>View Details</Link>
                                                                    <Link className='dropdown-item' to='#'>Edit</Link>
                                                                    <Link className='dropdown-item' to='#'>Delete</Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='hover-primary'>
                                                        <td>#p245888</td>
                                                        <td>5 May 2021, 10:30 AM</td>
                                                        <td>Jenny don</td>
                                                        <td>Dr. Widan Cheeh</td>
                                                        <td>Cold & Flu</td>
                                                        <td><span className='badge badge-warning-light'>In Treatment</span></td>
                                                        <td>SF-210</td>
                                                        <td>
                                                            <div className='btn-group'>
                                                                <Link to='#'  className='hover-primary dropdown-toggle no-caret' data-bs-toggle='dropdown'><i className='fa fa-ellipsis-h'></i></Link>
                                                                <div className='dropdown-menu'>
                                                                    <Link className='dropdown-item' to='#'>View Details</Link>
                                                                    <Link className='dropdown-item' to='#'>Edit</Link>
                                                                    <Link className='dropdown-item' to='#'>Delete</Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='hover-primary'>
                                                        <td>#p245889</td>
                                                        <td>6 May 2021, 10:30 AM</td>
                                                        <td>Joanne Clark</td>
                                                        <td>Dr. Samantha</td>
                                                        <td>Dental Care</td>
                                                        <td><span className='badge badge-danger-light'>New Patient</span></td>
                                                        <td>SF-215</td>
                                                        <td>
                                                            <div className='btn-group'>
                                                                <Link to='#'  className='hover-primary dropdown-toggle no-caret' data-bs-toggle='dropdown'><i className='fa fa-ellipsis-h'></i></Link>
                                                                <div className='dropdown-menu'>
                                                                    <Link className='dropdown-item' to='#'>View Details</Link>
                                                                    <Link className='dropdown-item' to='#'>Edit</Link>
                                                                    <Link className='dropdown-item' to='#'>Delete</Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='hover-primary'>
                                                        <td>#p245890</td>
                                                        <td>6 May 2021, 10:30 AM</td>
                                                        <td>Madeline doe</td>
                                                        <td>Dr. Widan Cheeh</td>
                                                        <td>Allergies & Asthma</td>
                                                        <td><span className='badge badge-warning-light'>In Treatment</span></td>
                                                        <td>SF-216</td>
                                                        <td>
                                                            <div className='btn-group'>
                                                                <Link to='#'  className='hover-primary dropdown-toggle no-caret' data-bs-toggle='dropdown'><i className='fa fa-ellipsis-h'></i></Link>
                                                                <div className='dropdown-menu'>
                                                                    <Link className='dropdown-item' to='#'>View Details</Link>
                                                                    <Link className='dropdown-item' to='#'>Edit</Link>
                                                                    <Link className='dropdown-item' to='#'>Delete</Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- /.content --> */}
                </div>
            </div>
            {/* <Footer/> */}

            {/* <!-- Control Sidebar --> */}
            <aside className='control-sidebar'>

                <div className='rpanel-title'><span className='pull-right btn btn-circle btn-danger' data-toggle='control-sidebar'><i className='ion ion-close text-white'></i></span> </div>  
                <ul className='nav nav-tabs control-sidebar-tabs'>
                    <li className='nav-item'><Link to='#control-sidebar-home-tab' data-bs-toggle='tab' className='active'><i className='mdi mdi-message-text'></i></Link></li>
                    <li className='nav-item'><Link to='#control-sidebar-settings-tab' data-bs-toggle='tab'><i className='mdi mdi-playlist-check'></i></Link></li>
                </ul>
                {/* <!-- Tab panes --> */}
                <div className='tab-content'>
                    {/* <!-- Home tab content --> */}
                    <div className='tab-pane active' id='control-sidebar-home-tab'>
                        <div className='flexbox'>
                            <Link to='#' className='text-grey'>
                                <i className='ti-more'></i>
                            </Link>
                            <p>Users</p>
                            <Link to='#' className='text-end text-grey'><i className='ti-plus'></i></Link>
                        </div>
                        <div className='lookup lookup-sm lookup-right d-none d-lg-block'>
                            <input type='text' name='s' placeholder='Search' className='w-p100'/>
                        </div>
                        <div className='media-list media-list-hover mt-20'>
                            <div className='media py-10 px-0'>
                                <Link className='avatar avatar-lg status-success' to='#'>
                                    <img src='images/1.jpg' alt=''/>
                                </Link>
                                <div className='media-body'>
                                    <p className='fs-16'>
                                        <Link className='hover-primary' to='#'><strong>Tyler</strong></Link>
                                    </p>
                                    <p>Praesent tristique diam...</p>
                                    <span>Just now</span>
                                </div>
                            </div>

                            <div className='media py-10 px-0'>
                                <Link className='avatar avatar-lg status-danger' to='#'>
                                    <img src='images/2.jpg' alt=''/>
                                </Link>
                                <div className='media-body'>
                                    <p className='fs-16'>
                                        <Link className='hover-primary' to='#'><strong>Luke</strong></Link>
                                    </p>
                                    <p>Cras tempor diam ...</p>
                                    <span>33 min ago</span>
                                </div>
                            </div>

                            <div className='media py-10 px-0'>
                                <Link className='avatar avatar-lg status-warning' to='#'>
                                    <img src='images/3.jpg' alt=''/>
                                </Link>
                                <div className='media-body'>
                                    <p className='fs-16'>
                                        <Link className='hover-primary' to='#'><strong>Evan</strong></Link>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>

                            <div className='media py-10 px-0'>
                                <Link className='avatar avatar-lg status-primary' to='#'>
                                    <img src='images/4.jpg' alt=''/>
                                </Link>
                                <div className='media-body'>
                                    <p className='fs-16'>
                                        <Link className='hover-primary' to='#'><strong>Evan</strong></Link>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>

                            <div className='media py-10 px-0'>
                                <Link className='avatar avatar-lg status-success' to='#'>
                                    <img src='images/1.jpg' alt=''/>
                                </Link>
                                <div className='media-body'>
                                    <p className='fs-16'>
                                        <Link className='hover-primary' to='#'><strong>Tyler</strong></Link>
                                    </p>
                                    <p>Praesent tristique diam...</p>
                                    <span>Just now</span>
                                </div>
                            </div>

                            <div className='media py-10 px-0'>
                                <Link className='avatar avatar-lg status-danger' to='#'>
                                    <img src='images/2.jpg' alt=''/>
                                </Link>
                                <div className='media-body'>
                                    <p className='fs-16'>
                                        <Link className='hover-primary' to='#'><strong>Luke</strong></Link>
                                    </p>
                                    <p>Cras tempor diam ...</p>
                                    <span>33 min ago</span>
                                </div>
                            </div>

                            <div className='media py-10 px-0'>
                                <Link className='avatar avatar-lg status-warning' to='#'>
                                    <img src='images/3.jpg' alt=''/>
                                </Link>
                                <div className='media-body'>
                                    <p className='fs-16'>
                                        <Link className='hover-primary' to='#'><strong>Evan</strong></Link>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>

                            <div className='media py-10 px-0'>
                                <Link className='avatar avatar-lg status-primary' to='#'>
                                    <img src='images/4.jpg' alt=''/>
                                </Link>
                                <div className='media-body'>
                                    <p className='fs-16'>
                                        <Link className='hover-primary' to='#'><strong>Evan</strong></Link>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* <!-- /.tab-pane --> */}
                    {/* <!-- Settings tab content --> */}
                    <div className='tab-pane' id='control-sidebar-settings-tab'>
                        <div className='flexbox'>
                            <Link to='#' className='text-grey'>
                                <i className='ti-more'></i>
                            </Link>
                            <p>Todo List</p>
                            <Link to='#' className='text-end text-grey'><i className='ti-plus'></i></Link>
                        </div>
                        <ul className='todo-list mt-20'>
                            <li className='py-15 px-5 by-1'>
                                {/* <!-- checkbox --> */}
                                <input type='checkbox' id='basic_checkbox_1' className='filled-in'/>
                                    <label htmlFor='basic_checkbox_1' className='mb-0 h-15'></label>
                                    {/* <!-- todo text --> */}
                                    <span className='text-line'>Nulla vitae purus</span>
                                    {/* <!-- Emphasis label --> */}
                                    <small className='badge bg-danger'><i className='fa fa-clock-o'></i> 2 mins</small>
                                    {/* <!-- General tools such as edit or delete--> */}
                                    <div className='tools'>
                                        <i className='fa fa-edit'></i>
                                        <i className='fa fa-trash-o'></i>
                                    </div>
                            </li>
                            <li className='py-15 px-5'>
                                {/* <!-- checkbox --> */}
                                <input type='checkbox' id='basic_checkbox_2' className='filled-in'/>
                                    <label htmlFor='basic_checkbox_2' className='mb-0 h-15'></label>
                                    <span className='text-line'>Phasellus interdum</span>
                                    <small className='badge bg-info'><i className='fa fa-clock-o'></i> 4 hours</small>
                                    <div className='tools'>
                                        <i className='fa fa-edit'></i>
                                        <i className='fa fa-trash-o'></i>
                                    </div>
                            </li>
                            <li className='py-15 px-5 by-1'>
                                {/* <!-- checkbox --> */}
                                <input type='checkbox' id='basic_checkbox_3' className='filled-in'/>
                                    <label htmlFor='basic_checkbox_3' className='mb-0 h-15'></label>
                                    <span className='text-line'>Quisque sodales</span>
                                    <small className='badge bg-warning'><i className='fa fa-clock-o'></i> 1 day</small>
                                    <div className='tools'>
                                        <i className='fa fa-edit'></i>
                                        <i className='fa fa-trash-o'></i>
                                    </div>
                            </li>
                            <li className='py-15 px-5'>
                                {/* <!-- checkbox --> */}
                                <input type='checkbox' id='basic_checkbox_4' className='filled-in'/>
                                    <label htmlFor='basic_checkbox_4' className='mb-0 h-15'></label>
                                    <span className='text-line'>Proin nec mi porta</span>
                                    <small className='badge bg-success'><i className='fa fa-clock-o'></i> 3 days</small>
                                    <div className='tools'>
                                        <i className='fa fa-edit'></i>
                                        <i className='fa fa-trash-o'></i>
                                    </div>
                            </li>
                            <li className='py-15 px-5 by-1'>
                                {/* <!-- checkbox --> */}
                                <input type='checkbox' id='basic_checkbox_5' className='filled-in'/>
                                    <label htmlFor='basic_checkbox_5' className='mb-0 h-15'></label>
                                    <span className='text-line'>Maecenas scelerisque</span>
                                    <small className='badge bg-primary'><i className='fa fa-clock-o'></i> 1 week</small>
                                    <div className='tools'>
                                        <i className='fa fa-edit'></i>
                                        <i className='fa fa-trash-o'></i>
                                    </div>
                            </li>
                            <li className='py-15 px-5'>
                                {/* <!-- checkbox --> */}
                                <input type='checkbox' id='basic_checkbox_6' className='filled-in'/>
                                    <label htmlFor='basic_checkbox_6' className='mb-0 h-15'></label>
                                    <span className='text-line'>Vivamus nec orci</span>
                                    <small className='badge bg-info'><i className='fa fa-clock-o'></i> 1 month</small>
                                    <div className='tools'>
                                        <i className='fa fa-edit'></i>
                                        <i className='fa fa-trash-o'></i>
                                    </div>
                            </li>
                            <li className='py-15 px-5 by-1'>
                                {/* <!-- checkbox --> */}
                                <input type='checkbox' id='basic_checkbox_7' className='filled-in'/>
                                    <label htmlFor='basic_checkbox_7' className='mb-0 h-15'></label>
                                    {/* <!-- todo text --> */}
                                    <span className='text-line'>Nulla vitae purus</span>
                                    {/* <!-- Emphasis label --> */}
                                    <small className='badge bg-danger'><i className='fa fa-clock-o'></i> 2 mins</small>
                                    {/* <!-- General tools such as edit or delete--> */}
                                    <div className='tools'>
                                        <i className='fa fa-edit'></i>
                                        <i className='fa fa-trash-o'></i>
                                    </div>
                            </li>
                            <li className='py-15 px-5'>
                                {/* <!-- checkbox --> */}
                                <input type='checkbox' id='basic_checkbox_8' className='filled-in'/>
                                    <label htmlFor='basic_checkbox_8' className='mb-0 h-15'></label>
                                    <span className='text-line'>Phasellus interdum</span>
                                    <small className='badge bg-info'><i className='fa fa-clock-o'></i> 4 hours</small>
                                    <div className='tools'>
                                        <i className='fa fa-edit'></i>
                                        <i className='fa fa-trash-o'></i>
                                    </div>
                            </li>
                            <li className='py-15 px-5 by-1'>
                                {/* <!-- checkbox --> */}
                                <input type='checkbox' id='basic_checkbox_9' className='filled-in'/>
                                    <label htmlFor='basic_checkbox_9' className='mb-0 h-15'></label>
                                    <span className='text-line'>Quisque sodales</span>
                                    <small className='badge bg-warning'><i className='fa fa-clock-o'></i> 1 day</small>
                                    <div className='tools'>
                                        <i className='fa fa-edit'></i>
                                        <i className='fa fa-trash-o'></i>
                                    </div>
                            </li>
                            <li className='py-15 px-5'>
                                {/* <!-- checkbox --> */}
                                <input type='checkbox' id='basic_checkbox_10' className='filled-in'/>
                                    <label htmlFor='basic_checkbox_10' className='mb-0 h-15'></label>
                                    <span className='text-line'>Proin nec mi porta</span>
                                    <small className='badge bg-success'><i className='fa fa-clock-o'></i> 3 days</small>
                                    <div className='tools'>
                                        <i className='fa fa-edit'></i>
                                        <i className='fa fa-trash-o'></i>
                                    </div>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- /.tab-pane --> */}
                </div>
            </aside>
    </>
  )
}

export default Patient