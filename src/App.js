import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from "./Components/CheckOut/CheckOut/CheckOut";
import AddAdmin from "./Components/Dashboard/AddAdmin/AddAdmin";
import AddReview from "./Components/Dashboard/AddReview/AddReview";
import AddService from "./Components/Dashboard/AddService/AddService";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import ManageService from "./Components/Dashboard/ManageService/ManageService";
import MyOrder from "./Components/Dashboard/MyOrder/MyOrders";
import OrderedServices from "./Components/Dashboard/OrderedServices/OrderedServices";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Signup from "./Components/Login/Signup/Signup";
import NoMatch from "./Components/Shared/NoMatch/NoMatch";
import { login, logout} from "./features/userSlice";
import { auth } from "./firebase";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        )
      }
      else{
        dispatch(logout)
      }
    })
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/dashboard/addAdmin">
          <AddAdmin />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/addService">
          <AddService />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/addReview">
          <AddReview />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/manageService">
          <ManageService />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/orders">
          <OrderedServices />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/myOrder">
          <MyOrder />
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/checkout/:_id">
          <CheckOut />
        </PrivateRoute>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
