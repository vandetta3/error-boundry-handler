import React, { useEffect, useState } from "react";

const ArrayMapping = () => {
  const [test, setTest] = useState();

  const arr = [
    { id: 1, name: "sam", profile: [] },
    { id: 1, name: "sam", profile: [] },
  ];

  useEffect(() => {
    setTest(arr[0].profile[0].name);
  }, []);

  return (
    <>
      <div>test passed</div>
      {/* {arr.map((item) => {
        const { id, name, profile } = item;
        return <div>{profile[0].name}</div>;
      })} */}
    </>
  );
};

export default ArrayMapping;
