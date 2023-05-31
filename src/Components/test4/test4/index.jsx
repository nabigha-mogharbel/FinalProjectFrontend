import React from 'react';
import { FaMapMarkerAlt, FaClock, FaDollarSign, FaFilter } from 'react-icons/fa';
import busImage from '../../../Images/map.webp';
import './test4.css';
class RoutesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    routes: [
        {
          id: 1,
          departure: 'Tripoli',
          arrival: 'Beirut',
          timings: ['10:00 AM', '12:00 PM', '02:00 PM'],
          frequency: 'Every 30 minutes',
          fare: 10,
          isDirect: true,
        },
        {
          id: 2,
          departure: 'Beirut',
          arrival: 'Sidon',
          timings: ['11:00 AM', '01:00 PM', '03:00 PM'],
          frequency: 'Every hour',
          fare: 8,
          isDirect: false,
        },
        // Add more routes here
      ],
      selectedRouteId: null,
    };
  }

  handleRouteSelection = (id) => {
    this.setState({ selectedRouteId: id });
  };

  render() {
    const { routes, selectedRouteId } = this.state;

    return (
      <div>
        <h1>Routes Page</h1>
        <div className="routes-container">
          {routes.map((route) => (
            <div
              key={route.id}
              className={`route-card ${route.id === selectedRouteId ? 'selected' : ''}`}
              onClick={() => this.handleRouteSelection(route.id)}
            >
              <div className="route-info">
                <div className="route-location">
                  <FaMapMarkerAlt className="icon" />
                  <span>{route.departure} to {route.arrival}</span>
                </div>
                <div className="route-timings">
                  <FaClock className="icon" />
                  {route.timings.map((timing) => (
                    <span key={timing}>{timing}</span>
                  ))}
                </div>
                <div className="route-frequency">
                  <span>{route.frequency}</span>
                </div>
                <div className="route-fare">
                  <FaDollarSign className="icon" />
                  <span>{route.fare}</span>
                </div>
              </div>
              <div className="route-image">
                <img src={busImage} alt="Bus" />
              </div>
              {route.isDirect && <div className="direct-route">Direct Route</div>}
            </div>
          ))}
        </div>
        <div className="filter-container">
          <FaFilter className="icon" />
          <span>Filter routes</span>
          {/* Add filter options or functionality */}
        </div>
        {selectedRouteId && (
          <div className="selected-route">
            <h2>Selected Route</h2>
            {/* Display additional details of the selected route */}
          </div>
        )}
      </div>
    );
  }
}

export default RoutesPage;
