import Sidebar from "../InnerComponent/Sidebar/Sidebar";
import Header from "../CommonComponent/Header/Header";
import Footer from "../CommonComponent/Footer/Footer";

import Mainsection from "../InnerComponent/Mainsection";
import { TOKEN } from "./Route/index";
import { Redirect } from "react-router-dom";
import LoginFrom from "../component/Auth/LoginFrom";
let userrole = localStorage.getItem(TOKEN);
var sidenav = [];
// if(userrole === null){
if (userrole === "admin") {
  sidenav = [
    { name: "admin", label: "admin", link: "/admin" },
    { name: "admindata", label: "admindata", link: "/admindata" },
    { name: "admindataadd", label: "admindataadd", link: "/admindataadd" },
  ];
} else if (userrole === "doctor") {
  sidenav = [
    { name: "doctor", label: "doctor", link: "/doctor" },
    { name: "doctordata", label: "doctordata", link: "/doctordata" },
    { name: "doctordataadd", label: "doctordataadd", link: "/doctordataadd" },
  ];
} else if (userrole === "user") {
  sidenav = [
    { name: "user", label: "user", link: "/user" },
    { name: "adduser", label: "adduser", link: "/adduser" },
    { name: "userdata", label: "userdata", link: "/userdata" },
  ];
}
// }else{
//   <Redirect to="/"/>
// }

function Main() {
  return (
    <>
      <Mainsection />
      {userrole === null ? (<>
      <LoginFrom/>
      </>) :(
       <>
         <Header />
        <Sidebar sidenav={sidenav}/>
       </>
       )}
    
    </>
  );
}

export default Main;
