import React, { useState } from "react";
import firebase from "firebase/app";
import Navigation from "../../Shared/Navigation/Navigation";
import bgLogin from "./../../../img/auth-1b.svg";
import googleLogo from "./../../../img/goggle.jpg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Alert, Spinner } from "react-bootstrap";
import "./../Login.css";
import swal from "sweetalert";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/login" } };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
        swal({
          title: "Successfully Login!",
          icon: "success",
        });
        setError("");
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
    <div className="login-section">
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
                     value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      name="email"
                      type="text"
                      placeholder="admin email=alamgirh@gmail.com"
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
                      placeholder="password=alamgirh@gmail.com"
                      required
                    />
                  </div>

                  <div className="py-3 text-center">
                    <button
                      onClick={signIn}
                      type="submit"
                      className="btn button-white w-100"
                    >
                      Login
                    </button>
                    <p className="text-center m-auto pt-5">
                      Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                    <button onClick={handleGoogleSignIn} className="btn mt-4 bg-info text-white">
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

export default Login;
