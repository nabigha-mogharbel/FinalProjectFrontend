// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: https://cra.link/PWA
// // serviceWorkerRegistration.register();

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

// // import * as React from "react";
// // import * as ReactDOM from "react-dom";
// // import {
// //   createBrowserRouter,
// //   RouterProvider,
// // } from "react-router-dom";

// // import Root, { rootLoader } from "./routes/root";
// // import Team, { teamLoader } from "./routes/team";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <Root />,
// //     loader: rootLoader,
// //     children: [
// //       {
// //         path: "team",
// //         element: <Team />,
// //         loader: teamLoader,
// //       },
// //     ],
// //   },
// // ]);

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <RouterProvider router={router} />
// // );

// /*import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import GenericFallback from "./Pages/404"
// import Home from "./Pages/Home";
// import LoginSignup from "./Pages/LoginSignup";
// import Login from "./Components/Login"
// import Signup from "./Components/Signup"
// import App from "./App"
// import "./index.css"
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement:<GenericFallback />,
//     children:[
//       {
//         path: "app/login",
//         element: <LoginSignup><Login/> </LoginSignup>,
//        /* children:[
//           {
//             path: "login",
//             element:  <Login/>
//          },
//          {
//           path: "signup",
//           element:  <Signup/>
//        }
//         ],
//         errorElement:<GenericFallback />,*/

//     },
//     {
//       path:"app/signup",
//       element: <LoginSignup><Signup/> </LoginSignup>
//     },
//     {
//       path:"app/manager",
//       element: <Home/>,
//       /*children:[
//         {
//           path:""
//         },
//         {
//           path:"live"
//         },
//         {
//           path:"schedule"
//         },
//         {
//           path:"settings"
//         }
//       ]*/
//     },
//     {
//       path:"app/passenger/",
//       element: <Home/>,
//       children:[
//         {
//           path:""
//         },
//         {
//           path:"live"
//         },
//         {
//           path:"schedule"
//         },
//         {
//           path:"settings"
//         }
//       ]
//     }
//   ]

// },

// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
// <RouterProvider router={router} />
// );
