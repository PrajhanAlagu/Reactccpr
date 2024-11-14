import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

const BuyPharmaceuticals = () => (
  <div>
    <button>Buy Pharmaceuticals</button>
    <p>Explore and purchase a wide range of pharmaceuticals.</p>
    {/* Add more content here */}
  </div>
);

const Payment = () => (
  <div>
    <button>Payment</button>
    <p>Complete your payment securely and efficiently.</p>
  </div>
);

const AddToCart = () => (
  <div>
    <button>Add to Cart</button>
    <p>Add items to your cart and review them before purchase.</p>
   
  </div>
);

const GetStart = () => {
  const location = useLocation();

  return (
    <div>
      <h1>Get Started</h1>
      <nav>
        <ul>
          <li>
            <Link to="buy-pharmaceuticals" className={location.pathname.includes('buy-pharmaceuticals') ? 'active' : ''}>
              <button>Buy Pharmaceuticals</button>
            </Link>
          </li>
          <li>
            <Link to="payment" className={location.pathname.includes('payment') ? 'active' : ''}>
              <button>Payment</button>
            </Link>
          </li>
          <li>
            <Link to="add-to-cart" className={location.pathname.includes('add-to-cart') ? 'active' : ''}>
              <button>Add to Cart</button>
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="buy-pharmaceuticals" element={<BuyPharmaceuticals />} />
        <Route path="payment" element={<Payment />} />
        <Route path="add-to-cart" element={<AddToCart />} />
      </Routes>
    </div>
  );
};
export default GetStart;