import "./index.css";

import Nav from '../Nav';
import { useState, useEffect } from "react";
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

function Register(){
    const [name ,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cpass, setCpass] = useState("");

    
    function checkuser(){
        const passValid = document.querySelector('#pass-reminder');
        const passErr = document.querySelector('#password-error');
        if(name==""){
            alert("name can't be empty")
        }else if(email == ""){
            alert("Email can't be empty")
        }else if(password.length < 8){
            passValid.style.display="block";
            setTimeout(()=>{
                passValid.style.display="none";
            },2000)
        }else if(cpass != password){
            passErr.style.display = "block";
            setTimeout(()=>{
                passErr.style.display = "none";
            },2000)
        }else{
            Axios.post('http://localhost:80/checkuser',{
                Email:email
            }).then(function(succ){
                if(succ.data == true ){
                    insertUser();
                }else{
                    alert(email + " already exists");
                }
            })
        }
    }

    function insertUser(){
        Axios.post('http://localhost:80/registerUser',{
            Name:name,
            Email:email,
            Password:password
        }).then(function(succ){
            if(succ.data == true){
                alert(name + " Registered Successfully")
                window.location.href="/userlogin";
            }else{
                alert("Something went wrong");
            }
        })
    }

    useEffect(()=>{},[])
    return(
        <>
            <Nav />
            <div className="Register-form-container contact-form">
                <h3 style={{borderBottom:"2px solid black"}}>New User Registration:</h3>
                <div className="input-container">
                    <input type='text' placeholder="Name" onChange={(e)=>{setName(e.target.value)}} value={name} required />
                </div>

                <div className="input-container">
                    <input type='email' placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} value={email} required />
                </div>

                <div className="input-container">
                    <input type='password' placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} value={password} required />
                     <p style={{color:"red", fontSize:"10px",display:"none"}} id="pass-reminder">Password should be 8 character long</p>
                </div>

                <div className="input-container">
                    <input type='password' placeholder="Password" onChange={(e)=>{setCpass(e.target.value)}} value={cpass} required />
                    <p style={{color:"red", fontSize:"10px",display:"none"}} id="password-error">Password doesn't match</p>
                </div>

                <div>
                    <button onClick={checkuser} className="btn submit-btn signup-btn">Register</button>
                </div>

                <div className="nw-user-box">
                    <p>Already have an account?</p>
                    <NavLink exact="true" to="/userlogin">
                       <button className="btn login-btn">Login</button>
                    </NavLink>
                </div>
            </div>
        </>
        
        
    )
}

export default Register;