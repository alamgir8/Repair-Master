import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import Navigation from "../../Shared/Navigation/Navigation";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import UserSidebar from "../../Shared/Sidebar/UserSidebar";
import AllService from "./AllService";
import CustomerDashboard from "./CustomerDashboard";
import spinner from "./../../../img/spinner.gif";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const user = useSelector(selectUser);

  useEffect(() => {
    let unmounted = false;
    const getAdmin = async () => {
      const res = await fetch(
        "https://repair-master-server.herokuapp.com/isAdmin"
      );
      const data = await res.json();
      if (!unmounted) {
        const result = data.find((admin) => admin.email === user?.email);
        if (result) {
          setIsAdmin(true);
          setLoading(false)
        } else {
          setIsAdmin(false);
          setLoading(false)
        }
      }
    };
    getAdmin();
    return () => {unmounted = true}
  }, [user.email]);

  return (
    <div className="dashboard-section">
      <Navigation />
      <div className="px-3 mx-auto">
        {loading ? (
          <div className="text-center">
            <img src={spinner} alt="spinner" />
          </div>
        ) : (
          <div className="row">
            <div className="col-md-3">
              {isAdmin ? <Sidebar /> : <UserSidebar />}
            </div>
            <div className="col-md-9">
              {isAdmin ? <AllService /> : <CustomerDashboard />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
