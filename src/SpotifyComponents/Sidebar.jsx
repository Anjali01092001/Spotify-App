import React from "react";
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="leftNav">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/home">
                            <img className="spotifylogo" src="Spotify_Logo_RGB_White.png" alt="." /></Link>
                    </li>
                    <div className="element1">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">
                                <div className="navele">
                                    <img className="size" src="download (1).png" alt="." /><p style={{ color: "white", "padding-left": "1rem" }}>Home</p>
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/search">
                                <div className="navele">
                                    <img className="size" src="download.png" alt="." /><p style={{ color: "white", "padding-left": "1rem" }}>Search</p>
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/library">
                                <div className="navele">
                                    <img className="size" src="libr.png" alt="." /><p style={{ color: "white", "padding-left": "1rem" }}>Your Library</p>
                                </div>
                            </NavLink>
                        </li>
                    </div>
                    <div className="element2">
                        <div>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/playlists">
                                    <div className="navele">
                                        <img className="size" src="play.png" alt="." /><p style={{ color: "white", "padding-left": "1rem" }}>Created playlists</p>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/liked">
                                    <div className="navele">
                                        <img className="size" src="liked-songs-300.png" alt="." /><p style={{ color: "white", "padding-left": "1rem" }}>Liked songs</p>
                                    </div>
                                </NavLink>
                            </li>
                        </div>
                        <div className="english">
                            <button className="eng"><i class="fa-sharp fa-solid fa-globe"></i>English</button>
                        </div>
                    </div>
                </ul>
            </div>
        </>
    )
}
export default Sidebar;