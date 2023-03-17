import './index.css';

import Nav from '../Nav';
import { useState } from "react";
import Axios from 'axios';
import { NavLink } from 'react-router-dom';


var CryptoJS = require('crypto-js');
function LogIn(){
    const [Email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    function login(e){
        e.preventDefault();
        if(Email == " " || pass == " "){
            alert("please enter correct credentials");
        }else{
            Axios.post('https://kishanprojectapi.onrender.com/userLogin',{
                Email:Email,
                Password:pass
            }).then(function(succ){
                if(succ.data == false){
                    alert("Email or Password is Incorrect");
                }else{
                    var encryptuserToken = CryptoJS.AES.encrypt(succ.data.Email,succ.data._id);
                    window.localStorage.setItem('userToken',encryptuserToken);
                    window.localStorage.setItem('userID',succ.data._id);
                    window.location.href="/user/account";
                }
            })
        }   
        
    }

    return (
        <>
            <Nav />
            <div className="login-form-container contact-form">
                <h3 style={{borderBottom:"2px solid black"}}>Login</h3>
               <div className="input-container">
                 <input type="email" className='email-field' placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={Email} required />
               </div>

               <div className="input-container">
                 <input type="password" className="password-field" placeholder="Password" onChange={(e)=>setPass(e.target.value)} value={pass} required />
               </div>

                <div>
                    <button onClick={login} className='btn login-btn submit-btn'>Login</button>
                </div>

                <div className="nw-user-box">
                    <p>New User?</p>
                    <NavLink exact="true" to="/userregister">
                            <button className="btn signup-btn">Sign Up</button>
                    </NavLink>
                </div>

            </div>
        </>
    )
}

export default LogIn;
