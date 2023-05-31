// import React from 'react';
// import { FaCheck, FaTimes, FaBus } from 'react-icons/fa';

// class TransportationApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       departed: false,
//       timeGo: '',
//       timeArrived: '',
//       numberOfPlaces: 0,
//       isBookingPending: false,
//       isLive: false,
//     };
//   }

//   handleDepartedToggle = () => {
//     this.setState(prevState => ({ departed: !prevState.departed }));
//   };

//   handleTimeGoChange = e => {
//     this.setState({ timeGo: e.target.value });
//   };

//   handleTimeArrivedChange = e => {
//     this.setState({ timeArrived: e.target.value });
//   };

//   handleNumberOfPlacesChange = e => {
//     this.setState({ numberOfPlaces: e.target.value });
//   };

//   handleBookingPendingToggle = () => {
//     this.setState(prevState => ({ isBookingPending: !prevState.isBookingPending }));
//   };

//   handleGoLiveToggle = () => {
//     this.setState(prevState => ({ isLive: !prevState.isLive }));
//   };

//   handleBookNow = () => {
//     // Perform booking logic here
//     alert('Booking now...');
//   };

//   render() {
//     const {
//       departed,
//       timeGo,
//       timeArrived,
//       numberOfPlaces,
//       isBookingPending,
//       isLive,
//     } = this.state;

//     return (
//       <div>
//         <h1>Transportation App</h1>
//         <div>
//           <label>
//             Departed Status:
//             <input
//               type="checkbox"
//               checked={departed}
//               onChange={this.handleDepartedToggle}
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Time Go:
//             <input
//               type="text"
//               value={timeGo}
//               onChange={this.handleTimeGoChange}
//               className="special-input"
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Time Arrived:
//             <input
//               type="text"
//               value={timeArrived}
//               onChange={this.handleTimeArrivedChange}
//               className="special-input"
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Number of Places Available:
//             <input
//               type="number"
//               value={numberOfPlaces}
//               onChange={this.handleNumberOfPlacesChange}
//               className="special-input"
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Booking Pending:
//             <input
//               type="checkbox"
//               checked={isBookingPending}
//               onChange={this.handleBookingPendingToggle}
//               className="special-input"
//             />
//             {isBookingPending ? <FaCheck /> : <FaTimes />}
//           </label>
//         </div>
//         <div>
//           <label>
//             Go Live:
//             <input
//               type="checkbox"
//               checked={isLive}
//               onChange={this.handleGoLiveToggle}
//               className="special-input"
//             />
//           </label>
//         </div>
//         <button onClick={this.handleBookNow} className="special-button">
//           {isBookingPending ? 'Booking Pending' : 'Book Now'}
//           <FaBus />
//         </button>
//         {isLive && <p>Transportation is live!</p>}
//       </div>
//     );
//   }
// }

// export default TransportationApp;
import React from 'react';
import { FaCheck, FaTimes, FaBus } from 'react-icons/fa';
import './test2.css';

class TransportationApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departed: false,
      timeGo: '10:00 AM',
      timeArrived: '11:30 AM',
      numberOfPlaces: 20,
      isBookingPending: false,
      isLive: false,
    };
  }

  handleBookingPendingToggle = () => {
    this.setState((prevState) => ({
      isBookingPending: !prevState.isBookingPending,
    }));
  };

  handleGoLiveToggle = () => {
    this.setState((prevState) => ({
      isLive: !prevState.isLive,
    }));
  };

  handleBookNow = () => {
    // Perform booking logic here
    alert('Booking now...');
  };

  render() {
    const {
      departed,
      timeGo,
      timeArrived,
      numberOfPlaces,
      isBookingPending,
      isLive,
    } = this.state;

    return (
      <div className="container">
        <h1>Transportation App</h1>
        <div className="label">
          <label>
            Departed Status:
            <input
              type="checkbox"
              checked={departed}
              disabled
            />
          </label>
        </div>
        <div className="label">
          <label>
            Time Go:
            <input
              type="text"
              value={timeGo}
              readOnly
            />
          </label>
        </div>
        <div className="label">
          <label>
            Time Arrived:
            <input
              type="text"
              value={timeArrived}
              readOnly
            />
          </label>
        </div>
        <div className="label">
          <label>
            Number of Places Available:
            <input
              type="number"
              value={numberOfPlaces}
              readOnly
            />
          </label>
        </div>
        <div className="label">
          <label>
            Booking Pending:
            <input
              type="checkbox"
              checked={isBookingPending}
              disabled
            />
            {isBookingPending ? <FaCheck className="icon" /> : <FaTimes className="icon" />}
          </label>
        </div>
        <div className="label">
          <label>
            Go Live:
            <input
              type="checkbox"
              checked={isLive}
              disabled
            />
          </label>
        </div>
        <div className="buttons">
          <button onClick={this.handleBookNow} disabled={!isBookingPending || isLive} className="button">
            {isBookingPending ? 'Book Now' : 'Booking Pending'}
            <FaBus className="icon" />
          </button>
          {isLive && <p className="live-message">Transportation is live!</p>}
        </div>
      </div>
    );
  }
}

export default TransportationApp;

