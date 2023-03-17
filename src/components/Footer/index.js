import {FaFacebook , FaTwitter, FaInstagramSquare, FaYoutube} from 'react-icons/fa';

function Footer(){
    return (
        <>
            <div className="footer" id="contact">
                    <div className="footer-top">
                        <div className="footer-left">
                            <h3>Contact Us:</h3>
                            <p>Phone: 8802040885</p>
                            <p>Email: farmermarket@gmail.com</p>
                        </div>
                        <div className="footer-right">
                            <ul className="social-list">
                                <li><FaFacebook size={40} className="fb-icon social-icons" /></li>
                                <li><FaInstagramSquare size={40} className="ins-icon social-icons" /></li>
                                <li><FaTwitter size={40} className="twt-icon social-icons" /></li>
                                <li><FaYoutube size={40} className="yt-icon social-icons" /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>Copyright &copy;  2022</p>
                    </div>
                </div>
        </>
    )
}

export default Footer;