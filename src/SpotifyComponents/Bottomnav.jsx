import React from "react";
import { Link } from "react-router-dom";

const Bottomnav = () => {
    return (
        <div className="btmbar">
            <div className="btmsign1">
                <p>PREVIEW OF SPOTIFY <h6>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</h6></p>
                <h6>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</h6>
            </div>
            <div className="btmsign2">
                <Link to="/signup" alt="."><button type="button" style={{ "border-radius": "2rem", padding: "0.3rem", "font-weight": "bold" }} className="btn btn-light">
                    <h6 style={{ 'margin-left': '1.5rem', 'margin-right': '1.5rem', 'margin-bottom': '0.4rem', 'margin-top': '0.4rem' }}>Sign Up Free</h6>
                </button></Link>
            </div>
        </div>
    )
}
export default Bottomnav;