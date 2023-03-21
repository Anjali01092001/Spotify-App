import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            
            <div className="home">
                <div>
                    <div className="h36">
                    <h3 className="h3">Focus</h3>
                    <h6 className="h6">Show all</h6>
                    </div>
                   
                    <div className="focus">
                        <div className="card">
                            <img className="hoverplay" src="spotiplay.png" alt="." />
                            <Link to="/piano" alt="."> <img src="piano.jpeg" className="card-img-top" alt="..." /></Link>
                                <div className="card-body">                                  
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div>
                        <div className="card">
                            <img src="deep.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div>
                        <div className="card">
                            <img src="flow.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div><div className="card">
                            <img src="beats.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div><div className="card">
                            <img src="jazz.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div><div className="card">
                            <img src="instru.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div>
                    </div>
                </div>

                <div>
                <div className="h36">
                    <h3 style={{"margin-top":"-2rem"}} className="h3">Spotify Playlists</h3>
                    <h6 className="h6">Show all</h6>
                    </div>
                    <div className="focus">
                        <div className="card">
                            <img src="beats.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div>
                        <div className="card">
                            <img src="flow.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div><div className="card">
                            <img src="deep.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div><div className="card">
                            <img src="instru.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div><div className="card">
                            <img src="jazz.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div><div className="card">
                            <img src="beats.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div>
                    </div>
                </div>

                <div>
                <div className="h36">
                    <h3 className="h3">Sleep</h3>
                    <h6 className="h6">Show all</h6>
                    </div>
                    <div className="focus">
                        <div className="card">
                            <img src="beats.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div>
                        <div className="card">
                            <img src="flow.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div><div className="card">
                            <img src="deep.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div>
                        <div className="card">
                            <img src="jazz.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div>
                        <div className="card">
                            <img src="flow.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div><div className="card">
                            <img src="beats.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on...</p>
                                </div>
                        </div>
                    </div>
                </div>              
            </div>
        )
    }
}
export default Home;