import React from "react";
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import { useState } from "react";
import Larrow from '../../assets/leftArrow.png'
import Rarrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'
const Testimonials=()=>{
    
    const transiction ={type:' String', duration:3}
    const [selected,setSelected]= useState(0);
    const tlength=testimonialsData.length
    return(
        <div className="testimonials" id="testimonials">
           <div className="t-left">
            <span>Testiomonials</span>
            <span className="s-text">what they say </span>
            <span>About us</span>
            
            <span>{testimonialsData[selected].review}</span>
            <span>
                <span style={{color:'var(--orange)'}}>
                    {testimonialsData[selected].name}
                </span>
                -{testimonialsData[selected].status}
            </span>
           
           </div>


           <div className="t-right">
            <motion.div className="fun1"
                  initial={{ opacity:0 , x: -100 }} 
                  whileInView={{ opacity:1,x: 0 }}
                  transition={{ ...transiction, type:'tween' }}></motion.div>
            <motion.div className="fun2" initial={{opacity:0,x:100}} 
           whileInView={{opacity:1,x:0}}
           transition={{...transiction, type:'tween'}} ></motion.div>
            <motion.img 
            key={selected}
            initial={{opacity:0, x:100}}
            transition={transiction}
            animate={{opacity:1, x:0}}
        exit={{opacity:0, x:-100}}
            src={testimonialsData[selected].image} alt="" />
            <div className="arrow">
                <img
                onClick={()=>{
                    selected===0?setSelected(tlength -1):
                    setSelected((prev)=>prev -1);
                }}
                src={Larrow} alt="" />
                <img 
                onClick={()=>{
                    selected===tlength -1 ? setSelected(0): setSelected((prev)=> prev +1);
                }}
                src={Rarrow} alt="" />
            </div>
           </div>
        </div> 
       
    )
}
export default Testimonials