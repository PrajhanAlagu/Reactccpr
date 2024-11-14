import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";

const Homewebsite = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Pharmacy Management System</h1>
        <p>Streamline your pharmacy operations with our comprehensive management solution.<b>Pharmacy management</b> is essential for optimizing <i>patient care </i> and <i>ensuring medication safety</i>. It streamlines operations, enhances collaboration within <u>healthcare teams</u>, and <u>empowers patients through education</u>. By embracing technology and sustainable practices, effective management not only improves health outcomes but also prepares pharmacies for the future of healthcare.</p>
      </div>
      <div className="features">
        <div className="feature">
        <h3><Link to='/inventory'>Inventory Management</Link></h3>
          <p>Track and manage your stock efficiently.</p>
          <img src="https://www.nogentech.org/wp-content/uploads/2021/09/InventoryManagement_Hero@3x.png" width={200} height={200}></img>
        </div>
        <div className="feature">
        <h3><Link to='/order'>Order Management</Link></h3>
          <p>Process customer orders quickly and accurately.</p>
          <img src="https://th.bing.com/th/id/OIP.IZO19QyvT-MXJI8uydQmAwHaEK?rs=1&pid=ImgDetMain" width={200} height={200}></img>
        </div>
        <div className="feature">
        <h3><Link to='/customer'>Customer Management</Link></h3>
          <p>Maintain detailed records of your customers.</p>
          <img src="https://www.cxtoday.com/wp-content/uploads/2022/01/CRM-101-Customer-Relationship-Management.jpeg" width={200} height={200}></img>
        </div>
      </div>
    </div>
  );
};

export default Homewebsite;