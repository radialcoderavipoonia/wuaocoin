import React from "react";
import unicef from "../Images/Png/unicef.png";

const Partnership = () => {
  return (
    <>
      <section className="whitepaper_bg py-60">
        <div className="container">
          <h2 className="ff_montserrat fs_3xl color-light text-center mb-0">
            Partnership
          </h2>
          <div className="pt-5">
            <div className="d-flex justify-content-center">
        
              <img className="w100-sm" src={unicef} alt="unicef"/>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partnership;
