import React, { useEffect } from "react";
import axios from "axios";
import LayoutMain from "../components/Layout";

const HomePage = () => {
  // Login User data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <LayoutMain>
      <h1>Home Page</h1>
    </LayoutMain>
  );
};

export default HomePage;
