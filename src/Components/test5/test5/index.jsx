import React from 'react';
import { FaCalendarAlt, FaUser, FaCreditCard, FaCheck } from 'react-icons/fa';
import busImage from '../../../Images/map.webp';

import './test5.css';

class BookingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: '',
      arrival: '',
      date: '',
      time: '',
      passengers: 1,
      seat: '',
      name: '',
      contact: '',
      paymentMethod: '',
      isBookingConfirmed: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlePassengersChange = (e) => {
    const passengers = parseInt(e.target.value);
    this.setState({ passengers });
  };

  handleBookingConfirm = () => {
    // Perform booking logic here
    this.setState({ isBookingConfirmed: true });
    // Display confirmation message or redirect to confirmation page
  };

  render() {
    const {
      departure,
      arrival,
      date,
      time,
      passengers,
      seat,
      name,
      contact,
      paymentMethod,
      isBookingConfirmed,
    } = this.state;

    return (
      <div className="booking-page">
        <h1>Booking Page</h1>
        <div className="form-group">
          <label htmlFor="departure">Departure:</label>
          <input
            type="text"
            id="departure"
            name="departure"
            value={departure}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="arrival">Arrival:</label>
          <input
            type="text"
            id="arrival"
            name="arrival"
            value={arrival}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={date}
            onChange={this.handleInputChange}
          />
          <FaCalendarAlt className="icon" />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            name="time"
            value={time}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passengers">Passengers:</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            value={passengers}
            min={1}
            onChange={this.handlePassengersChange}
          />
          <FaUser className="icon" />
        </div>
        <div className="form-group">
          <label htmlFor="seat">Seat:</label>
          <input
            type="text"
            id="seat"
            name="seat"
            value={seat}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={contact}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <input
            type="text"
            id="paymentMethod"
            name="paymentMethod"
            value={paymentMethod}
            onChange={this.handleInputChange}
          />
          <FaCreditCard className="icon" />
        </div>
        <button onClick={this.handleBookingConfirm}>Confirm Booking</button>
        {isBookingConfirmed && (
          <p>
            Booking Confirmed!
            <FaCheck className="icon" />
          </p>
        )}
        <img src={busImage} alt="Bus" className="bus-image" />
      </div>
    );
  }
}

export default BookingPage;
