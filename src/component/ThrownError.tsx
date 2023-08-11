import React, { useEffect } from "react";

const ThrownError = () => {
  useEffect(() => {
    throw new Error();
  });

  return <div>ThrownError</div>;
};

export default ThrownError;
