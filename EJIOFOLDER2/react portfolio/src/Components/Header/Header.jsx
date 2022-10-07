import React from 'react'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import './Header.css'
import { useState } from 'react'

const Header=()=>{
    const mobile = window.innerWidth<=760 ? true:false;
    const [menuOpened, setMenuOpened] = useState(false)
    return(
        <div className="header"
        >
            <img src={Logo} className='Logo' alt="teecode" />
            {(menuOpened===false && mobile===true)?(
                <div
                onClick={()=> setMenuOpened(true)}><img src={Bars} alt="" style={{width:'2.5rem',hight:'2.5rem'}} /></div>
            ):(  <ul className='h-menu'>
            <li onClick={()=> setMenuOpened(false)}><a  onClick={()=> setMenuOpened(false)} href="#home">Home</a></li>
               <li onClick={()=> setMenuOpened(false)}><a  onClick={()=> setMenuOpened(false)} href="#about">About</a></li>
                  <li onClick={()=> setMenuOpened(false)} ><a  onClick={()=> setMenuOpened(false)} href="#programe">Programs</a></li>  
                   <li onClick={()=> setMenuOpened(false)}><a  onClick={()=> setMenuOpened(false)} href="#planes">Planes</a></li> 
                     <li onClick={()=> setMenuOpened(false)}><a  onClick={()=> setMenuOpened(false)} href="#testimonials">Testimonials</a></li>
            </ul>)}
          
        </div>
    )
}
export default Header
