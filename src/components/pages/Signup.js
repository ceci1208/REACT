import React, { useState } from "react";
import { auth, db } from "../../Firebase";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          set(ref(db, "users/" + userCredential.user.uid), {
            firstName: firstName,
            lastName: lastName,
            email: email,
          });
          navigate("/login");
          alert("User Created")
        })
        .catch((error) => console.log(error));
      navigate("/login");
    }
    onRegister();
  };

  const clickLogin = () => {
    navigate("/login");
  };

  const clickTerms = () => {
    navigate("/terms");
  };

  const OnCheckboxClick = (e) => {
    if (e.target.checked) {
      //blah blah
      document.getElementById('btnRegister').disabled = false
    }
    else {
      //blah blah
      document.getElementById('btnRegister').disabled = true
    }
  }
  return (
    <section className="vh-100 bg-image">
      <div className="imgBack"></div>
      <div className="signupForm" onSubmit={handleSubmit}>
        <div className="Div2 container">
          <div className="Div3 row">
            <div className="Div4 col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="Div5 card">
                <div className="Div6 card-body">
                  <h2 className="H2-1" style={{fontFamily: "fantasy"}}>Create an account</h2>
                  <form>

                    <div className="form-outline mb-4">
                      <label className="form-label">First Name</label>
                      <input placeholder="first name" onChange={(e) => setFirstName(e.target.value)}
                        type="text" id="firstnameID" className="form-control form-control-lg"
                        aria-label="1" required />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">Last Name</label>
                      <input placeholder="last name" onChange={(e) => setLastName(e.target.value)}
                        type="text" id="lastnameID" className="form-control form-control-lg"
                        aria-label="1" required />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">Email</label>
                      <input placeholder="email" onChange={(e) => setEmail(e.target.value)}
                        type="email" id="emailID" className="form-control form-control-lg"
                        aria-label="1" required />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">Password</label>
                      <input placeholder="password" onChange={(e) => setPassword(e.target.value)}
                        type="password" id="passwordID"
                        className="form-control form-control-lg" aria-label="1" required />
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" id="checkBoxCheck"
                        aria-label="1" onClick={(e) => OnCheckboxClick(e)} />
                      <label className="form-check-label">
                        I agree all statements in
                        <button className="btnLogin" onClick={clickTerms}>
                          <u>Terms of service</u>
                        </button>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        id="btnRegister" disabled>Register</button>
                    </div>


                    <p className="text-center text-muted mt-5 mb-0">Have already an account?
                      <button className="btnLogin" onClick={clickLogin}><u>Login</u></button>
                    </p>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;