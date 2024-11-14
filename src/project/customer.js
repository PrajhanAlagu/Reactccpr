import React, { useState } from "react";
import "./cus.css"; // Optional: Create a CSS file for styles

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: "ranjith", email: "ranjtih@gmail.com", phone: "9878563497" },
    { id: 2, name: "pranesh", email: "pranesh@gmail.com", phone: "8775960498" },
  ]);
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", phone: "" });

  const handleAddCustomer = () => {
    if (!newCustomer.name || !newCustomer.email || !newCustomer.phone) return;

    setCustomers([...customers, { ...newCustomer, id: Date.now() }]);
    setNewCustomer({ name: "", email: "", phone: "" });
  };

  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  return (
          <section className="inventory-management-wrapper">

      <div className="customer-management">
      <h2>Customer Management</h2>
      <div className="add-customer">
        <input
          type="text"
          placeholder="Customer Name"
          value={newCustomer.name}
          onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
          />
        <input
          type="email"
          placeholder="Email"
          value={newCustomer.email}
          onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
          />
        <input
          type="text"
          placeholder="Phone"
          value={newCustomer.phone}
          onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
          />
        <button onClick={handleAddCustomer}>Add Customer</button>
      </div>
      <div className="customer-list">
        <h3>Current Customers</h3>
        <ul>
          {customers.map(customer => (
              <li key={customer.id}>
              {customer.name} - {customer.email} - {customer.phone}
              <button onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </section>
  );
};

export default CustomerManagement;
