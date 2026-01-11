import React, { useState } from 'react';
import './ProductSection.css';

const ProductSection: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('30ml');

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      setQuantity(prev => prev + 1);
    } else {
      setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    }
  };

  const sizes = ['30ml', '50ml', '100ml'];

  return (
    <section className="product-section">
      <div className="product-container">
        
        {/* LEFT SIDE - Product Image & Features */}
        <div className="product-left">
          {/* Product Image */}
          <div className="product-image-wrapper">
            <div className="product-image-container">
             

                <img 
                  src="/bg-img.jpg" 
                  alt="" 
                  className="product-image"
                ></img>
             
              
              {/* Zoom Icon */}
              <button className="zoom-button" aria-label="View larger">
                <svg className="zoom-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                  <path d="M11 8v6M8 11h6" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="feature-cards">
            <div className="feature-card card-smell">
              <div className="feature-icon">🌸</div>
              <div className="feature-content">
                <h3 className="feature-title">Smell</h3>
                <p className="feature-description">Pampering & luxurious Floral essential oils blend</p>
              </div>
            </div>

            <div className="feature-card card-touch">
              <div className="feature-icon">✨</div>
              <div className="feature-content">
                <h3 className="feature-title">Touch</h3>
                <p className="feature-description">Non sticky and quick absorbing</p>
              </div>
            </div>

            <div className="feature-card card-sight">
              <div className="feature-icon">👁️</div>
              <div className="feature-content">
                <h3 className="feature-title">Sight</h3>
                <p className="feature-description">Makes skin replenished and boosts radiance</p>
              </div>
            </div>

            
          </div>
        </div>
        

        {/* RIGHT SIDE - Product Details */}
        <div className="product-right">
          {/* Product Title */}
          <div className="product-header">
            <h1 className="product-title">Radiance & Glow Face Oil</h1>
            
            {/* Rating & Stats */}
            <div className="product-stats">
              <div className="rating-section">
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`star ${star <= 4 ? 'star-filled' : 'star-half'}`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="rating-number">4.8</span>
              </div>

              <div className="stats-divider"></div>

              <div className="review-count">
                <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="7" r="4" strokeWidth="2" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="stat-text"><strong>198</strong> REVIEWS</span>
              </div>

              <div className="stats-divider"></div>

              <div className="sold-count">
                <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M2 11l1-1h2l3.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="stat-text"><strong>280</strong> SOLD THIS MONTH</span>
              </div>
            </div>
          </div>

         
          <div className="product-option">
            <label className="option-label">SIZE</label>
            <div className="size-selector">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'size-selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="product-option">
            <label className="option-label">QUANTITY</label>
            <div className="quantity-selector">
              <button 
                className="quantity-button"
                onClick={() => handleQuantityChange('decrement')}
                aria-label="Decrease quantity"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14" strokeLinecap="round" />
                </svg>
              </button>
              <span className="quantity-display">{quantity}</span>
              <button 
                className="quantity-button"
                onClick={() => handleQuantityChange('increment')}
                aria-label="Increase quantity"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="product-actions">
            <button className="btn-add-cart">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="9" cy="21" r="1" strokeWidth="2" />
                <circle cx="20" cy="21" r="1" strokeWidth="2" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              ADD TO CART
            </button>
            
            <button className="btn-buy-now">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              BUY NOW
            </button>
          </div>

          {/* Payment Methods */}
          <div className="payment-section">
            <p className="payment-label">Secure Checkout With</p>
            <div className="payment-methods">
              <div className="payment-badge">
                <span className="payment-text">VISA</span>
              </div>
              <div className="payment-badge">
                <span className="payment-text">MC</span>
              </div>
              <div className="payment-badge">
                <span className="payment-text">AMEX</span>
              </div>
              <div className="payment-badge">
                <span className="payment-text">Pay</span>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="delivery-info">
            <div className="delivery-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="1" y="3" width="15" height="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 8h5l3 3v5h-2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="5.5" cy="18.5" r="2.5" strokeWidth="2" />
                <circle cx="18.5" cy="18.5" r="2.5" strokeWidth="2" />
              </svg>
            </div>
            <p className="delivery-text">
              Order within the next <strong className="highlight">12 Hours</strong> for dispatch today, 
              and you'll receive your package in <strong className="highlight">2 days</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;