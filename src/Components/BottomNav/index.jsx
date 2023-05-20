import { Link, useLocation } from "react-router-dom";
import "./index.css"
const active="#FCDA23"
const inactive="#204E66"
function BottomNav() {
  const location = useLocation();
  return (
    <div className="btmNav">
      <Link to="/app/passenger/"><HomeLogo location={location}/></Link>
      <Link to="/app/passenger/live">
        <LiveLogo location={location} />
      </Link>
      <Link to="/app/passenger/schedule">
        <ScheduleLogo location={location}/>
      </Link>{" "}
    </div>
  );
}
function HomeLogo({ location }) {
  if (location.pathname === "/app/passenger/") {
    return (
      <svg
        width="34"
        height="40"
        viewBox="0 0 34 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 19.504C1 16.4005 1 14.8488 1.62734 13.4848C2.25468 12.1208 3.43284 11.111 5.78915 9.0913L8.07486 7.13212C12.3339 3.48154 14.4634 1.65625 17 1.65625C19.5366 1.65625 21.6661 3.48154 25.9251 7.13212L28.2109 9.0913C30.5672 11.111 31.7453 12.1208 32.3727 13.4848C33 14.8488 33 16.4005 33 19.504V29.1963C33 33.5063 33 35.6613 31.6611 37.0002C30.3221 38.3391 28.1671 38.3391 23.8571 38.3391H10.1429C5.83287 38.3391 3.67788 38.3391 2.33894 37.0002C1 35.6613 1 33.5063 1 29.1963V19.504Z"
          stroke={active}
          strokeWidth="2"
        />
        <path
          d="M22.7176 38.3393V25.625C22.7176 25.0727 22.2699 24.625 21.7176 24.625H12.2891C11.7368 24.625 11.2891 25.0727 11.2891 25.625V38.3393"
          stroke={active}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="34"
        height="40"
        viewBox="0 0 34 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 19.504C1 16.4005 1 14.8488 1.62734 13.4848C2.25468 12.1208 3.43284 11.111 5.78915 9.0913L8.07486 7.13212C12.3339 3.48154 14.4634 1.65625 17 1.65625C19.5366 1.65625 21.6661 3.48154 25.9251 7.13212L28.2109 9.0913C30.5672 11.111 31.7453 12.1208 32.3727 13.4848C33 14.8488 33 16.4005 33 19.504V29.1963C33 33.5063 33 35.6613 31.6611 37.0002C30.3221 38.3391 28.1671 38.3391 23.8571 38.3391H10.1429C5.83287 38.3391 3.67788 38.3391 2.33894 37.0002C1 35.6613 1 33.5063 1 29.1963V19.504Z"
          stroke={inactive}
          strokeWidth="2"
        />
        <path
          d="M22.7176 38.3393V25.625C22.7176 25.0727 22.2699 24.625 21.7176 24.625H12.2891C11.7368 24.625 11.2891 25.0727 11.2891 25.625V38.3393"
          stroke={inactive}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
function ScheduleLogo({location}){
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
function LiveLogo({location}){
    if(location.pathname==="/app/passenger/live"||location.pathname==="/app/passenger/live/trip"){
        return(
            <svg
          width="35"
          height="43"
          viewBox="0 0 35 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.22528 37.0751H1.86719V13.0911C1.87119 12.0326 2.17912 11.0191 2.72407 10.2706C3.26902 9.52216 4.00699 9.09925 4.77766 9.09375H26.111C26.76 9.09551 27.3899 9.39512 27.9007 9.94495C28.4114 10.4948 28.7738 11.2633 28.93 12.1284L30.911 23.0949L33.8672 25.5017V37.0751H29.5091"
            stroke={active}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M23.6754 37.0781H12.0625"
            stroke={active}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M26.5751 41.0919C28.1785 41.0919 29.4783 39.2927 29.4783 37.0733C29.4783 34.8539 28.1785 33.0547 26.5751 33.0547C24.9717 33.0547 23.6719 34.8539 23.6719 37.0733C23.6719 39.2927 24.9717 41.0919 26.5751 41.0919Z"
            stroke={active}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M9.16104 41.0919C10.7644 41.0919 12.0643 39.2927 12.0643 37.0733C12.0643 34.8539 10.7644 33.0547 9.16104 33.0547C7.55763 33.0547 6.25781 34.8539 6.25781 37.0733C6.25781 39.2927 7.55763 41.0919 9.16104 41.0919Z"
            stroke={active}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M7.25781 23.0859H31.2578"
            stroke={active}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M23.6719 14.1953V23.1953"
            stroke={active}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M16.4453 14.1953V23.1953"
            stroke={active}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M8.09375 14.1953V23.1953"
            stroke={active}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M30.8984 31.125H33.8662"
            stroke={active}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M25.9783 5.3182C28.7983 5.49028 31.3417 6.58922 31.8906 8.98438"
            stroke={active}
          />
          <path
            d="M26.6672 2.93982C29.6168 2.88039 32.6408 4.1376 34.125 7.40625"
            stroke={active}
          />
        </svg>
        )
    }else{return(<svg
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
      </svg>)}
}
export default BottomNav;
