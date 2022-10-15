import "./App.css";
import React from 'react';
import { RouterProvider  } from "react-router-dom";
import ContactProvider from "./component/context/Contact.provider";
import router from "./routes/routes";

function App() {

  return (
    <ContactProvider>
         <RouterProvider router={router}/>
    </ContactProvider>
 
  );
}

export default App;
