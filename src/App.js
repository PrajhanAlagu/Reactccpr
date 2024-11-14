import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginSignup from './project/pharmacy management system';
import Homewebsite from './project/homepage';
import OrderManagement from './project/order';
import InventoryManagement from './project/inventoryman';
import CustomerManagement from './project/customer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginSignup/>}/>
      <Route path='/par' element={<Homewebsite/>}/>
      <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/order" element={<OrderManagement />} />
        <Route path="/customer" element={<CustomerManagement />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;