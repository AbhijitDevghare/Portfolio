import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram ,faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons';

function Footer()
{
    return (
        <>
            <footer>
                Follow me on -
                <div className="footerClass">
                    
                   <a href="https://www.instagram.com/abhi_dev04/">
                      <FontAwesomeIcon icon={faInstagram} className="logo" style={{ color: "#ff007b" }}  />

                   </a>
                    <p></p>
                    <FontAwesomeIcon icon={faFacebook} className="logo" style={{ color: "rgb(46, 157, 248)"}} /> 
                    <p></p>
                    <FontAwesomeIcon icon={faWhatsapp} className="logo whatsapp" style={{ color: " rgb(7, 228, 7)" }} /> &nbsp;
                 </div>

                 <div>
                        Contact me - 820815546
                </div>
                
         </footer>
        </>
    )
}

export default Footer