import React from 'react';
import { FaMapMarkerAlt, FaClock, FaExclamationTriangle } from 'react-icons/fa';
import busIcon from '../../../Images/map.webp';
import './test7.css';

class LiveTrackingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busLocation: {
        latitude: 0,
        longitude: 0,
      },
      estimatedArrivalTime: '10:30 AM',
      isDelayed: false,
    };
  }

  componentDidMount() {
    // Simulate updating the bus location and arrival time
    this.updateBusLocation();
    this.updateEstimatedArrivalTime();
  }

  updateBusLocation = () => {
    // Simulate updating the bus location from a server or API
    // You can use a library like geolocation to get the current location
    const newLocation = {
      latitude: 33.888,
      longitude: 35.495,
    };
    this.setState({ busLocation: newLocation });

    // Schedule the next update
    setTimeout(this.updateBusLocation, 5000); // Update every 5 seconds
  };

  updateEstimatedArrivalTime = () => {
    // Simulate updating the estimated arrival time from a server or API
    const newEstimatedTime = '11:00 AM';
    const isDelayed = Math.random() < 0.2; // 20% chance of being delayed
    this.setState({ estimatedArrivalTime: newEstimatedTime, isDelayed });

    // Schedule the next update
    setTimeout(this.updateEstimatedArrivalTime, 60000); // Update every 1 minute
  };

  refreshLiveTracking = () => {
    // Perform logic to refresh live tracking information
    // For example, fetch updated bus location and estimated arrival time
    // Update the state accordingly
  };

  render() {
    const { busLocation, estimatedArrivalTime, isDelayed } = this.state;

    return (
      <div className="live-tracking-container">
        <h1>Live Tracking</h1>
        <div className="map-container">
          {/* Display your map component here */}
          <img src={busIcon} alt="Bus Icon" className="bus-icon" />
          <div className="bus-marker" style={{ left: `${busLocation.longitude}%`, top: `${busLocation.latitude}%` }}></div>
        </div>
        <div className="details-container">
          <div className="arrival-time">
            <FaClock className="icon" />
            <span>Estimated Arrival Time:</span>
            <span>{estimatedArrivalTime}</span>
          </div>
          {isDelayed && (
            <div className="delay-notification">
              <FaExclamationTriangle className="icon" />
              <span>Delayed! Please expect delays in the schedule.</span>
            </div>
          )}
        </div>
        <div className="actions-container">
          <button onClick={this.refreshLiveTracking}>Refresh</button>
        </div>
      </div>
    );
  }
}

export default LiveTrackingPage;
