import React, { useEffect } from "react";

const SetTimeOut = () => {
  useEffect(() => {
    setTimeout(() => {
      throw new Error("Error in setTimeout");
    }, 1000);
  });
  return <div>SetTimeOut</div>;
};

export default SetTimeOut;
