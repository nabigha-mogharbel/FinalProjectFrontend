import { Link } from "react-router-dom";
import {Button, Input} from "../Components/Styled";
import logo from "../Images/logo_lg.svg"
import ticket from "../Images/ticket-icon.svg"
import contact from "../Images/contact.svg"
import slogan from "../Images/Group 13 (1).png"
import emailjs from '@emailjs/browser';
import {useRef} from "react"
import Swal from "sweetalert2";
import herosm from "../Images/hero-sm1.png"
function Home() {
  const form=useRef()
  const sendMessage=(e)=>{
    e.preventDefault()
    console.log(form.current)
    console.log(document.getElementById("contact-form"))
    emailjs.sendForm("service_14fxwz5","template_hxz6t3k", form, "xirLPuZW7bbhp375b")
  }
    return ( 
    <div className="home">
        <div className="top-nav">
            <img src={logo} alt="tripoli linked logo" height="55"/>
            <Button $yellow><Link to="/app/login">Join Now</Link></Button></div>
        <div className="hero" >
          {window.innerWidth>641 &&
        <img src={slogan} id="herolg" width="400px" alt="Transforming public transportation"/>}
        {window.innerWidth<641 &&<img src={herosm} id="herosm" width="400px" alt="Transforming public transportation"/>}
        </div>
        <div>
        <section className="benefits mt-12">

<div className="card">
  <div className="content">
    <div className="back">
      <div className="back-content">
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.61 122.88" width="150" height="150"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
        <strong>Get Trips Updates </strong>
      </div>
    </div>
    <div className="front">
      <div className="front-content">
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.61 122.88" width="75" height="75"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>

            <p >
            Know prices, schedule, holidays and more updates about your trip.
            </p>
      </div>
    </div>
  </div>
</div>

<div className="card">
  <div className="content">
    <div className="back">
      <div className="back-content">
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 119.78" width="150" height="150"><path d="M63,7.81A3.91,3.91,0,1,1,63,0,59.91,59.91,0,1,1,11.17,29.87L6.89,31.51A5.08,5.08,0,1,1,3.28,22L16.5,17a5.17,5.17,0,0,1,1.57-.32,5.05,5.05,0,0,1,5.65,3.53L27.87,33.7a5.07,5.07,0,1,1-9.7,2.94l-.66-2.15a52.08,52.08,0,0,0,82.3,62.22A52.08,52.08,0,0,0,63,7.81Zm-14.1,57c-3.3-3.55,1.76-8.85,5.43-5.5,1.3,1.18,3.18,2.91,4.48,4.08l12.69-15c3.51-3.62,9,1.7,5.58,5.35L61.82,71.41a3.9,3.9,0,0,1-5.4.23c-2.14-2-5.28-5-7.53-6.86ZM40.32,33.61a3.37,3.37,0,0,1,5.85-3.36l1.67,2.9A3.37,3.37,0,0,1,42,36.51l-1.68-2.9Zm-10,13.53a3.38,3.38,0,1,1,3.39-5.85L36.64,43a3.38,3.38,0,0,1-3.39,5.85l-2.9-1.68Zm4.9,34.4a3.37,3.37,0,0,1-3.36-5.84L34.8,74a3.37,3.37,0,0,1,3.36,5.85l-2.91,1.67ZM27.43,63.26a3.37,3.37,0,0,1,0-6.74h3.36a3.37,3.37,0,0,1,0,6.74Zm37.78,31a3.38,3.38,0,0,1-6.75,0V90.94a3.38,3.38,0,0,1,6.75,0v3.35Zm-6.75-68.8a3.38,3.38,0,1,1,6.75,0v3.35a3.38,3.38,0,0,1-6.75,0V25.49ZM47.56,91.37A3.38,3.38,0,1,1,41.71,88l1.68-2.9a3.37,3.37,0,1,1,5.84,3.38l-1.67,2.9ZM83.49,88a3.37,3.37,0,1,1-5.85,3.36L76,88.46a3.37,3.37,0,0,1,5.85-3.36L83.49,88Zm9.83-12.3a3.37,3.37,0,0,1-3.38,5.84L87,79.87A3.38,3.38,0,0,1,90.42,74l2.9,1.68ZM91.48,41.29a3.37,3.37,0,0,1,3.36,5.85l-2.9,1.68A3.37,3.37,0,0,1,88.58,43l2.9-1.68ZM79.7,31.51a3.38,3.38,0,0,1,5.85,3.39l-1.68,2.9A3.38,3.38,0,1,1,78,34.41l1.67-2.9Zm18.85,25a3.37,3.37,0,1,1,0,6.74H95a3.37,3.37,0,0,1,0-6.74Z"/></svg>
        <strong>Real Time Data</strong>

      </div>
    </div>
    <div className="front">
      <div className="front-content">
      <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 119.78" width="75" height="75"><path d="M63,7.81A3.91,3.91,0,1,1,63,0,59.91,59.91,0,1,1,11.17,29.87L6.89,31.51A5.08,5.08,0,1,1,3.28,22L16.5,17a5.17,5.17,0,0,1,1.57-.32,5.05,5.05,0,0,1,5.65,3.53L27.87,33.7a5.07,5.07,0,1,1-9.7,2.94l-.66-2.15a52.08,52.08,0,0,0,82.3,62.22A52.08,52.08,0,0,0,63,7.81Zm-14.1,57c-3.3-3.55,1.76-8.85,5.43-5.5,1.3,1.18,3.18,2.91,4.48,4.08l12.69-15c3.51-3.62,9,1.7,5.58,5.35L61.82,71.41a3.9,3.9,0,0,1-5.4.23c-2.14-2-5.28-5-7.53-6.86ZM40.32,33.61a3.37,3.37,0,0,1,5.85-3.36l1.67,2.9A3.37,3.37,0,0,1,42,36.51l-1.68-2.9Zm-10,13.53a3.38,3.38,0,1,1,3.39-5.85L36.64,43a3.38,3.38,0,0,1-3.39,5.85l-2.9-1.68Zm4.9,34.4a3.37,3.37,0,0,1-3.36-5.84L34.8,74a3.37,3.37,0,0,1,3.36,5.85l-2.91,1.67ZM27.43,63.26a3.37,3.37,0,0,1,0-6.74h3.36a3.37,3.37,0,0,1,0,6.74Zm37.78,31a3.38,3.38,0,0,1-6.75,0V90.94a3.38,3.38,0,0,1,6.75,0v3.35Zm-6.75-68.8a3.38,3.38,0,1,1,6.75,0v3.35a3.38,3.38,0,0,1-6.75,0V25.49ZM47.56,91.37A3.38,3.38,0,1,1,41.71,88l1.68-2.9a3.37,3.37,0,1,1,5.84,3.38l-1.67,2.9ZM83.49,88a3.37,3.37,0,1,1-5.85,3.36L76,88.46a3.37,3.37,0,0,1,5.85-3.36L83.49,88Zm9.83-12.3a3.37,3.37,0,0,1-3.38,5.84L87,79.87A3.38,3.38,0,0,1,90.42,74l2.9,1.68ZM91.48,41.29a3.37,3.37,0,0,1,3.36,5.85l-2.9,1.68A3.37,3.37,0,0,1,88.58,43l2.9-1.68ZM79.7,31.51a3.38,3.38,0,0,1,5.85,3.39l-1.68,2.9A3.38,3.38,0,1,1,78,34.41l1.67-2.9Zm18.85,25a3.37,3.37,0,1,1,0,6.74H95a3.37,3.37,0,0,1,0-6.74Z"/></svg>

            <p >
            Track bus locations and ket informed with real-time data about bus status, available seats and much more.
            </p>
      </div>
    </div>
  </div>
</div>

<div className="card">
  <div className="content">
    <div className="back">
      <div className="back-content">
        <img src={ticket} width="150" height="150" />
       <strong>Book One Day Ahead </strong>
      </div>
    </div>
    <div className="front">
      <div className="front-content">
      <img src={ticket} width="75" height="75" />

            <p >
           Reserve your seat up to 1 day before your planned trip.
            </p>
      </div>
    </div>
  </div>
</div>
        </section>
        <section id="contact">
          <div className="container">
            <div className="inner-con">
            <img src={contact} alt="get in touch" width="400px"/>
        <form ref={form} id="contact-form">
          <label htmlFor="fullname">Full Name</label>
            <Input type="text" required name="from_name"/>
            <label htmlFor="fullname">Email</label>
            <Input  type="email" required name="email"/>
            <label htmlFor="fullname">Message</label>
            <Input  type="text"  required name="message"/>
            <Button onClick={sendMessage}>Send Message</Button>
        </form>
        </div>
        </div>
        </section>
        </div>
    </div> );
}

export default Home;