import React from "react";
import './Reasons.css'
import Cap1 from "../../assets/cap1.PNG";
import Cap2 from "../../assets/cap2.PNG";
import Cap3 from "../../assets/cap3.PNG";
import Cap5 from "../../assets/cap5.PNG";
import tick from "../../assets/tick.png"
const Reasons=()=>{
    return(
        <div className="reasons" id="reasons">
            <div className="r-left">
            <img src={Cap1}  width={100}  alt="" />
            <img src={Cap2}  width={400} alt="" />
            <img src={Cap3}  width={300} alt="" />
            <img src={Cap5}  width={400} alt="" />
            </div>
            <div className="r-right">
<span>here are</span>

            <div>
                <span className="s-text">some</span><span> of my works</span></div>
            
            <div>
                <div className='r-details'>
                    <div>
                        <img src={tick} alt=""/>
                    <span>bootstrap portfolio website</span>
                    </div>
                    <div>
                        <img src={tick} alt=""/>
                    <span>html5 portfolio website</span>
                    </div>
                    <div>
                        <img src={tick} alt=""/>
                    <span>one page website</span>
                    </div>
                    <div>
                        <img src={tick} alt=""/>
                    <span>responsive blog site</span>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}
export default Reasons