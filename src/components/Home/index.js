import './index.css';
import Nav from '../Nav';
import { NavLink } from 'react-router-dom';
import  Axios  from 'axios';
import { useEffect, useState } from 'react';
import ProdcutCard from '../ProductCard';
import {FaFacebook , FaTwitter, FaInstagramSquare, FaYoutube} from 'react-icons/fa';
import Footer from '../Footer';


var CryptoJS = require('crypto-js');


function Home() {
    var token = window.localStorage.getItem('userToken');
    var userID = window.localStorage.getItem('userID');

    const [products, setProducts] = useState([]);

    function autoLogin(){
        if(token !== null){
            var decryptuserToken = CryptoJS.AES.decrypt(token,userID);
            console.log(decryptuserToken);
            console.log(token);
            Axios.post('http://localhost:80/userAutoLogin',{
                Email:decryptuserToken.toString(CryptoJS.enc.Utf8)
            }).then(function(succ){
                if(succ.data == false){
                    alert("Email or Password is Incorrect");
                }else{
                    window.location.href="/user/account";
                }
            })
        }
    }

    function getproducts(){
        Axios.get('http://localhost:80/getProducts').then(function(succ){
            setProducts(succ.data);
            console.log(products);
        })

        
    }

    useEffect(()=>{
        autoLogin();
        getproducts();
    },[])
    return (

        <>
            <div className="home-container">
                <div className="nav-container">
                    <Nav />
                </div>
                <div className="home-content-container">
                    <section className="login-section">
                        <p>Best Quality Farming Equipments Infromation is just one click away, Sign Up Now to access more features of this webapp. </p>
                        <div className="btn-container">
                            <NavLink exact="true" to="/userlogin">
                                <button className="btn login-btn">Login</button>
                            </NavLink>
                            
                            <NavLink exact="true" to="/userregister">
                                <button className="btn signup-btn">Sign Up</button>
                            </NavLink>
                            
                        </div>
                    </section>
                    <h3 style={{marginTop:"50px",paddingLeft:"50px"}}>Products:</h3>
                    <section className="featuerd-products-container">
                        
                        {
                            products.map((product,idx)=>{
                                return <ProdcutCard props={product} key={idx} />
                            })
                        }
                    </section>
                    <Footer />
                    
                </div>

            </div>
        </>
    )
}

export default Home;