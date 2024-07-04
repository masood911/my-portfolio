import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './Components/Services/Services';
import ContactUs from './Components/ContactUs/ContactUs';
import Register from './Components/Register/Register';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import RegisterUser from './Components/Dashboard/RegisterUser';
import ContactUser from './Components/Dashboard/ContactUser';
import UserLogin from './Components/Register/UserLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/services"} element={<Services />} />
          <Route exact path={"/contact-us"} element={<ContactUs />} />
          <Route exact path={"/register"} element={<Register />} />
          <Route exact path={"/login"} element={<UserLogin />} />
          <Route exact path={"/admin-login"} element={<Login />} />
          <Route exact path={"/dashboard"} element={<Dashboard />} />
          <Route exact path={"/register-user"} element={<RegisterUser />} />
          <Route exact path={"/contact-user"} element={<ContactUser />} />
        </Routes>
      </BrowserRouter>
      <FloatingWhatsApp
        phoneNumber="+923039551204"
        accountName="Mr FREELANCER"
        chatMessage="Hi! How can we help you?"
        statusMessage=""
        placeholder="Type a message"
        avatar="/favicon.ico"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}

export default App;
