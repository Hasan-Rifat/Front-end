import React, { useReducer, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import banner from "../../images/banner.jpg";
import img from "../../images/logo.png";
import InputField from "../utility/InputField";

const SignUpForm = () => {
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [next, setNext] = useState(false);
  const [next2, setNext2] = useState(false);

  const initialState = {
    firstName: "",
    lastName: "",
    countryCode: "",
    phone: "",
    email: "",
    password: "",
  };

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handler = (e) => {
    e.preventDefault();
    console.log(state);

    const data = {
      first_name: "First Name",
      last_Name: "Last Name",
      phone_number: "0000000000",
      email: "abc@example.com",
      password: "SuperSecretPassword",
    };
    const url = "https://test.nexisltd.com/signup";
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

    /*  const firstName = e.target?.firstName?.value;
    const lastName = e.target?.lastName?.value;

    const countryCode = e.target?.countryCode?.value;
    const phone = e.target?.phone?.value;

    const email = e.target?.email?.value;
    const password = e.target?.password?.value;

    console.log(
      "email",
      email,
      "password",
      password,
      "firstName",
      firstName,
      "lastName",
      lastName,
      "countryCode",
      countryCode,
      "phone",
      phone
    ); */
    // if (password.length <= 7) {
    //   setError("Your password must be 8 character");
    // }
  };

  return (
    <section className="text-neutral body-font relative bg-[#f7f7f7f7] h-screen">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* left */}
        <div className="lg:w-3/5 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 ">
          <div className="">
            <img className="" src={img} alt="" />
          </div>
          <div className="mt-[20px]">
            <img src={banner} alt="image by pch vector on Freepik" />
          </div>
        </div>
        {/* right */}
        <div className="rounded-2xl p-20 shadow-2xl lg:w-2/5 md:w-1/2 bg-white flex flex-col ">
          <h2 className="text-neutral text-center text-[32px] leading-[58px] mb-1 font-bold title-font pb-[23px]">
            SignUp From
          </h2>

          <form onSubmit={handler}>
            <div className="py-5">
              {!open && (
                <div>
                  {next ? (
                    // !Step 1
                    // after next
                    <>
                      <div className="relative z-0 mb-6 w-full group flex gap-4">
                        <InputField
                          name={"countryCode"}
                          placeholder={"+880"}
                          type={"number"}
                          className={"w-1/4"}
                          onBlur={(e) =>
                            dispatch({
                              type: "INPUT",
                              payload: {
                                name: e.target.name,
                                value: e.target.value,
                              },
                            })
                          }
                        />
                        <InputField
                          name={"phone"}
                          placeholder={"1xxxxxxxxxx"}
                          type={"number"}
                          className={"w-9/12"}
                          onBlur={(e) =>
                            dispatch({
                              type: "INPUT",
                              payload: {
                                name: e.target.name,
                                value: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div className="relative z-0 mb-6 w-full group">
                        <InputField
                          name={"email"}
                          placeholder={"Write Email Address"}
                          type={"email"}
                          onBlur={(e) =>
                            dispatch({
                              type: "INPUT",
                              payload: {
                                name: e.target.name,
                                value: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div className="py-[30px] text-center flex">
                        {/* // !Step 2 // */}
                        <button
                          type="button"
                          onClick={() => setNext(false)}
                          className="px-12 py-3 text-neutral flex items-center mx-auto gap-2"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setNext2(true);
                            setNext(false);
                            setOpen(true);
                          }}
                          className="px-12 py-3 bg-blue-500 shadow-lg shadow-blue-500/50 rounded-xl text-white flex items-center mx-auto gap-2"
                        >
                          Next Step
                          <HiOutlineArrowNarrowRight className="text-xl" />
                        </button>
                      </div>
                    </>
                  ) : (
                    // before next
                    <>
                      <div className="relative z-0 mb-6 w-full group">
                        <InputField
                          name={"firstName"}
                          placeholder={"Write First Name"}
                          type={"text"}
                          onBlur={(e) =>
                            dispatch({
                              type: "INPUT",
                              payload: {
                                name: e.target.name,
                                value: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div className="relative z-0 mb-6 w-full group">
                        <InputField
                          name={"lastName"}
                          placeholder={"Write Last Name"}
                          type={"text"}
                          onBlur={(e) =>
                            dispatch({
                              type: "INPUT",
                              payload: {
                                name: e.target.name,
                                value: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div className="py-[30px] text-center">
                        <button
                          type="button"
                          onClick={() => setNext(true)}
                          className="px-12 py-3 bg-blue-500 shadow-lg shadow-blue-500/50 rounded-xl text-white flex items-center mx-auto gap-2"
                        >
                          Next Step
                          <HiOutlineArrowNarrowRight className="text-xl" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* // !Step 3 // */}
              {open && next2 && (
                <>
                  <div className="relative z-0 mb-6 w-full group">
                    <InputField
                      name={"password"}
                      placeholder={"Write Password"}
                      type={"password"}
                      onBlur={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                    <p className="text-red-600 text-center mt-[15px] ">
                      {error}
                    </p>
                  </div>

                  <div className="py-[30px] text-center flex">
                    <button
                      type="button"
                      onClick={() => {
                        setNext(true);
                        setOpen(false);
                      }}
                      className="px-12 py-3 text-neutral flex items-center mx-auto gap-2"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-12 py-3 bg-blue-500 shadow-lg shadow-blue-500/50 rounded-xl text-white flex items-center mx-auto gap-2"
                    >
                      Sign Up
                      <HiOutlineArrowNarrowRight className="text-xl" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </form>

          <Link to="/">
            <p className="text-sm text-gray-500 mt-3 text-right">
              Already have an account?
              <span className="text-base text-primary ml-4 underline font-semibold ">
                LOGIN HERE
              </span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
