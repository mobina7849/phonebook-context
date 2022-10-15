import { createBrowserRouter } from "react-router-dom";
import AddContact from "../pages/addContact/addContact";
import InfoContact from "../pages/infoContact/infoContact";
import Home from "../pages/Home/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home  />,
    },
    {
      path: "add-contact",
     element: <AddContact />,
    },
    {
      path: "info/:infoID",
      element: <InfoContact  />,
    },{
    path: "update/:updateID",
    element: <AddContact  />,
   },
  ]);
  
  export default router;
