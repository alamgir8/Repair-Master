
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddReview from "./Components/Dashboard/AddReview/AddReview";
import AddService from "./Components/Dashboard/AddService/AddService";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Home/Home/Home";


function App() {
  return (
          <Router>
            <Switch>
              <Route path='/home'>
                  <Home/>
                  </Route>
                  <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/dashboard/addService'>
                  <AddService/>
                </Route>
                <Route path='/dashboard/addReview'>
                  <AddReview/>
                </Route>
                <Route path='/dashboard'>
                  <Dashboard/>
                </Route>
                
            </Switch>
          </Router>
  );
}

export default App;
