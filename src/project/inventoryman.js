import React, { useState } from "react";
import "./ivm.css"; // Optional: Create a CSS file for styles

const InventoryManagement = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Aspirin", quantity: 100 },
    { id: 2, name: "Ibuprofen", quantity: 50 },
    { id: 3, name: "Paracetamol", quantity: 75 },
  ]);
  const [newItem, setNewItem] = useState({ name: "", quantity: 0 });

  const handleAddItem = () => {
    if (!newItem.name || newItem.quantity <= 0) return;

    setItems([...items, { ...newItem, id: Date.now() }]);
    setNewItem({ name: "", quantity: 0 });
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <section className="inventory-management-wrapper">
    <div className="inventory-management">
      <h2>Inventory Management</h2>
      <div className="add-item">
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
          />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div className="item-list">
        <h3>Current Inventory</h3>
        <ul>
          {items.map(item => (
              <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
          </section>
  );
};

export default InventoryManagement;
