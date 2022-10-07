import React from "react";
import './Planes.css'
import {plansData} from '../../data/plansData'
import Tick from '../../assets/whiteTick.png'
const Planes=()=>{
    return(
        <div className="c-planes" id="planes">
            <div className="p-header" style={{gap:'2rem'}}>
                <span className="s-text">Ready to get</span>
                <span>your dream website</span>
                <span className="s-text">from us!!</span>
            </div>
            {/* plans card */}
<div className="plans">
    {plansData.map((plan, i)=>(
        <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className="features">
                {plan.features.map((feature,i)=>(
                    <div className="feature">
                        <img src={Tick} alt="" />
                        <span key={i}>{feature}</span>
                    </div>
                ))}
            </div>
            <div><span className="jn">see more discount ->
                </span></div>
            <button className="btn">
                own yours!!!
            </button>
        </div>
    ))}
</div>
            
        </div>
    )
}
export default Planes