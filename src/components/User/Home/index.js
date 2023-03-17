import  Axios  from 'axios';
import { useEffect, useState } from 'react';
import ProdcutCard from '../../ProductCard';

function UserHome(){
    const [products, setProducts] = useState([]);
    function getproducts(){
        Axios.get('http://localhost:80/getProducts').then(function(succ){
            setProducts(succ.data);
            console.log(products);
        })

        
    }

     useEffect(()=>{
        getproducts();
    },[])
    return (
        <>
            <div className="home-container">
                <div className="home-content-container">
                    

                    <h3 style={{marginTop:"50px",paddingLeft:"50px"}}>Products:</h3>
                    <section className="featuerd-products-container">
                        
                        {
                            products.map((product,idx)=>{
                                return <ProdcutCard props={product} key={idx} />
                            })
                        }
                    </section>

                    <footer className="footer">
                        Footer
                    </footer>
                </div>

            </div>
        </>
    )
}

export default UserHome;