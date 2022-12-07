import React, { useEffect } from "react";
import logo from "../../images/logo.png";

const AttendanceInformation = () => {
  useEffect(() => {
    fetch(`https://doctors-portal-server-1.herokuapp.com/user/${email}`, {
      method: "PUT",
      headers: {
        content: "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data inside useToken", data);
        const accessToken = data.token;
        localStorage.setItem("accessToken", accessToken);
      });
  }, []);

  const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return (
    <div className="max-w-[1170px] mx-auto py-[50px]">
      <div>
        {/* logo */}
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
      {/* page title   */}
      <div className="w-7/12 mx-auto ">
        <h2 className="mt-[30px] text-white font-semibold bg-primary text-[35px] text-center rounded-[10px] p-3">
          Attendance information
        </h2>
      </div>
      {/* table */}
      <div></div>
    </div>
  );
};

export default AttendanceInformation;
