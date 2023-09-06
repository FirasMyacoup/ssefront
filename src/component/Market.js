import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/Market.css';
import logo from '../assets/logo.png'

const Market = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const [isConfirmationSent, setIsConfirmationSent] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const products = [
    { id: 1, name: 'Product A', price: 10, image: logo },
    { id: 2, name: 'Product B', price: 15, image: logo },
    { id: 3, name: 'Product C', price: 20, image: logo },
    { id: 4, name: 'Product D', price: 25, image: logo },
    { id: 5, name: 'Product E', price: 30, image: logo },
    { id: 6, name: 'Product F', price: 40, image: logo },
  ];

  const handleBuyClick = (product) => {
    const productIndex = selectedProducts.findIndex((p) => p.id === product.id);

    if (productIndex !== -1) {
      const updatedProducts = [...selectedProducts];
      updatedProducts[productIndex].count++;
      setSelectedProducts(updatedProducts);
    } else {
      setSelectedProducts((prevSelectedProducts) => [
        ...prevSelectedProducts,
        { ...product, count: 1 },
      ]);
    }
  };

  const handleRemoveProduct = (productIdToRemove) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.map((product) => {
        if (product.id === productIdToRemove) {
          if (product.count > 1) {
            return { ...product, count: product.count - 1 };
          }
          // If count is 1, remove the product from the basket
          return null;
        }
        return product;
      }).filter(Boolean) // Remove null entries
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
        console.log('Email sent successfully');
        setIsConfirmationSent(true);
        setSelectedProducts([]); // Clear the selected products
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
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
                {product.name} (x{product.count})
                <button className="remove-button" onClick={() => handleRemoveProduct(product.id)}>
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
          <button className='confirm-button' onClick={handleConfirmPurchase}>Confirm Purchase</button>
        </div>
      )}

      {isConfirmationSent && (
        <div className="confirmation-message">
          <p>Thanks for wanting to shop with us! We will contact with you shortly.</p>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Market;
