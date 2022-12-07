import React, { useEffect } from "react";
import logo from "../../images/logo.png";

const AttendanceInformation = () => {
  useEffect(() => {
    fetch(`https://test.nexisltd.com/test `, {
      method: "GET",
      headers: {
        content: "application/json",
        authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAMLheAAAAAAA0%2BuSeid%2BULvsea4JtiGRiSDSJSI%3DEUifiRBkKG5E2XzMDjRfl76ZC9Ub0wnz4XsNiRVBChTYbJcE3F}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data inside useToken", data);
        const accessToken = data.token;
        localStorage.setItem("accessToken", accessToken);
      });
  }, []);

  const dataTitle = [{ id: 1, a: "Date", b: "Employee Name", c: "Status" }];

  const data = [
    { id: 1, data: "11/7/16", employeeName: "Arkebe McCoy", status: "Present" },
    { id: 2, data: "2/11/12", employeeName: "Eleanor Pena", status: "Absent" },
    { id: 3, data: "4/21/12", employeeName: "Wade Warren", status: "Present" },
    { id: 4, data: "8/15/17", employeeName: "Jacob Jones", status: "Absent" },
    {
      id: 5,
      data: "6/19/14",
      employeeName: "Darlene Robertson",
      status: "Present",
    },
    { id: 6, data: "6/21/19", employeeName: "Floyd Miles", status: "Absent" },
    {
      id: 7,
      data: "5/19/12",
      employeeName: "Ralph Edwards",
      status: "Present",
    },
    {
      id: 8,
      data: "5/7/16",
      employeeName: "Leslie Alexander",
      status: "Absent",
    },
  ];
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
      <div className="mt-[70px]">
        {/* table head  */}
        {dataTitle.map(({ a, b, c }) => (
          <div className="flex justify-between">
            <h2 className="text-neutral text-xl font-semibold">{a}</h2>
            <h2 className="text-neutral text-xl font-semibold">{b}</h2>
            <h2 className="text-neutral text-xl font-semibold">{c}</h2>
          </div>
        ))}
      </div>
      {/* table body */}
      <div className="mt-[20px]">
        {/* table head  */}
        {data.map(({ id, data, employeeName, status }) => (
          <div key={id} className="flex justify-between mt-11">
            <p className="text-neutral text-xl ">{data}</p>
            <p className="text-neutral text-xl ">{employeeName}</p>
            <p className="text-neutral text-xl ">{status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceInformation;
