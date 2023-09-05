import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/Market.css';

const Market = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const [isConfirmationSent, setIsConfirmationSent] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const products = [
    { id: 1, name: 'Product A', price: 10, image: 'product-a.jpg' },
    { id: 2, name: 'Product B', price: 15, image: 'product-b.jpg' },
    { id: 3, name: 'Product C', price: 20, image: 'product-c.jpg' },
  ];

  const handleBuyClick = (product) => {
    setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product]);
  };

  const handleRemoveProduct = (productToRemove) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.filter((product) => product.id !== productToRemove.id)
    );
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailRegex.test(email));
    setUserEmail(email);
  };

  const handleConfirmPurchase = () => {
    if (!isValidEmail) {
      toast.error('Please enter a valid email address', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    if (!userEmail) {
      toast.error('Please enter an email address', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    axios
      .post('http://localhost:3001/send-email', { userEmail, selectedProducts })
      .then(() => {
        setIsConfirmationSent(true);
        toast.success('Thanks for shopping with us! We will contact you shortly.', {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        toast.error('Email sending failed. Please try again later.', {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div className="market">
      <h1>Product Market</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button className="buy-button" onClick={() => handleBuyClick(product)}>
              Buy
            </button>
          </div>
        ))}
      </div>

      {selectedProducts.length > 0 && (
        <div className="purchase-form">
          <h2>Confirm Purchase</h2>
          <p>You've selected:</p>
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.id}>
                {product.name}
                <button className="remove-button" onClick={() => handleRemoveProduct(product)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <input
            type="email"
            placeholder="Enter your email"
            value={userEmail}
            onChange={handleEmailChange}
          />
          <button onClick={handleConfirmPurchase}>Confirm Purchase</button>
        </div>
      )}

      {isConfirmationSent && (
        <p>Confirmation email sent to the company. They will contact you shortly.</p>
      )}

      <ToastContainer />
    </div>
  );
};

export default Market;
