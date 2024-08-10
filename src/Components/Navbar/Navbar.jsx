import { useState, useRef } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [menu,setMenu] = useState ("null");
  const menuRef = useRef ();

  const openMenu = () => {
    menuRef.current.style.right="300px";
  }
  const closeMenu = () => {
    menuRef.current.style.right="0";
  }


  return (
    <div className='navbar'>
        <img src={logo} style={{width:"80px"}} alt="" />
        <HiOutlineBars3 className='nav-mob-open' onClick={openMenu} /> 
        <ul ref={menuRef} className="nav-menu">
           <IoCloseOutline  className='nav-close-button' onClick={closeMenu}/>
            <li
              onMouseEnter={() => setMenu("home")}
              onMouseLeave={() => setMenu(null)}
            > 
              <AnchorLink className='anchor-link'  href='#home'> 
              <p> Home </p> 
              </AnchorLink> 
              {menu==="home"?<IoEllipsisHorizontalOutline style={{display:"flex",margin:"auto",color:"#f419e9"}} />:<></>} 
            </li>
            <li
              onMouseEnter={() => setMenu("about")}
              onMouseLeave={() => setMenu(null)}
            > 
              <AnchorLink className='anchor-link' offset={50} href='#about'> 
                <p> About Me </p> 
              </AnchorLink> 
              {menu==="about"?<IoEllipsisHorizontalOutline style={{display:"flex",margin:"auto",color:"#f419e9"}} />:<></>} 
            </li>
            <li
              onMouseEnter={() => setMenu("service")}
              onMouseLeave={() => setMenu(null)}
            >  
              <AnchorLink className='anchor-link' offset={50} href='#service'> 
                <p> Services </p> 
              </AnchorLink> 
              {menu==="service"?<IoEllipsisHorizontalOutline style={{display:"flex",margin:"auto",color:"#f419e9"}} />:<></>} 
            </li>
            <li
              onMouseEnter={() => setMenu("work")}
              onMouseLeave={() => setMenu(null)}
            >  
              <AnchorLink className='anchor-link' offset={50} href='#work'> 
                <p> Portfolio </p> 
              </AnchorLink> 
              {menu==="work"?<IoEllipsisHorizontalOutline  style={{display:"flex",margin:"auto",color:"#f419e9"}}/>:<></>} 
            </li>
            <li
              onMouseEnter={() => setMenu("contact")}
              onMouseLeave={() => setMenu(null)}
            >  
              <AnchorLink className='anchor-link' offset={50} href='#contact'> 
                <p> Contact </p> 
              </AnchorLink> 
              {menu==="contact"?<IoEllipsisHorizontalOutline style={{display:"flex",margin:"auto",color:"#f419e9"}} />:<></>} 
            </li>
        </ul>
        <div className="nav-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me </AnchorLink> </div>
    </div>
  )
}

export default Navbar
