import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import EachCamp from "../Pages/EachCamp";

export default function MyCampaign() {
  const { user, setUser, LogOut } = useContext(AuthContext);
  const [authData, setAuthData] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/${user.email}`)
        .then((res) => res.json())
        .then((data) => setAuthData(data));
    }
  }, [user?.email]);
  return (
    <>
      <div className="min-h-screen gap-2 flex flex-col">
        {authData.map((eachData, index) => (
          <EachCamp key={index} eachData={eachData}></EachCamp>
        ))}
      </div>
    </>
  );
}
