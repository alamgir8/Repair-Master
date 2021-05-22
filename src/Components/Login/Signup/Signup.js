import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import Navigation from '../../Shared/Navigation/Navigation';
import firebaseConfig from '../firebase.config';
import { userContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import googleLogo from './../../../img/goggle.jpg';
import bgLogin from './../../../img/auth-1b.svg'
import { Spinner } from 'react-bootstrap';
import './../Login.css';
import swal from 'sweetalert';


!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const Signup = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
 
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
       })

       const googleProvider = new firebase.auth.GoogleAuthProvider();
        const handleGoogleSignIn = () => {
            firebase.auth()
            .signInWithPopup(googleProvider)
            .then((res) => {
            const user = res.user;
            setLoggedInUser(user);
            history.replace(from);
                    
            }).catch((error) => {
            const errorMessage = error.message;
            const email = error.email;
            console.log(errorMessage, email);
            });
        }

    
    const handleBlur = (e) => {
        console.log(e);
        let isFormFieldValid = true;
        if (e.target.name === 'email') {
            isFormFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 8;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value);
            isFormFieldValid = isPasswordValid && isPasswordHasNumber;
        }
     
        if (isFormFieldValid) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    

    const handleSubmit = (e) => {

      if (user.email && user.password) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            const newUserInfo = {...user};
            newUserInfo.error = '';
            setUser(newUserInfo);
            updateUserName(user.name)
            swal({
                title: "your account created successfully!",
                icon: "success",
              });
                     
            
        })
        .catch((error) => {
            swal({
                title: "Sign Up Error!",
                icon: "error",
              });
            const errorMessage = error.message;
            const newUserInfo = {...user};
            newUserInfo.error = errorMessage;
            setUser(newUserInfo);
            console.log(error);
            
       
        });
        
    }
    e.preventDefault();

    };

    const updateUserName = name => {
        const user = firebase.auth().currentUser;
    
        user.updateProfile({
          displayName: name,
          
        })
      
       }
    return (
                <div className="sign-up-section">
                        <Navigation/>
                        <div className="container">
                            <div className="row my-5">
                                <div className="col-md-5">
                                    <div className="card bg-light ms-auto my-3 p-4">
                                        <form onSubmit={handleSubmit}>
                                            <div className="p-4">
                                                <div className="py-2">
                                                    <input onBlur={handleBlur} className="form-control" name='name' type="text" placeholder="Your Name" required/> 
                                                </div>
                                                <div className="py-2">
                                                    <input onBlur={handleBlur} className="form-control" name='email' type="text" placeholder="Email"  required/>
                                            </div>
                                                <div className="py-2">
                                                    <input onBlur={handleBlur} className="form-control" name='password' type="password" placeholder="Password" required/>
                                                </div>
                                                <p className='text-danger'>{user.error}</p>
                                               
                                                <div className="py-3 text-center">
                                                    <button className='btn button-white w-100'>Sign Up</button>
                                                    <p className='text-center m-auto pt-4'>Already have an account? <Link to="/login">Login</Link></p>
                                                    <button className='google-login-button btn mt-4 bg-info text-white' onClick={handleGoogleSignIn}><img src={googleLogo} alt="goggleLogo"/> Continue With Google</button>
                                                </div>
                            
                                            </div>         
                                        </form>
             
                                    </div>  
                                </div>
                                <div className="col-md-6 offset-md-1 my-4">
                                    {bgLogin.length === 0 &&   <div className="text-center display-4">
                                        <Spinner animation="grow" variant="warning" />
                                    </div>}
                                     <img src={bgLogin} alt="bgLogin" className='img-fluid'/>
                                </div>
                            </div>
                       
                        </div>
                    </div>
    );
};

export default Signup;