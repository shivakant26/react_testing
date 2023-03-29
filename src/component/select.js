import React, { useEffect, useState } from "react";

function Select() {
  const dummyArray = ["ab", "bc", "ca", "da", "cd"];
  const [showdata, setShowData] = useState("ab");
  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(1);

  useEffect(() => {
    const data = dummyArray.slice(startIndex, lastIndex);
    console.log(data);
    setShowData(data);
  }, [startIndex, lastIndex]);

  const prev = () => {
    setStartIndex(startIndex - 1);
    setLastIndex(startIndex);
  };

  const next = () => {
    setStartIndex(lastIndex);
    setLastIndex(lastIndex + 1);
  };

  return (
    <>
      <div className="select_box">
        <div className="innter_box">{showdata}</div>
        <div className="select_box1">
          <button className="select_box1" onClick={prev}>
            prev
          </button>
          <button className="select_box1" onClick={next}>
            next
          </button>
        </div>
      </div>
    </>
  );
}

export default Select;
