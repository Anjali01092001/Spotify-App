import React,{useState} from "react";
import { Link } from "react-router-dom";
// import validator from "validator";

const Signup = () => {
    const [email,setEmail]=useState('');
    const [myemail,setMyemail]=useState('');
    const [password,setPassword]=useState('');
    const [profile,setProfile]=useState('');
    const [error,setError]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (email.length === 0 || password.length === 0 || myemail.length === 0 || profile.length===0 ) {
            setError(true);
        }
        // alert("Please fill all the mandatory fields");
    }
    return (
        <>
        <div className="signup">
        <Link to="/home" ><p className="cross"><img style={{height:"1.5rem"}} src="cros.png" alt="." /></p></Link>
            <div className="signup1">
                <img style={{ height: "2.5rem" }} src="spo.png" alt="." />
                <h6>Sign up for free to start listening.</h6><br />
                <button style= {{"border-radius":"2rem",padding:"0.5rem 6rem 0.5rem 6rem",background:"#2A59F2"}} type="button" class="btn btn-primary"><img className="facelogo" src="face.png" alt="." /> Sign up with Facebook</button><br/><br/>
                <button style= {{"border-color":"black","border-radius":"2rem",padding:"0.5rem 6rem 0.5rem 6rem"}}  type="button" class="btn btn-light"><img style={{ height: "2rem" }} src="goo.png" alt="." />Sign up with Google</button><br/>
                <h6>_____________________or_____________________</h6>
            </div>
            <div className="signup2" >
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">What's your email?</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={e => setMyemail(e.target.value)} />
                        {error === '' ? null : <h6 style={{color:"red"}} >Plz enter your mail id!</h6>}
                        <h6 style={{ "text-decoration": "underline" ,color:"green"}}>Use Phone number instead</h6>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Confirm your email</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" onChange={e => setEmail(e.target.value)}/>
                        {error === '' ? null : <h6 style={{color:"red"}} >Plz confirm your mail id!</h6>}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Create a password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)}/>
                        {error === '' ? null : <h6 style={{color:"red"}} >Write strong password.</h6>}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">What should we call you?</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" onChange={e => setProfile(e.target.value)}/>
                        {error === '' ? null : <h6 style={{color:"red"}} >Plz fill this field!</h6>}
                        <p>This appears on your profile</p>
                    </div>
                    <label for="start">What's your date of birth?</label><br />

                    <input type="date" id="start" name="trip-start"
                        value="2023-19-03"
                        min="1990-01-01" max="2023-12-31" />
                        <br />

                    <label for="exampleInputPassword1" className="form-label">What's your gender?</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Female
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Non-binary
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Other
                        </label>
                    </div><br />
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" checked/>
                        <label class="form-check-label" for="exampleCheck1">I wolud prefer not to receive marketing from spotify.</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" checked/>
                        <label class="form-check-label" for="exampleCheck1">Share my registration data with spotify's content providers for marketing purposes.</label>
                    </div>
                    <button type="submit" className="signbtn">Sign up</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Signup;