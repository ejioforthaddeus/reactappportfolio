import React from "react";
import  './Join.css'; 
const Join=()=>{
    return(
        <div className="join" id="join">
            <div className="l-join">
                <hr />
              <div children="are">
                    <span className="s-text">Are you ready</span>
                   <span >to  make your </span>
        </div>
                <div>
                    <span></span>
                    <span className="s-text">Dream website</span>
                </div>
            </div>
            <div className="r-join">
                <form action="" className="email-container"><input type="text" name="user-email" placeholder="enter your email" /> <button className="j-btn btn">send</button></form>
               
            </div>

       
        </div>
    )
}
export default Join