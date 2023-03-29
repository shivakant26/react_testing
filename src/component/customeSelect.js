import React, { useEffect } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
function CustomeSelect() {
  const cityArray = [
    "Indore",
    "Ujjain",
    "Bhopal",
    "Raisen",
    "Devas",
    "jabalpur",
    "satna",
    "sajapur",
    "agarmalva",
  ];
 
  return (
    <>
      <div className="main_select">
        <div id="parentDiv" className="main_inner">
          {cityArray?.map((item, index) => {
            return (
              <div id={`ele${index}`} key={index}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CustomeSelect;
