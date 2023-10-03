import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import AllRoutes from "./router/AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <AllRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
