import React from 'react';
import { FaStar, FaSearch } from 'react-icons/fa';
import image from '../../../Images/map.webp';
import './test3.css';
class HomePageTest extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to our Transportation App!</h1>
        <div className="promotions">
          <h2>Featured Promotions</h2>
          <div className="promotion-card">
            <div className="promotion-image">
              <img src={image} alt="Promotion" />
            </div>
            <div className="promotion-details">
              <h3>Special Discount</h3>
              <p>Get 20% off on your first booking!</p>
            </div>
          </div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Enter your destination" />
          <button>
            <FaSearch />
          </button>
        </div>
        <div className="quick-links">
          <h2>Popular Routes</h2>
          <ul>
            <li>Route 1</li>
            <li>Route 2</li>
            <li>Route 3</li>
          </ul>
        </div>
        <div className="app-info">
          <h2>About Our App</h2>
          <p>Learn more about our transportation services and features.</p>
          <button>Read More</button>
        </div>
        <div className="testimonials">
          <h2>Customer Testimonials</h2>
          <div className="testimonial">
            <FaStar />
            <p>"Great experience using this app for my travel needs. Highly recommended!"</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePageTest;
