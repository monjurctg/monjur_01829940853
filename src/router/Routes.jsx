
import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import TermsConditions from '../pages/TermsConditions';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Advertise from '../pages/Advertise';

 


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "contact",
      element: <Contact/>,
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"terms-conditions",
      element:<TermsConditions/>
    },
    {
      path:"privacy-policy",
      element:<PrivacyPolicy/>
    },
    {
      path:"advertise",
      element:<Advertise/>
    }
  ]);
  
  function Routes() {
    return (
      <RouterProvider router={router} />
    )
  }
  
  export default Routes