import Nav from "../Nav";
import Footer from '../Footer';
import "./index.css";
import { useState } from "react";
import Axios from "axios";

function Contact(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    function submitForm(){
        if(name=="" || name ==" "){
            alert("Name field can't be empty");
        }else if(email=="" || email==" "){
            alert("Email Field can't be empty");
        }else if(message=="" || message==" "){
            alert("Message can't be empty");
        }else{
            Axios.post('https://kishanprojectapi.onrender.com/insertMessage',{
                Name:name,
                Email:email,
                Message:message
            }).then(function(succ){
                if(succ.data==true){
                    alert("Message sent successfully");
                }else{
                    alert("Something went wrong");
                }
            })
        }
    }
    return (
        <>
            <Nav />
            <div className="contact-form">
                <h2 style={{borderBottom:"2px solid black"}}>Contact Us:</h2>
                <div className="name-box input-container">
                    <input type='text' placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                </div>

                <div className="email-box input-container">
                    <input type='email' placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </div>

                <div className="message-box">
                    <textarea placeholder="Message" value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                </div>

                <div>
                    <button className="btn submit-btn" onClick={submitForm}>Submit</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;
