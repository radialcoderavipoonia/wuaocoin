import React from "react";
import bdup from "../Images/Png/b-dup.png";
import adup from "../Images/Png/a-dup.png";
import cdup from "../Images/Png/c-dup.png";
import ddup from "../Images/Png/dup-d.png";
const Dup = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div>
          <div>
            <img className="w-100" src={bdup} alt="b" srcset="" />
          </div>
        </div>
        <div className="d-flex m-30 z-3">
          <div>
            <img className="w-100" src={cdup} alt="b" srcset="" />
          </div>
          <div> 
            <img className="w-100" src={adup} alt="b" srcset="" />
          </div>
        </div>
        <div className="m-70 z-2">
          <div>
            <img className="w-100" src={ddup} alt="b" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dup;
