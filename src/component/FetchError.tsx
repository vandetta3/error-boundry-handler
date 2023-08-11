import React, { useEffect, useState } from "react";
import { getUser } from "../service/Api";

interface userType {
  name: string;
}

const FetchError = () => {
  const [user, setUser] = useState<userType>();

  const getUserData = async () => {
    try {
      const res = await getUser(-1);
      setUser(res);
    } catch (e) {
      throw new Error("fetch");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return <div>{user?.name}</div>;
};

export default FetchError;
