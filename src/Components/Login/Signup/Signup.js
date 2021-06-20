import React, { useState } from "react";
import firebase from "firebase/app";
import Navigation from "../../Shared/Navigation/Navigation";
import { Link, useHistory} from "react-router-dom";
import googleLogo from "./../../../img/goggle.jpg";
import bgLogin from "./../../../img/auth-1b.svg";
import { Alert, Spinner } from "react-bootstrap";
import "./../Login.css";
import swal from "sweetalert";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import auth from "../../../firebase";



const Signup = () => {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");


  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/login" } };

  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return setError("Name is Required");
    }
    if(!email){
      return setError('Email is Required!')
    }
    if (password !== confirmPassword) {
      return setError("Password Not Matched!");
    }
    if (password.length < 10) {
      return setError("Password should be at least 10 character!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            swal({
              title: "your account created successfully!",
              icon: "success",
            });
            setError("")
            history.replace(from)
          });
      })
      .catch((error) => {
        swal({
          title: "Sign Up Error!",
          icon: "error",
        });
        setError(error.message);
      });
  };


  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        swal({
          title: "Login successfully!",
          icon: "success",
        });
        setError("")
        history.replace(from)
      })
      .catch((error) => {
        swal({
          title: "Login Error!",
          icon: "error",
        });
        setError(error.message);
      });
  };

  return (
    <div className="sign-up-section">
      <Navigation />
      <div className="container">
        <div className="row my-5">
          <div className="col-md-5">
            <div className="card bg-light ms-auto my-3 p-4">
              <form>
                <div className="p-4">
                  {error && <Alert variant="danger">{error}</Alert>}
                  <div className="py-2">
                    <input
                      className="form-control my-2 mx-auto"
                      value={profilePic}
                      onChange={(e) => setProfilePic(e.target.value)}
                      type="text"
                      placeholder="PhotoURL (optional"
                    />
                  </div>
                  <div className="py-2">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="py-2">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      name="email"
                      type="text"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="py-2">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      name="password"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="py-2">
                    <input
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control"
                      name="password"
                      type="password"
                      placeholder="Confirm-Password"
                      required
                    />
                  </div>

                  <div className="py-3 text-center">
                    <button
                      onClick={register}
                      type="submit"
                      className="btn button-white w-100"
                    >
                      Sign Up
                    </button>
                    <p className="text-center m-auto pt-4">
                      Already have an account? <Link to="/login">Login</Link>
                    </p>
                    <button
                      className="google-login-button btn mt-4 bg-info text-white"
                      onClick={handleGoogleSignIn}
                    >
                      <img src={googleLogo} alt="goggleLogo" /> Continue With
                      Google
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 offset-md-1 my-4">
            {bgLogin.length === 0 && (
              <div className="text-center display-4">
                <Spinner animation="grow" variant="warning" />
              </div>
            )}
            <img src={bgLogin} alt="bgLogin" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
