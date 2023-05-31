import { Link, useLocation } from "react-router-dom";
import "./index.css";
const active = "#FCDA23";
const inactive = "#f7f7f7";
const bg = "#204e66";
function BottomNav() {
  const location = useLocation();
  return (
    <div className="btmNav">
      <Link to="/app/passenger/">
        <HomeLogo location={location} />
      </Link>
      <Link to="/app/passenger/live">
        <LiveLogo location={location} />
      </Link>
      <Link to="/app/passenger/schedule">
        <ScheduleLogo location={location} />
      </Link>{" "}
    </div>
  );
}
function HomeLogo({ location }) {
  if (location.pathname === "/app/passenger/") {
    return (
      <svg
        width="34"
        height="39"
        viewBox="0 0 34 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33 28.54V18.8477C33 15.7443 33 14.1925 32.3727 12.8286C31.7453 11.4646 30.5672 10.4548 28.2109 8.43505L25.9251 6.47587L25.9251 6.47586C21.6661 2.82529 19.5366 1 17 1C14.4634 1 12.3339 2.82529 8.07486 6.47587L5.78915 8.43505C3.43284 10.4547 2.25468 11.4646 1.62734 12.8286C1 14.1925 1 15.7443 1 18.8477V28.54C1 32.85 1 35.005 2.33894 36.344C3.67788 37.6829 5.83287 37.6829 10.1429 37.6829H11.2188V24.5H23V37.6829H23.8571C28.1671 37.6829 30.3221 37.6829 31.6611 36.344C33 35.005 33 32.85 33 28.54Z"
          fill={active}
          stroke={active}
          strokeWidth="2"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="34"
        height="39"
        viewBox="0 0 34 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33 28.54V18.8477C33 15.7443 33 14.1925 32.3727 12.8286C31.7453 11.4646 30.5672 10.4548 28.2109 8.43505L25.9251 6.47587L25.9251 6.47586C21.6661 2.82529 19.5366 1 17 1C14.4634 1 12.3339 2.82529 8.07486 6.47587L5.78915 8.43505C3.43284 10.4547 2.25468 11.4646 1.62734 12.8286C1 14.1925 1 15.7443 1 18.8477V28.54C1 32.85 1 35.005 2.33894 36.344C3.67788 37.6829 5.83287 37.6829 10.1429 37.6829H11.2188V24.5H23V37.6829H23.8571C28.1671 37.6829 30.3221 37.6829 31.6611 36.344C33 35.005 33 32.85 33 28.54Z"
          fill={inactive}
          stroke={inactive}
          strokeWidth="2"
        />
      </svg>
    );
  }
}
function ScheduleLogo({ location }) {
  if (location.pathname === "/app/passenger/schedule") {
    return (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="7.33594"
          width="32"
          height="26.6667"
          rx="2"
          stroke={active}
          strokeWidth="3"
        />
        <path
          d="M2 11.3359C2 9.45032 2 8.50751 2.58579 7.92172C3.17157 7.33594 4.11438 7.33594 6 7.33594H30C31.8856 7.33594 32.8284 7.33594 33.4142 7.92172C34 8.50751 34 9.45032 34 11.3359V14.447H2V11.3359Z"
          fill={active}
          stroke={active}
          strokeWidth="3"
        />
        <path
          d="M9.10938 2L9.10937 7.33333"
          stroke={active}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M26.8906 2L26.8906 7.33333"
          stroke={active}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="7.33594"
          width="32"
          height="26.6667"
          rx="2"
          stroke={inactive}
          strokeWidth="3"
        />
        <path
          d="M2 11.3359C2 9.45032 2 8.50751 2.58579 7.92172C3.17157 7.33594 4.11438 7.33594 6 7.33594H30C31.8856 7.33594 32.8284 7.33594 33.4142 7.92172C34 8.50751 34 9.45032 34 11.3359V14.447H2V11.3359Z"
          fill={inactive}
          stroke={inactive}
          strokeWidth="3"
        />
        <path
          d="M9.10938 2L9.10937 7.33333"
          stroke={inactive}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M26.8906 2L26.8906 7.33333"
          stroke={inactive}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
}
function LiveLogo({ location }) {
  if (
    location.pathname === "/app/passenger/live" ||
    location.pathname === "/app/passenger/live/trip"
  ) {
    return (
      <svg
        width="40"
        height="50"
        viewBox="0 0 35 43"
        fill={active}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.22528 37.0751H1.86719V13.0911C1.87119 12.0326 2.17912 11.0191 2.72407 10.2706C3.26902 9.52216 4.00699 9.09925 4.77766 9.09375H26.111C26.76 9.09551 27.3899 9.39512 27.9007 9.94495C28.4114 10.4948 28.7738 11.2633 28.93 12.1284L30.911 23.0949L33.8672 25.5017V37.0751H29.5091"
          stroke={bg}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M23.6754 37.0781H12.0625"
          stroke={bg}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M26.5751 41.0919C28.1785 41.0919 29.4783 39.2927 29.4783 37.0733C29.4783 34.8539 28.1785 33.0547 26.5751 33.0547C24.9717 33.0547 23.6719 34.8539 23.6719 37.0733C23.6719 39.2927 24.9717 41.0919 26.5751 41.0919Z"
          stroke={bg}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M9.16104 41.0919C10.7644 41.0919 12.0643 39.2927 12.0643 37.0733C12.0643 34.8539 10.7644 33.0547 9.16104 33.0547C7.55763 33.0547 6.25781 34.8539 6.25781 37.0733C6.25781 39.2927 7.55763 41.0919 9.16104 41.0919Z"
          stroke={bg}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M7.25781 23.0859H31.2578"
          stroke={bg}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M23.6719 14.1953V23.1953"
          stroke={bg}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M16.4453 14.1953V23.1953"
          stroke={bg}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M8.09375 14.1953V23.1953"
          stroke={bg}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M30.8984 31.125H33.8662"
          stroke={bg}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M25.9783 5.3182C28.7983 5.49028 31.3417 6.58922 31.8906 8.98438"
          stroke={bg}
        />
        <path
          d="M26.6672 2.93982C29.6168 2.88039 32.6408 4.1376 34.125 7.40625"
          stroke={bg}
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="35"
        height="43"
        viewBox="0 0 35 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.22528 37.0751H1.86719V13.0911C1.87119 12.0326 2.17912 11.0191 2.72407 10.2706C3.26902 9.52216 4.00699 9.09925 4.77766 9.09375H26.111C26.76 9.09551 27.3899 9.39512 27.9007 9.94495C28.4114 10.4948 28.7738 11.2633 28.93 12.1284L30.911 23.0949L33.8672 25.5017V37.0751H29.5091"
          stroke={inactive}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M23.6754 37.0781H12.0625"
          stroke={inactive}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M26.5751 41.0919C28.1785 41.0919 29.4783 39.2927 29.4783 37.0733C29.4783 34.8539 28.1785 33.0547 26.5751 33.0547C24.9717 33.0547 23.6719 34.8539 23.6719 37.0733C23.6719 39.2927 24.9717 41.0919 26.5751 41.0919Z"
          stroke={inactive}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M9.16104 41.0919C10.7644 41.0919 12.0643 39.2927 12.0643 37.0733C12.0643 34.8539 10.7644 33.0547 9.16104 33.0547C7.55763 33.0547 6.25781 34.8539 6.25781 37.0733C6.25781 39.2927 7.55763 41.0919 9.16104 41.0919Z"
          stroke={inactive}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M7.25781 23.0859H31.2578"
          stroke={inactive}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M23.6719 14.1953V23.1953"
          stroke={inactive}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M16.4453 14.1953V23.1953"
          stroke={inactive}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M8.09375 14.1953V23.1953"
          stroke={inactive}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M30.8984 31.125H33.8662"
          stroke={inactive}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M25.9783 5.3182C28.7983 5.49028 31.3417 6.58922 31.8906 8.98438"
          stroke={inactive}
        />
        <path
          d="M26.6672 2.93982C29.6168 2.88039 32.6408 4.1376 34.125 7.40625"
          stroke={inactive}
        />
      </svg>
    );
  }
}
export default BottomNav;
