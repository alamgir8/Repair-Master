import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ContentLoader from "react-content-loader";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";

const CustomerDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [pending, setPending] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [done, setDone] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector(selectUser);

  useEffect(() => {
    const getOrders = async () => {
      const res = await fetch(
        `https://repair-master-server.herokuapp.com/order?email=` + user.email
      );
      const data = await res.json();
      setOrders(data);
      const orderPending = data.filter(
        (statusP) => statusP.status === "Pending"
      );
      setPending(orderPending);

      const orderOngoing = data.filter(
        (statusO) => statusO.status === "Ongoing"
      );
      setOngoing(orderOngoing);

      const orderDone = data.filter((statusD) => statusD.status === "Done");
      setDone(orderDone);
      setLoading(false);
    };

    return getOrders();
  }, [user.email]);

  let totalCost = 0;
  for (let i = 0; i < orders.length; i++) {
    const element = orders[i];
    const price = parseInt(element.service.price);
    totalCost = price + totalCost;
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-3 my-4">
          <div className="card bg-danger text-white p-3">
            <div className="row">
              <div className="col-md-5 offset-md-1">
                <h2 className="display-5">{orders.length}</h2>
              </div>
              <div className="col-md-6 m-auto">
                <p className="h6"> Total Orders</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-4">
          <div className="card bg-primary text-white p-3">
            <div className="row">
              <div className="col-md-4 offset-md-1">
                <h2 className="display-5">{ongoing.length}</h2>
              </div>
              <div className="col-md-6 m-auto">
                <p className="h6">Order Ongoing</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-4">
          <div className="card bg-warning text-white p-3">
            <div className="row">
              <div className="col-md-5 offset-md-1">
                <h2 className="display-5">{pending.length}</h2>
              </div>
              <div className="col-md-6 m-auto">
                <p className="h6"> Order Pending</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-4">
          <div className="card bg-success text-white p-3">
            <div className="row">
              <div className="col-md-5 offset-md-1">
                <h2 className="display-5">{done.length}</h2>
              </div>
              <div className="col-md-6 m-auto">
                <p className="h6"> Order Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!loading && orders.length === 0 && (
        <h1 className="text-center my-2">You Have no Order Yet!</h1>
      )}

      {loading ? (
        <ContentLoader
          width={1000}
          height={550}
          viewBox="0 0 1000 550"
          backgroundColor="#ababab"
          foregroundColor="#fafafa"
          // {...props}
        >
          <rect x="51" y="45" rx="3" ry="3" width="906" height="17" />
          <circle cx="879" cy="123" r="11" />
          <circle cx="914" cy="123" r="11" />
          <rect x="104" y="115" rx="3" ry="3" width="141" height="15" />
          <rect x="305" y="114" rx="3" ry="3" width="299" height="15" />
          <rect x="661" y="114" rx="3" ry="3" width="141" height="15" />
          <rect x="55" y="155" rx="3" ry="3" width="897" height="2" />
          <circle cx="880" cy="184" r="11" />
          <circle cx="915" cy="184" r="11" />
          <rect x="105" y="176" rx="3" ry="3" width="141" height="15" />
          <rect x="306" y="175" rx="3" ry="3" width="299" height="15" />
          <rect x="662" y="175" rx="3" ry="3" width="141" height="15" />
          <rect x="56" y="216" rx="3" ry="3" width="897" height="2" />
          <circle cx="881" cy="242" r="11" />
          <circle cx="916" cy="242" r="11" />
          <rect x="106" y="234" rx="3" ry="3" width="141" height="15" />
          <rect x="307" y="233" rx="3" ry="3" width="299" height="15" />
          <rect x="663" y="233" rx="3" ry="3" width="141" height="15" />
          <rect x="57" y="274" rx="3" ry="3" width="897" height="2" />
          <circle cx="882" cy="303" r="11" />
          <circle cx="917" cy="303" r="11" />
          <rect x="107" y="295" rx="3" ry="3" width="141" height="15" />
          <rect x="308" y="294" rx="3" ry="3" width="299" height="15" />
          <rect x="664" y="294" rx="3" ry="3" width="141" height="15" />
          <rect x="58" y="335" rx="3" ry="3" width="897" height="2" />
          <circle cx="881" cy="363" r="11" />
          <circle cx="916" cy="363" r="11" />
          <rect x="106" y="355" rx="3" ry="3" width="141" height="15" />
          <rect x="307" y="354" rx="3" ry="3" width="299" height="15" />
          <rect x="663" y="354" rx="3" ry="3" width="141" height="15" />
          <rect x="57" y="395" rx="3" ry="3" width="897" height="2" />
          <circle cx="882" cy="424" r="11" />
          <circle cx="917" cy="424" r="11" />
          <rect x="107" y="416" rx="3" ry="3" width="141" height="15" />
          <rect x="308" y="415" rx="3" ry="3" width="299" height="15" />
          <rect x="664" y="415" rx="3" ry="3" width="141" height="15" />
          <rect x="55" y="453" rx="3" ry="3" width="897" height="2" />
          <rect x="51" y="49" rx="3" ry="3" width="2" height="465" />
          <rect x="955" y="49" rx="3" ry="3" width="2" height="465" />
          <circle cx="882" cy="484" r="11" />
          <circle cx="917" cy="484" r="11" />
          <rect x="107" y="476" rx="3" ry="3" width="141" height="15" />
          <rect x="308" y="475" rx="3" ry="3" width="299" height="15" />
          <rect x="664" y="475" rx="3" ry="3" width="141" height="15" />
          <rect x="55" y="513" rx="3" ry="3" width="897" height="2" />
          <rect x="52" y="80" rx="3" ry="3" width="906" height="17" />
          <rect x="53" y="57" rx="3" ry="3" width="68" height="33" />
          <rect x="222" y="54" rx="3" ry="3" width="149" height="33" />
          <rect x="544" y="55" rx="3" ry="3" width="137" height="33" />
          <rect x="782" y="56" rx="3" ry="3" width="72" height="33" />
          <rect x="933" y="54" rx="3" ry="3" width="24" height="33" />
        </ContentLoader>
      ) : (
        <div className="card p-4 my-3">
          <h5 className="py-3">All Order</h5>

          <Table responsive className="table-borderless table-hover">
            <thead className="bg-light">
              <tr>
                <th className="fw-bolder">Sr No</th>
                <th className="fw-bolder">Service Name</th>
                <th className="fw-bolder">Order Time</th>
                <th className="fw-bolder">Price</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <td className="h6 text-muted ">{index + 1}</td>
                  <td className="h6 text-muted">{order.service.title}</td>
                  <td className="h6 text-muted">{order.orderTime}</td>
                  <td className="h6 text-muted">${order.service.price}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="h5 pt-4">
                  Total Cost
                </td>
                <td className="h6 pt-4 fw-bold">${totalCost}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default CustomerDashboard;
