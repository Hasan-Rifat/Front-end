import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../images/banner.jpg";
import img from "../../images/logo.png";
import InputField from "../utility/InputField";

const LoginForm = () => {
  const [error, setError] = useState("");

  const handler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if (password.length <= 7) {
      setError("Your password must be 8 character");

      // login
      const data = {
        email: email,
        password: password,
      };
      const url = "https://test.nexisltd.com/login ";
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          e.reset();
          // window.location.reload();
        });
    }
  };

  return (
    <section className="bg-[#f7f7f7f7] h-screen text-neutral body-font relative ">
      <div className="container px-5 py-24 mx-auto grid grid-cols-5">
        {/* left */}
        <div className=" rounded-lg overflow-hidden sm:mr-10 p-10 xl:col-span-5 2xl:col-span-3">
          <div className="">
            <img className="" src={img} alt="" />
          </div>
          <div className="mt-[20px]">
            <img
              className="rounded-2xl"
              src={banner}
              alt="image by pch vector on Freepik"
            />
          </div>
        </div>
        {/* right */}
        <div className="2xl:col-span-2 xl:col-span-5 rounded-2xl md:p-5 lg:p-10 2xl:p-20 shadow-2xl  bg-white flex flex-col ">
          <h2 className="text-neutral text-center text-[32px] leading-[58px] mb-1 font-bold title-font pb-[23px]">
            Login From
          </h2>

          <form onSubmit={handler}>
            <div className="py-5">
              <div className="relative z-0 mb-6 w-full group">
                <InputField
                  name={"email"}
                  placeholder={"Write Email Address"}
                  type={"email"}
                />
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <InputField
                  name={"password"}
                  placeholder={"Write Password"}
                  type={"password"}
                />
                <p className="text-red-600 text-center mt-[15px] ">{error}</p>
              </div>
            </div>

            <div className="py-[30px] text-center">
              <button className="px-12 py-3 bg-blue-500 shadow-lg shadow-blue-500/50 rounded-xl text-white flex items-center mx-auto gap-2">
                Login
              </button>
            </div>
          </form>
          <Link to="/signup-from">
            <p className="text-sm text-gray-500 mt-3 text-right">
              Don't have an account?
              <span className="text-base text-primary ml-4 underline font-semibold ">
                SIGNUP HERE!
              </span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
