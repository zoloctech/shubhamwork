import React from "react";
import { useLocation } from 'react-router-dom';
import PrivateRoute from '../InnerComponent/Route/PrivateRoute';


// Admin
import Admin from "../component/pages/Admin/Admin";
import Admindata from "../component/pages/Admin/Admindata";
import AdminDataAdd from "../component/pages/Admin/AdminDataAdd";


//User
import User from "../component/pages/User/User";
import AddUser from "../component/pages/User/AddUser";
import UserData from "../component/pages/User/UserData";


//Doctor
import Doctor from "../component/pages/Doctor/Doctor";
import Doctordata from "../component/pages/Doctor/Doctordata";
import DoctorDataAdd from "../component/pages/Doctor/DoctorDataAdd";
import { TOKEN } from "./Route/index";
import RegistrationForm from "../CommonComponent/Register/RegistrationForm";

const Mainsection = () => {
    const location = useLocation()
    let locationpath = location.pathname;
    let userrole = localStorage.getItem(TOKEN);
    const Pathswich = () => {
        switch (locationpath) {

            // Admin route 
            case "/admin": return { ComponentName: <Admin />, Pathvalue: 'admin' };
            case "/admindata": return { ComponentName: <Admindata />, Pathvalue: 'admindata' };
            case "/admindataadd": return { ComponentName: <AdminDataAdd />, Pathvalue: 'admindataadd' };
           

            
            
            // user route 
            case "/user": return { ComponentName: <User />, Pathvalue: 'user' };
            case "/adduser": return { ComponentName: <AddUser />, Pathvalue: 'adduser' };
            case "/userdata": return { ComponentName: <UserData />, Pathvalue: 'userdata' };
          




            //Doctor copmpontens
            case "/doctor" : return {ComponentName : <Doctor/> , Pathvalue:'doctor'};
            case "/doctordata" : return {ComponentName : <Doctordata/> , Pathvalue:'doctordata'};
            case "/doctordataadd" : return {ComponentName : <DoctorDataAdd/> , Pathvalue:'doctordataadd'};

            
           
        }
    }
    return (
        <>
            {/* {userrole === 'user'
                ?
                <> */}
                     <div className="main-content">
                        <div className="container-fluid no-gutters p-0">
                             <PrivateRoute exact path="/user" component={User} /> 
                            <PrivateRoute exact path="/adduser" component={AddUser} />
                            <PrivateRoute exact path="/userdata" component={UserData} />
                           
                            {/* <PrivateRoute component ={Page404} path="*"/> */}


                        </div>
                    </div>
                {/* </> */}
                {/* // : */}
                <div className="main-panel">
                    <div className="main-content">
                        <div className="content-wrapper">
                            <div className="container-fluid">
                                {/* Admin page route */}
    
                                <PrivateRoute exact path="/admin" component={Admin} />
                                <PrivateRoute exact path="/admindata" component={Admindata} />
                                <PrivateRoute exact path="/admindataadd" component={AdminDataAdd} />
                               

            
                                {/* Doctor page route */}
                                <PrivateRoute exact path="/doctor" component={Doctor} />
                                <PrivateRoute exact path="/doctordata" component={Doctordata} />
                                <PrivateRoute exact path="/doctordataadd" component={DoctorDataAdd} />
                             
                               
                        
                                

                            </div>
                        </div>
                    </div>
                </div>
            {/* // } */}
        </>
    );
}
export default Mainsection;


