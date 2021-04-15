
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddReview from "./Components/Dashboard/AddReview/AddReview";
import AddService from "./Components/Dashboard/AddService/AddService";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Signup from "./Components/Login/Signup/Signup";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([])

  return (
         <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
               <Router>
                  <Switch>
                    <Route path='/home'>
                        <Home/>
                        </Route>
                        <Route exact path='/'>
                          <Home/>
                      </Route>
                      <Route path='/signup'>
                        <Signup/>
                      </Route>
                      <Route path='/login'>
                        <Login/>
                      </Route>
                      <Route path='/dashboard/addService'>
                        <AddService/>
                      </Route>
                      <Route path='/dashboard/addReview'>
                        <AddReview/>
                      </Route>
                      <PrivateRoute path='/dashboard'>
                        <Dashboard/>
                      </PrivateRoute>  
                  </Switch>
                </Router>
         </userContext.Provider>
  );
}

export default App;
