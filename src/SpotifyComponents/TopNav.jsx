import React, { Component } from "react";
import '../App.css';
import { Link } from "react-router-dom";

class TopNav extends Component {
    render() {
        return (
            <div className="topnav">
                <nav class="navbar navbar-expand-lg bg-dark">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <div>
                                    <Link to="/home"><img style={{ height: "1.5rem", transform: "rotate(180deg)" }} src="white-arrow-transparent-png-22.png" alt="left" /></Link>
                                    <Link to="/search"><img style={{ height: "1.5rem" }} src="white-arrow-transparent-png-22.png" alt="right" /></Link>
                                    
                                </div>
                                <div className="loginsign">
                                    <li className="nav-item">
                                        <Link to="/signup"><button type="button" className="btn btn-dark">Sign up</button></Link>
                                    </li>

                                    <li className="nav-item">
                                        <div className="login">
                                            <Link to="/login"><button type="button" className="btn btn-light">Log in</button></Link>
                                        </div>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default TopNav;