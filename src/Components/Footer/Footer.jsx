import './Footer.css'
import logo from '../../assets/logo.svg'
import { LuUser } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="footer">
    <div className='footer-top'>
       <div className="footer-top-left">
            <img src={logo} alt="" />
            <p> frontend developer based in UAE </p>
       </div>
       <div className="footer-top-right">
            <div className="footer-email-input">
                <LuUser />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe"> Subscribe </div>
       </div>
    </div>
    <hr/>
       <div className="footer-bottom">
            <div className="footer-bottom-left"> @2024 Aiswarya. All rights reserved</div>
            <div className="footer-bottom-right"> 
                <p> Terms of Service</p>
                <p> Privacy Policy </p>
                <p> Connect With me </p>
            </div>
       </div>
    </div>
   
  )
}

export default Footer
