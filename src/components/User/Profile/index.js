import Nav from '../Nav';
import Axios from 'axios';
import { useEffect, useState } from 'react';

var CryptoJS = require('crypto-js');

function UserProfile(){
    const userEmail = window.localStorage.getItem('userToken');
    const userID = window.localStorage.getItem('userID');
    var decryptuserToken = CryptoJS.AES.decrypt(userEmail,userID).toString(CryptoJS.enc.Utf8);
    const [user,setUser] = useState([]);
    function getUser(){
        Axios.post('http://localhost:80/getUser',{
            Email:decryptuserToken
        }).then(function(succ){
            setUser(succ.data);
        })
    }

    useEffect(()=>{
        getUser();
    },[])

    return(
        <>  
            <Nav />
            <div>
                <p>Name: {user.Name}</p>
                <p>Email: {user.Email}</p>
            </div>
        </>
    )
}

export default UserProfile;