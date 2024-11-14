import React, { useState } from "react";
import "./orm.css"; // Optional: Create a CSS file for styles

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "ranjith", item: "Aspirin", quantity: 2 },
    { id: 2, customer: "neenju", item: "penicillin", quantity: 1 },
  ]);
  const [newOrder, setNewOrder] = useState({ customer: "", item: "", quantity: 0 });

  const handleAddOrder = () => {
    if (!newOrder.customer || !newOrder.item || newOrder.quantity <= 0) return;

    setOrders([...orders, { ...newOrder, id: Date.now() }]);
    setNewOrder({ customer: "", item: "", quantity: 0 });
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <section className="inventory-management-wrapper">
    <div className="order-management">
      <h2>Order Management</h2>
      <div className="add-order">
        
        <input
          type="text"
          placeholder="Customer Name"
          value={newOrder.customer}
          onChange={(e) => setNewOrder({ ...newOrder, customer: e.target.value })}
        />
        <input
          type="text"
          placeholder="Item"
          value={newOrder.item}
          onChange={(e) => setNewOrder({ ...newOrder, item: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newOrder.quantity}
          onChange={(e) => setNewOrder({ ...newOrder, quantity: Number(e.target.value) })}
          />
        <button onClick={handleAddOrder}>Add Order</button>
      </div>
      <div className="order-list">
        <h3>Current Orders</h3>
        <ul>
          {orders.map(order => (
              <li key={order.id}>
              {order.customer} ordered {order.quantity} of {order.item}
              <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </section>
  );
};

export default OrderManagement;
