import { useState } from "react";

const StateInitializationError = () => {
  const [data, setData] = useState(null);

  const value = data.property.nestedProperty;

  return <div>{value}</div>;
};
export default StateInitializationError;
