import React from "react";
import './Programe.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Programe=()=>{
    return(
<div className="programe" id="programe">
<div className="p-header">
    <span className="s-text">explore </span><span>our programe</span><span className="s-text">for ya website</span>
</div>
<div className="p-categories">
    {programsData.map((Program)=>(
        <div className="catigory">
            {Program.image}
            <span>{Program.heading}</span>
            <span>{Program.details}</span>
            <div className="join-now">
                <span>join us</span>
                <img className="jn" src={RightArrow} alt="" />
            </div>
        </div>
    ))}
</div>
</div>
    )
}
export default Programe