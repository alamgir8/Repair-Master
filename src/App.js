
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CheckOut from "./Components/CheckOut/CheckOut/CheckOut";

import AddReview from "./Components/Dashboard/AddReview/AddReview";
import AddService from "./Components/Dashboard/AddService/AddService";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import ManageService from "./Components/Dashboard/ManageService/ManageService";
import OrderedServices from "./Components/Dashboard/OrderedServices/OrderedServices";
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
                      <Route path='/dashboard/manageService'>
                        <ManageService/>
                      </Route>
                      <Route path='/dashboard/orders'>
                        <OrderedServices/>
                      </Route>
                      <PrivateRoute path='/dashboard'>
                        <Dashboard/>
                      </PrivateRoute>
                      <Route path='/checkout/:_id'>
                        <CheckOut/>
                      </Route>
                  </Switch>
                </Router>
         </userContext.Provider>
  );
}

export default App;
