import React, { useEffect, useState } from "react";
import preloader from "../Images/Png/wlogo.png"
function Loader(props) {
  const [loder, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 3000);
  }, []);
  {
    if (loder === true) {
      document.body.style.overflow = "hidden";
      document.documentElement.scrollTop = 0;
    } else {
      document.body.style.overflow = "initial";
      document.documentElement.scrollTop = 0;
    }
  }
  return (
    <>
      {" "}
      {loder ? (
        <section
          style={{ zIndex: "9999999 " }}
          className=" top-0 bg_rgb start-0 position-fixed position_fixed h-100 w-100 d-flex flex-column justify-content-center align-items-center">
          
         <img src={preloader} alt="preloader" className="loader1"/>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Loader;
