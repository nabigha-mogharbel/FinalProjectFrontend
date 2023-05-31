import React from 'react';
import { FaPrint, FaEdit, FaTrash, FaStar } from 'react-icons/fa';
import bookingImage from '../../../Images/map.webp';
import './test6.css';
class MyBookingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [
        {
          id: 1,
          referenceNumber: 'ABC123',
          route: 'Tripoli to Beirut',
          date: '2023-05-28',
          time: '10:00 AM',
          status: 'Confirmed',
          rating: 4,
        },
        // Add more bookings as needed
      ],
    };
  }

  handleModifyBooking = (bookingId) => {
    // Logic to modify booking
    alert(`Modifying booking with ID: ${bookingId}`);
  };

  handleCancelBooking = (bookingId) => {
    // Logic to cancel booking
    alert(`Canceling booking with ID: ${bookingId}`);
  };

  handleRateExperience = (bookingId) => {
    // Logic to rate the travel experience
    alert(`Rating experience for booking with ID: ${bookingId}`);
  };

  render() {
    const { bookings } = this.state;

    return (
      <div>
        <h1>My Bookings</h1>
        {bookings.length > 0 ? (
          <ul>
            {bookings.map((booking) => (
              <li key={booking.id}>
                <div>
                  <img src={bookingImage} alt="Booking" />
                </div>
                <div>
                  <p>Reference Number: {booking.referenceNumber}</p>
                  <p>Route: {booking.route}</p>
                  <p>Date: {booking.date}</p>
                  <p>Time: {booking.time}</p>
                  <p>Status: {booking.status}</p>
                  <div className="booking-actions">
                    <button onClick={() => this.handleModifyBooking(booking.id)}>
                      <FaEdit />
                      Modify
                    </button>
                    <button onClick={() => this.handleCancelBooking(booking.id)}>
                      <FaTrash />
                      Cancel
                    </button>
                  </div>
                  {booking.status === 'Confirmed' && (
                    <div className="rating-section">
                      <p>Rate Your Experience:</p>
                      <div className="rating-stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar key={star} onClick={() => this.handleRateExperience(booking.id)} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    );
  }
}

export default MyBookingsPage;
