import React from 'react';
import Header from '../Header/Header'
import './hero.css'
import Resume from './resume.pdf'
import {motion} from 'framer-motion'
 
import Hback from '../../assets/hero_image_back.png'
import  Eji from '../../assets/eji.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
// import { type } from '@testing-library/user-event/dist/type';
const Hero=()=>{
  const mobile = window.innerWidth<=760 ? true:false;
    const transiction ={type:' String', duration:3}
    return(
  <div className="hero" id='home'>
    <div className="left-h">
        <Header/>
        {/* the best ad begins */}
        <div
 className="the-best-ad">
            <motion.div
                  initial={{left:'238px'}} 
                  whileInView={{left:'8px'}}
                  transition={{...transiction, type:'tween'}}
            >
          </motion.div>
            <span>TEE code frontend development</span>
        </div>
    
    {/* the best ad ends */}


    {/* the hero heading begins */}
    <div className="h-text">
        <div>
            <span className='s-text'>Build</span>
        <span>your</span>
        </div>
        <div><span className='s-text'>`Dreamwebsite`</span></div>
        <div>
            <span>

        tee code helps you to Go from no-code to an in-demand junior web developer,<br /> at a fraction of the cost of a bootcamp. Start with the front-end by learning HTML, <br /> CSS, and JavaScript. Then, master the back-end and APIs to round out your full-stack skills.
        </span>
        </div>
    </div>
    {/* the hero heading ends */}




    {/* figures begines */}
<div className="figures">
    <div>
        <span>+25</span>
        <span>completed projects</span>
        </div>
    <div>
        <span>+10</span>
        <span>clients</span>
        </div>
    <div>
        <span>+2</span>
        <span>partners</span>
        </div>
</div>
    {/* figures ends */}



    {/* hero buttons begins */}
<div className="h-buttons">
    <a href={Resume} download>
        
    <button className="btn">download cv</button>
    </a>
        <button className="btn">learn more</button>
    </div>
    {/* hero buttons ends */}
    </div>
    {/* right hero */}
    <div className="right-h">
      <button className="btn r-btn">contact</button>  <motion.div
                  initial={{left:'238px'}} 
                  whileInView={{left:'8px'}}
                  transition={{...transiction, type:'tween'}}
            >
          </motion.div>
      <motion.div className="h-rate"
        initial={{left:'238px'}} 
        whileInView={{left:'43%'}}
        transition={{...transiction, type:'tween'}}>
        <img src={Heart} alt="" />
        <span>heart rate</span><span>116bpm</span>
      </motion.div>
      {/* hero image */}
      <img src={Eji} className="h-image" alt="" />
      <img src={Hback} className="hback-image" alt="" />
      {/* calories */}
      <motion.div className="calories"
        initial={{left:'-52%'}} 
        whileInView={{left:'-78%'}}
        transition={{...transiction, type:'tween'}}>
        <img src={Calories} alt="" />
        <div>
        <span>workrate:</span><span>100%</span></div>
      </motion.div>
    </div>
  </div>
    )
} 
export default Hero