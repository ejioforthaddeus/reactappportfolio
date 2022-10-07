import React from "react";
import './About.css'
import {testimonialsData} from '../../data/About'
import { useState } from "react";
import Larrow from '../../assets/leftArrow.png'
import Rarrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'
const About=()=>{
    
    const transiction ={type:' String', duration:3}
    const [selected,setSelected]= useState(0);
    const tlength=testimonialsData.length
    return(
        <div className="testimonials" id="about">
           <div className="t-left">
            <span>About me</span>
            <span className="s-text">my life </span>
            <span>time in coding</span>
            
            <span>{testimonialsData[selected].review}</span>
            <span>
                <span style={{color:'var(--orange)'}}>
                    {testimonialsData[selected].name}
                </span>
                -{testimonialsData[selected].status}
            </span>
           
           </div>


           <div className="t-right"
           
          >
            <motion.div 
                  initial={{opacity:0,x:-100}} 
                  whileInView={{opacity:1,x:0}}
                  transition={{...transiction, type:'tween'}}></motion.div>
            <motion.div  initial={{opacity:0,x:100}} 
           whileInView={{opacity:1,x:0}}
           transition={{...transiction, type:'tween'}} ></motion.div>
            <img src={testimonialsData[selected].image} alt="" />
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
export default About