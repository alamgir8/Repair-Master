
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CheckOut from "./Components/CheckOut/CheckOut/CheckOut";
import AddAdmin from "./Components/Dashboard/AddAdmin/AddAdmin";

import AddReview from "./Components/Dashboard/AddReview/AddReview";
import AddService from "./Components/Dashboard/AddService/AddService";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import ManageService from "./Components/Dashboard/ManageService/ManageService";
import MyService from "./Components/Dashboard/MyService/MyService";
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
                      <PrivateRoute path='/dashboard/addAdmin'>
                        <AddAdmin/>
                      </PrivateRoute>
                      <PrivateRoute path='/dashboard/addService'>
                        <AddService/>
                      </PrivateRoute>
                      <PrivateRoute path='/dashboard/addReview'>
                        <AddReview/>
                      </PrivateRoute>
                      <PrivateRoute path='/dashboard/manageService'>
                        <ManageService/>
                      </PrivateRoute>
                      <PrivateRoute path='/dashboard/orders'>
                        <OrderedServices/>
                      </PrivateRoute>
                      <PrivateRoute path='/dashboard/myService'>
                        <MyService/>
                      </PrivateRoute>
                      <PrivateRoute path='/dashboard'>
                        <Dashboard/>
                      </PrivateRoute>
                      <PrivateRoute path='/checkout/:_id'>
                        <CheckOut/>
                      </PrivateRoute>
                  </Switch>
                </Router>
         </userContext.Provider>
  );
}

export default App;
