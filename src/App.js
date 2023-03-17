import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import User from './components/User';
import UserProfile from './components/User/Profile';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<LogIn />} />
        <Route path="/userregister" element={<Register />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />


        <Route path='/user/account' element={<User />} />
        <Route path="/user/account/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
