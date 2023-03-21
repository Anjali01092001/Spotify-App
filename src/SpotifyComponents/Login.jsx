import React,{useState} from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (email.length === 0 || password.length === 0) {
            setError(true);
        }
        alert("Logined Successfully");
    }
    return (
        <>
            <div className="signup">
                <Link to="/home" ><p className="cross"><img style={{height:"1.5rem"}} src="cros.png" alt="." /></p></Link>
                <div className="signup1">
                    <img style={{ height: "2.5rem" }} src="spo.png" alt="." />                  
                    <h6>To continue, log in to Spotify..</h6><br />
                    <button style={{"border-radius":"2rem",padding:"0.5rem 6rem 0.5rem 6rem",background:"#2A59F2"}} type="button" class="btn btn-primary"><img className="facelogo" src="face.png" alt="." /> CONTINUE WITH FACEBOOK</button><br/><br/>
                    <button style={{"border-radius":"2rem",padding:"0.5rem 7rem 0.5rem 7rem"}} type="button" class="btn btn-dark"><img style={{ height: "2rem" }} src="apple.png" alt="." />CONTINUE WITH APPLE</button><br /><br/>
                    <button style={{"border-radius":"2rem", "border-color":"black",padding:"0.5rem 6rem 0.5rem 6rem"}} type="button" class="btn btn-light"><img style={{ height: "2rem" }} src="goo.png" alt="." />CONTINUE WITH GOOGLE</button><br /><br/>
                    <button style={{"border-radius":"2rem","border-color":"black",padding:"0.7rem 5rem 0.7rem 5rem"}} type="button" class="btn btn-light">CONTINUE WITH PHONE NUMBER</button><br/>
                    <h6>_____________________OR____________________</h6>
                </div>
                <div className="logup2" >
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">What's your email?</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)}/>
                            {error === '' ? null : <h6 style={{color:"red"}} >Write your correct email!</h6>}
                        </div>
                        
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Create a password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)}/>
                            {error === '' ? null : <h6 style={{color:"red"}} >Invalid password!</h6>}
                        </div>
                       <p style={{ "text-decoration": "underline" }} >Forgot your password?</p>
                       <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" checked/>
                        <label class="form-check-label" for="exampleCheck1" >Remember me</label>
                    </div>
                        <button type="submit" className="signbtn">LOG IN</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;