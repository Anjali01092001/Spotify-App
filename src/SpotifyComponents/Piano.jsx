import React, { useState } from "react";
import Playpopup from "./Playpopup";

const Piano = () => {
    const [popup,setPopup]=useState(false);
    const [like, setLike] = useState(true);
    return (
        <>
            <div className="piano">
                <div className="top1">
                    <div >
                        <img className="top11" src="piano.jpeg" alt="." />
                    </div>
                    <div className="top12">
                        <h6 className="top121">Playlist</h6>
                        <h1 className="top122">Peaceful Piano</h1>
                        <p className="top123">Relax and indulge with beautful piano pieces</p>
                        <p className="top124"><img style={{ height: "2rem" }} src="spoti.png" alt="." /> Spotify-6,944,864likes- 311songs, about 11 hr</p>
                    </div>
                </div>
                <div className="top2">
                    {/* popup menu start*/}
                        <button onClick={setPopup.bind(this,true)} className="playbtn"><img className="play" src="spotiplay.png" alt="." /></button>
                        { popup && <Playpopup setPopup={setPopup} />}
                    {/* popup menu end */}
                    <button className="btnliun" onClick={() => setLike(false)} >li</button>
                    {
                        like ? <img style={{ height: "2rem", "padding-left": "2rem" }} src="heart.png" alt="." />
                            :
                            <img style={{ height: "2rem", "padding-left": "2rem"}} src="heargr.png" alt="." />
                    }
                    <button className="btnliun" onClick={() => setLike(true)} >Un</button>

                    <h1 style={{ "margin-top": "-1rem", "padding-left": "2rem", color: "white" }}>...</h1>
                </div>
                <div className="top3">
                    <div className="tabletop3">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Album</th>
                                    <th scope="col">Date added</th>
                                    <th><img style={{ height: "1.5rem" }} src="cl.png" alt="." /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><img style={{ height: "2rem" }} src="flow.jpeg" alt="." /> Tjarnheden</td>
                                    <td>Fjaderlatt</td>
                                    <td>5 days ago</td>
                                    <td>1:40</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td><img style={{ height: "2rem" }} src="repeat.jpeg" alt="." /> Fjaderlatt</td>
                                    <td>Quand vous souriez</td>
                                    <td>5 days ago</td>
                                    <td>1:58</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td><img style={{ height: "2rem" }} src="piano.jpeg" alt="." /> Fjaderlatt</td>
                                    <td>Quand vous souriez</td>
                                    <td>5 days ago</td>
                                    <td>1:58</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td><img style={{ height: "2rem" }} src="jazz.jpeg" alt="." />Tjarnheden</td>
                                    <td>Fjaderlatt</td>
                                    <td>5 days ago</td>
                                    <td>1:40</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Piano;