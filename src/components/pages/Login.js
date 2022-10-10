import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      signInWithEmailAndPassword(auth, email, password).catch((error) =>
        console.log(error)
      );
      alert("User Correct")
      navigate("/menu");
    }
    onRegister();
  };


  const clickSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="imgBack">
      <div className="loginForm" onSubmit={handleSubmit}>
        <div className="Div2 container">
          <div className="Div3 row">
            <div className="Div4 col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="Div5 card">
                <div className="Div6 card-body">
                  <h2 className="H2-1" style={{fontFamily: "fantasy"}}>Login</h2>
                  <form>
                    <div className="form-outline mb-4">
                      <label className="form-label">Email</label>
                      <input placeholder="email" type="text" name="emailID" id="emailID" onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg"
                        required />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">Password</label>
                      <input placeholder="password" type="password" name="passwordID" id="passwordID" onChange={(e) => setPassword(e.target.value)}
                        className="form-control form-control-lg" required />
                    </div>

                    <div className="d-flex justify-content-center">
                      <input type="submit" value="Login"></input>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">You don't have an account?
                      <button className="btnRegister" onClick={clickSignup}><u>Register</u></button>
                    </p>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;