import { Link } from "react-router-dom";
import { Button, Input } from "../Components/Styled";
import logo from "../Images/logo_lg.svg";
import tickety from "../Images/tickety.svg";
import ticketg from "../Images/ticketg.svg";
import contact from "../Images/contact.svg";
import slogan from "../Images/Group 13 (1).png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import logowhite from "../Images/Group 17.svg"
import Swal from "sweetalert2";
import herosm from "../Images/hero-sm1.png";
import GpxMap from "../Components/HomeMap";
import route from "../Images/route.png"
function Home() {
  const form = useRef();
  const fn = useRef();
  const em = useRef();
  const msg = useRef();
  const sendMessage = (e) => {
    e.preventDefault();
    // console.log(form.current)
    let ff = document.getElementById("contact-form");
    let bb = fn.current.value.trim();
    let cc = em.current.value.trim();
    let dd = msg.current.value.trim();
    if (bb === "" || cc === "" || dd === "") {
      Swal.fire("Please fill all the field!");
    } else {
      console.log(document.getElementById("contact-form"));
      emailjs.sendForm(
        "service_to5zjam",
        "template_hxz6t3k",
        ff,
        "mjkdGNz20vtFFz_M4"
      );
      Swal.fire("message sent!");
    }
  };
  return (
    <div className="home">
      <div className="top-nav">
        <img src={logo} alt="tripoli linked logo" height="55" />
        <Button $yellow>
          <Link to="/app/login">Join Now</Link>
        </Button>
      </div>
      <div className="hero">
        <img
          src={slogan}
          id="herolg"
          width="400px"
          height="800"
          alt="Transforming public transportation"
        />
        <img
          src={herosm}
          id="herosm"
          width="400px"
          alt="Transforming public transportation"
        />
      </div>
      <div>
      <section className="routes-sec  w-100 ">
  <p>Public buses that connects Tripoli with its surrounding areas, providing convenient transportation options for residents and visitors.</p>
  <img src={route} width="700" height="900" id="routepic" alt="tripoli to aaba route"/>   </section>
        <section className=" mt-12 benefit-c">
        <svg className="features-h" viewBox="0 0 371 126" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M115.67 7.58509C116.903 16.3191 115.252 15.6011 135.014 15.9991C151.549 16.3321 153.093 16.5271 158.233 18.9291C165.213 22.1891 169.864 26.8381 173.144 33.8291L175.727 39.3351L176.039 72.0851L176.351 104.835H181.589C184.47 104.835 187.367 104.295 188.027 103.635C189.565 102.097 189.688 49.3181 188.175 39.8351C186.034 26.4091 178.148 14.7371 167.318 8.96408C158.486 4.25708 150.343 2.87308 131.363 2.85208L115 2.83508L115.67 7.58509ZM119.553 27.9411C120.476 35.7311 120.677 35.8351 134.899 35.8351C144.224 35.8351 148.083 36.2261 150.355 37.4011C155.847 40.2411 156.227 42.6981 156.227 75.3511V104.93L162.477 104.633L168.727 104.335V73.3351C168.727 37.5921 168.4 35.7981 160.643 28.9701C154.811 23.8361 150.324 22.8351 133.145 22.8351H118.948L119.553 27.9411Z" fill="#204E66"/>
<path fillRule="evenodd" clipRule="evenodd" d="M189.716 1.429C186.691 2.123 182.943 3.213 181.386 3.851L178.557 5.011L181.734 9.023C185.961 14.36 187.249 14.889 193.716 13.947C196.741 13.507 205.168 13.113 212.443 13.073C227.435 12.99 227.835 12.779 229.208 4.25L229.892 0L212.554 0.0839996C202.489 0.132 192.909 0.697 189.716 1.429ZM194.051 20.717L190.886 21.114L192.893 27.057L194.9 33L208.058 32.985C215.295 32.976 221.811 32.592 222.538 32.131C223.266 31.67 224.267 29.539 224.764 27.396C226.585 19.547 227.384 19.981 211.466 20.16C203.628 20.248 195.792 20.499 194.051 20.717Z" fill="#FCDE39"/>
<path d="M20.79 105H11.34C9.3 105 7.95 104.67 7.29 104.01C6.69 103.35 6.39 102 6.39 99.96V45.15C6.39 43.05 6.72 41.67 7.38 41.01C8.04 40.29 9.36 39.93 11.34 39.93H20.79V105ZM43.2 65.04V70.44C43.2 72.6 42.99 73.98 42.57 74.58C42.15 75.12 40.95 75.39 38.97 75.39H24.39V65.04H43.2ZM46.8 39.93V47.67C46.8 49.71 46.47 51.06 45.81 51.72C45.15 52.32 43.77 52.62 41.67 52.62H24.39V39.93H46.8ZM67.4072 105H67.2272C61.2872 105 57.6272 103.98 56.2472 101.94C55.5872 100.98 55.0472 100.05 54.6272 99.15C54.2672 98.25 54.0272 96.84 53.9072 94.92C53.6072 91.44 53.4572 87.57 53.4572 83.31C53.4572 79.05 53.4872 75.99 53.5472 74.13C53.6072 72.21 53.7872 70.29 54.0872 68.37C54.4472 66.39 54.8972 64.98 55.4372 64.14C55.9772 63.24 56.7872 62.43 57.8672 61.71C58.9472 60.99 60.2072 60.54 61.6472 60.36C63.0872 60.12 64.9472 60 67.2272 60H67.4072V105ZM91.3472 90.78V95.37C91.3472 101.79 88.0772 105 81.5372 105H70.1972V98.25H75.0572C76.3172 98.25 77.0972 98.07 77.3972 97.71C77.6972 97.29 77.8472 96.57 77.8472 95.55V92.67C77.8472 91.77 77.9372 91.26 78.1172 91.14C78.3572 91.02 78.5072 90.96 78.5672 90.96C78.6272 90.9 78.7772 90.87 79.0172 90.87C79.3172 90.81 79.5272 90.78 79.6472 90.78C83.5472 90.78 87.4472 90.78 91.3472 90.78ZM70.1972 60H80.6372C84.7772 60 87.5972 60.81 89.0972 62.43C90.5972 64.05 91.3472 66.45 91.3472 69.63V77.55C91.3472 82.95 88.4072 85.65 82.5272 85.65H69.2972V78.9H74.1572C75.5972 78.9 76.5572 78.72 77.0372 78.36C77.5772 78 77.8472 77.31 77.8472 76.29V69.45C77.8472 68.43 77.6972 67.74 77.3972 67.38C77.0972 66.96 76.3172 66.75 75.0572 66.75H70.1972V60ZM122.715 66.75H117.855C115.995 66.75 114.945 67.08 114.705 67.74C114.345 68.52 114.165 69.63 114.165 71.07V93.93C114.165 94.05 114.165 94.41 114.165 95.01C114.165 95.61 114.225 96.12 114.345 96.54C114.585 97.68 115.755 98.25 117.855 98.25H122.715V105H113.985C111.705 105 109.845 104.91 108.405 104.73C106.965 104.49 105.705 104.01 104.625 103.29C103.545 102.57 102.735 101.79 102.195 100.95C101.655 100.05 101.205 98.64 100.845 96.72C100.425 94.02 100.215 90.24 100.215 85.38C100.215 80.52 100.245 77.25 100.305 75.57C100.365 73.83 100.455 72 100.575 70.08C100.755 68.16 101.025 66.75 101.385 65.85C101.805 64.95 102.315 64.05 102.915 63.15C103.575 62.19 104.415 61.53 105.435 61.17C107.655 60.39 110.505 60 113.985 60H122.715V66.75ZM142.965 104.37C142.965 104.79 142.845 105 142.605 105H135.225C131.865 105 129.375 104.22 127.755 102.66C126.195 101.1 125.415 98.55 125.415 95.01V60H129.105C132.885 60 135.465 60.9 136.845 62.7C138.225 64.44 138.915 66.75 138.915 69.63V94.83C138.915 96.69 139.305 97.74 140.085 97.98C140.505 98.16 141.075 98.25 141.795 98.25H142.245C142.725 98.25 142.965 98.46 142.965 98.88V104.37Z" fill="#204E66"/>
<path d="M206.04 60H216.3C217.26 60 218.04 60.33 218.64 60.99C219.24 61.65 219.54 62.52 219.54 63.6V95.55C219.54 96.51 219.75 97.2 220.17 97.62C220.65 98.04 221.67 98.25 223.23 98.25H228.45V105H215.85C209.31 105 206.04 101.79 206.04 95.37V60ZM248.25 104.37C248.25 104.79 248.1 105 247.8 105H238.71C236.07 105 234.06 104.37 232.68 103.11C231.36 101.79 230.7 100.11 230.7 98.07V60H240.96C241.92 60 242.7 60.33 243.3 60.99C243.9 61.65 244.2 62.52 244.2 63.6V94.83C244.2 96.69 244.59 97.74 245.37 97.98C245.79 98.16 246.36 98.25 247.08 98.25H247.53C248.01 98.25 248.25 98.46 248.25 98.88V104.37ZM265.157 60H275.957C276.317 60 276.497 60.21 276.497 60.63V66.12C276.497 66.54 276.257 66.75 275.777 66.75H271.727C270.287 66.75 269.447 67.02 269.207 67.56C268.967 68.34 268.847 69.21 268.847 70.17V98.07C268.847 100.11 268.157 101.79 266.777 103.11C265.457 104.37 263.477 105 260.837 105H255.347V69.99C255.347 66.45 256.127 63.9 257.687 62.34C259.307 60.78 261.797 60 265.157 60ZM296.708 105H296.528C290.588 105 286.928 103.98 285.548 101.94C284.888 100.98 284.348 100.05 283.928 99.15C283.568 98.25 283.328 96.84 283.208 94.92C282.908 91.44 282.758 87.57 282.758 83.31C282.758 79.05 282.788 75.99 282.848 74.13C282.908 72.21 283.088 70.29 283.388 68.37C283.748 66.39 284.198 64.98 284.738 64.14C285.278 63.24 286.088 62.43 287.168 61.71C288.248 60.99 289.508 60.54 290.948 60.36C292.388 60.12 294.248 60 296.528 60H296.708V105ZM320.648 90.78V95.37C320.648 101.79 317.378 105 310.838 105H299.498V98.25H304.358C305.618 98.25 306.398 98.07 306.698 97.71C306.998 97.29 307.148 96.57 307.148 95.55V92.67C307.148 91.77 307.238 91.26 307.418 91.14C307.658 91.02 307.808 90.96 307.868 90.96C307.928 90.9 308.078 90.87 308.318 90.87C308.618 90.81 308.828 90.78 308.948 90.78C312.848 90.78 316.748 90.78 320.648 90.78ZM299.498 60H309.938C314.078 60 316.898 60.81 318.398 62.43C319.898 64.05 320.648 66.45 320.648 69.63V77.55C320.648 82.95 317.708 85.65 311.828 85.65H298.598V78.9H303.458C304.898 78.9 305.858 78.72 306.338 78.36C306.878 78 307.148 77.31 307.148 76.29V69.45C307.148 68.43 306.998 67.74 306.698 67.38C306.398 66.96 305.618 66.75 304.358 66.75H299.498V60ZM342.476 60V76.47C342.476 77.49 342.626 78.21 342.926 78.63C343.226 78.99 344.006 79.17 345.266 79.17H350.306V85.92H338.786C332.246 85.92 328.976 82.71 328.976 76.29V69.99C328.976 66.03 329.966 63.39 331.946 62.07C333.986 60.69 337.496 60 342.476 60ZM342.656 90.78V95.55C342.656 96.57 342.806 97.29 343.106 97.71C343.406 98.07 344.186 98.25 345.446 98.25H350.306V105H338.966C332.426 105 329.156 101.79 329.156 95.37V92.67C329.156 91.77 329.246 91.26 329.426 91.14C329.666 91.02 329.816 90.96 329.876 90.96C329.936 90.9 330.086 90.87 330.326 90.87C330.626 90.81 330.806 90.78 330.866 90.78C334.826 90.78 338.756 90.78 342.656 90.78ZM353.006 79.17H356.696C363.236 79.17 366.506 82.38 366.506 88.8V95.01C366.506 98.97 365.486 101.64 363.446 103.02C361.466 104.34 357.986 105 353.006 105V79.17ZM345.176 60H356.516C363.056 60 366.326 63.21 366.326 69.63V74.31C362.306 74.31 359.246 74.31 357.146 74.31C355.046 74.31 353.966 74.31 353.906 74.31C353.846 74.25 353.726 74.22 353.546 74.22C353.426 74.16 353.336 74.1 353.276 74.04C353.216 73.98 353.156 73.92 353.096 73.86C353.036 73.74 353.006 73.62 353.006 73.5C352.886 73.02 352.826 72.66 352.826 72.42V69.45C352.826 68.43 352.676 67.74 352.376 67.38C352.076 66.96 351.296 66.75 350.036 66.75H345.176V60Z" fill="#204E66"/>
</svg>



    <div className="benefits mt-8">
          <div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.61 122.88"
                    width="150"
                    height="150"
                  >
                    <path fill="#204E66" d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z" />
                  </svg>
                  <strong>Get Trips Updates </strong>
                </div>
              </div>
              <div className="front">
                <div className="front-content">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.61 122.88"
                    width="75"
                    height="75"
                  >
                    <path fill="#FCDA23" d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z" />
                  </svg>

                  <p>
                  Stay informed about prices, schedules, holidays, and the latest updates regarding your trip.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <svg
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 119.78"
                    width="150"
                    height="150"
                  >
                    <path fill="#204E66" d="M63,7.81A3.91,3.91,0,1,1,63,0,59.91,59.91,0,1,1,11.17,29.87L6.89,31.51A5.08,5.08,0,1,1,3.28,22L16.5,17a5.17,5.17,0,0,1,1.57-.32,5.05,5.05,0,0,1,5.65,3.53L27.87,33.7a5.07,5.07,0,1,1-9.7,2.94l-.66-2.15a52.08,52.08,0,0,0,82.3,62.22A52.08,52.08,0,0,0,63,7.81Zm-14.1,57c-3.3-3.55,1.76-8.85,5.43-5.5,1.3,1.18,3.18,2.91,4.48,4.08l12.69-15c3.51-3.62,9,1.7,5.58,5.35L61.82,71.41a3.9,3.9,0,0,1-5.4.23c-2.14-2-5.28-5-7.53-6.86ZM40.32,33.61a3.37,3.37,0,0,1,5.85-3.36l1.67,2.9A3.37,3.37,0,0,1,42,36.51l-1.68-2.9Zm-10,13.53a3.38,3.38,0,1,1,3.39-5.85L36.64,43a3.38,3.38,0,0,1-3.39,5.85l-2.9-1.68Zm4.9,34.4a3.37,3.37,0,0,1-3.36-5.84L34.8,74a3.37,3.37,0,0,1,3.36,5.85l-2.91,1.67ZM27.43,63.26a3.37,3.37,0,0,1,0-6.74h3.36a3.37,3.37,0,0,1,0,6.74Zm37.78,31a3.38,3.38,0,0,1-6.75,0V90.94a3.38,3.38,0,0,1,6.75,0v3.35Zm-6.75-68.8a3.38,3.38,0,1,1,6.75,0v3.35a3.38,3.38,0,0,1-6.75,0V25.49ZM47.56,91.37A3.38,3.38,0,1,1,41.71,88l1.68-2.9a3.37,3.37,0,1,1,5.84,3.38l-1.67,2.9ZM83.49,88a3.37,3.37,0,1,1-5.85,3.36L76,88.46a3.37,3.37,0,0,1,5.85-3.36L83.49,88Zm9.83-12.3a3.37,3.37,0,0,1-3.38,5.84L87,79.87A3.38,3.38,0,0,1,90.42,74l2.9,1.68ZM91.48,41.29a3.37,3.37,0,0,1,3.36,5.85l-2.9,1.68A3.37,3.37,0,0,1,88.58,43l2.9-1.68ZM79.7,31.51a3.38,3.38,0,0,1,5.85,3.39l-1.68,2.9A3.38,3.38,0,1,1,78,34.41l1.67-2.9Zm18.85,25a3.37,3.37,0,1,1,0,6.74H95a3.37,3.37,0,0,1,0-6.74Z" />
                  </svg>
                  <strong>Real Time Data</strong>
                </div>
              </div>
              <div className="front">
                <div className="front-content">
                  <svg
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 119.78"
                    width="75"
                    height="75"
                  >
                    <path fill="#FCDA23" d="M63,7.81A3.91,3.91,0,1,1,63,0,59.91,59.91,0,1,1,11.17,29.87L6.89,31.51A5.08,5.08,0,1,1,3.28,22L16.5,17a5.17,5.17,0,0,1,1.57-.32,5.05,5.05,0,0,1,5.65,3.53L27.87,33.7a5.07,5.07,0,1,1-9.7,2.94l-.66-2.15a52.08,52.08,0,0,0,82.3,62.22A52.08,52.08,0,0,0,63,7.81Zm-14.1,57c-3.3-3.55,1.76-8.85,5.43-5.5,1.3,1.18,3.18,2.91,4.48,4.08l12.69-15c3.51-3.62,9,1.7,5.58,5.35L61.82,71.41a3.9,3.9,0,0,1-5.4.23c-2.14-2-5.28-5-7.53-6.86ZM40.32,33.61a3.37,3.37,0,0,1,5.85-3.36l1.67,2.9A3.37,3.37,0,0,1,42,36.51l-1.68-2.9Zm-10,13.53a3.38,3.38,0,1,1,3.39-5.85L36.64,43a3.38,3.38,0,0,1-3.39,5.85l-2.9-1.68Zm4.9,34.4a3.37,3.37,0,0,1-3.36-5.84L34.8,74a3.37,3.37,0,0,1,3.36,5.85l-2.91,1.67ZM27.43,63.26a3.37,3.37,0,0,1,0-6.74h3.36a3.37,3.37,0,0,1,0,6.74Zm37.78,31a3.38,3.38,0,0,1-6.75,0V90.94a3.38,3.38,0,0,1,6.75,0v3.35Zm-6.75-68.8a3.38,3.38,0,1,1,6.75,0v3.35a3.38,3.38,0,0,1-6.75,0V25.49ZM47.56,91.37A3.38,3.38,0,1,1,41.71,88l1.68-2.9a3.37,3.37,0,1,1,5.84,3.38l-1.67,2.9ZM83.49,88a3.37,3.37,0,1,1-5.85,3.36L76,88.46a3.37,3.37,0,0,1,5.85-3.36L83.49,88Zm9.83-12.3a3.37,3.37,0,0,1-3.38,5.84L87,79.87A3.38,3.38,0,0,1,90.42,74l2.9,1.68ZM91.48,41.29a3.37,3.37,0,0,1,3.36,5.85l-2.9,1.68A3.37,3.37,0,0,1,88.58,43l2.9-1.68ZM79.7,31.51a3.38,3.38,0,0,1,5.85,3.39l-1.68,2.9A3.38,3.38,0,1,1,78,34.41l1.67-2.9Zm18.85,25a3.37,3.37,0,1,1,0,6.74H95a3.37,3.37,0,0,1,0-6.74Z" />
                  </svg>

                  <p>
                  Track bus locations in real-time and stay informed with up-to-date data on bus status, available seats, and much more for an enhanced travel experience.
                   </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <img src={ticketg} width="150" height="150" color="#204E66"/>
                  <strong>Book One Day Ahead </strong>
                </div>
              </div>
              <div className="front">
                <div className="front-content">
                  <img src={tickety} width="75" height="75" color="#FCDA23" />

                  <p>
Secure your seat by reserving it up to 24 hours in advance of your planned trip for a hassle-free journey.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
        <section id="contact" className="mb-8">
          <div className="container">
            <div className="inner-con">
              <img src={contact} alt="get in touch" width="400px" />
              <form ref={form} id="contact-form">
                <label htmlFor="fullname">Full Name</label>
                <Input type="text" required name="from_name" ref={fn} />
                <label htmlFor="fullname">Email</label>
                <Input type="email" required name="email" ref={em} />
                <label htmlFor="fullname">Message</label>
                <Input type="text" required name="message" ref={msg} />
                <Button onClick={sendMessage}>Send Message</Button>
              </form>
            </div>
          </div>
        </section>
        <footer>
          <img src={logowhite} alt="tripoli linked"/>    
          <div className="flex gap-4 self-center">      
          <Link style={{color:"#f7f7f7", textDecoration:"underline"}}>Terms and Confitions</Link>
          <Link style={{color:"#f7f7f7",  textDecoration:"underline"}}>Privacy Policy</Link>
          </div>

          
            <div className="find-us">
            <h3>Find Us here</h3>
            <div>
            <Phone />
              <LinkedIn />
              <Email />
            </div>
        
        </div>
        </footer>
      </div>
    </div>
  );
}
function Email(){
  return(<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M0.781049 0.781049C0 1.5621 0 2.81917 0 5.33333V7.11111C0 9.62524 0 10.8823 0.781049 11.6634C1.5621 12.4444 2.81917 12.4444 5.33333 12.4444H10.6667C13.1808 12.4444 14.4379 12.4444 15.2189 11.6634C16 10.8823 16 9.62524 16 7.11111V5.33333C16 2.81917 16 1.5621 15.2189 0.781049C14.4379 2.11928e-07 13.1808 0 10.6667 0H5.33333C2.81917 0 1.5621 2.11928e-07 0.781049 0.781049ZM3.15973 2.81596C2.75126 2.54364 2.19938 2.65402 1.92707 3.06249C1.65476 3.47096 1.76513 4.02284 2.1736 4.29516L7.01387 7.52196C7.61102 7.92009 8.38898 7.92009 8.98613 7.52196L13.8264 4.29516C14.2348 4.02284 14.3452 3.47096 14.073 3.06249C13.8006 2.65402 13.2487 2.54364 12.8403 2.81596L8 6.04284L3.15973 2.81596Z" fill="#f7f7f7"/>
  </svg>
  )
}
const Phone=()=>{
  return(<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3506 9.45521L14.3588 11.5327C14.7164 11.9026 14.7164 12.4894 14.3588 12.8593C12.3279 14.9603 9.04067 15.1949 6.73191 13.4036L6.60571 13.3057C4.91225 11.9918 3.41401 10.444 2.15591 8.70869L1.94955 8.42406C0.243472 6.07085 0.472382 2.83256 2.49253 0.742753C2.88507 0.336678 3.53598 0.336678 3.92852 0.742753L5.90709 2.78955C6.28177 3.17715 6.28177 3.79199 5.90709 4.17959L4.46711 5.66923C4.21811 5.92681 4.15624 6.31237 4.31215 6.63493L4.35497 6.72353C5.25198 8.57941 6.72649 10.0945 8.55736 11.0415C8.88254 11.2097 9.27954 11.1446 9.53399 10.8814L10.9126 9.45521C11.3057 9.04858 11.9575 9.04858 12.3506 9.45521Z" fill="#f7f7f7"/>
  </svg>
  )
}
const LinkedIn=()=>{
  return(<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#f7f7f7"/></svg>)
}
export default Home;
