import "./App.css";
import { BrowserRouter, Routes, Switch } from "react-router-dom";
import LoginFrom from "./component/Auth/LoginFrom";
import PublicRoute from "./InnerComponent/Route/PublicRoute";
import Header from "./CommonComponent/Header/Header";
import Footer from "./CommonComponent/Footer/Footer";
import Main from "./InnerComponent/Main";
import RegistrationForm from "./CommonComponent/Register/RegistrationForm";

function App() {
  return (
    <>
       
        <PublicRoute
          exact
          component={Header}
        />
      <Switch>
        <PublicRoute 
        exact 
        path="/" 
        restricted={false}
        component={LoginFrom} 
        />
        <PublicRoute 
        exact 
        path="/register" 
        restricted={false}
        component={RegistrationForm} 
        />
        <Main />
      </Switch>
      {/* <PublicRoute
          exact
          component={Footer}
        /> */}
      
    </>
  );
}

export default App;
