import React from "react";
import { Link } from "react-router-dom";

const Playpopup = ({ setPopup }) => {
    return (
        <div onClick={setPopup.bind(this, false)} style={{ position: 'fixed', background: 'rgba(0,0,0,0.9)', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center' }}>
            <div onClick={(e) => e.stopPropagation()} style={{ background: "linear-gradient( rgb(49, 60, 73), rgb(46, 46, 50))", borderRadius: '8px', 'margin-top': "3rem", 'margin-left': "25rem", height: "430px", width: "830px", padding: "4rem" }}>              
                <p onClick={setPopup.bind(this, false)} style={{ cursor: "pointer", position: "absolute", top: 10, right: 20, 'margin-top': "37rem",'margin-right':'40rem',color:'grey' }} className="cross">
                    <b>Close</b>
                </p>
                <div style={{display:"flex"}}>
                    <div>
                        <img style={{borderRadius:"2rem"}} src="piano.jpeg" alt="." />
                    </div>
                    <div style={{padding:"1.5rem" ,alignItems:'center' }}>
                        <h2 style={{color:'white',"margin-left":"3rem" }} >Start listening with a <br /> free Spotify account</h2>
                        <p><Link to="signup" alt="."><button type="submit" className="signbtn1">Sign up free</button></Link></p>
                        <button style={{"border-radius":"2rem","border-color":"white", 'margin-left':'8.5rem','background-color':"rgb(46, 46, 50)",color:"white"}} type="button" class="btn btn-light">Download app</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Playpopup;  