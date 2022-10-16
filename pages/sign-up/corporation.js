import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Formik } from "formik";
import Layout from "../../components/Login/Layout";
import { Suspense } from "react";
import Link from "next/link";
const Login = () => {
  console.log("LOGIN PAGE 2");
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [ConfirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!ConfirmPasswordShown);
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-[#F9FAFF]">
          {/* <div>
                {
                    //logo will go here
                }
            </div> */}
          <div className="bg-[#F9FAFF] flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-14">
              <Layout />
              <div>
                <div className="lg:w-[514px] w-auto h-auto mx-4 rounded-sm border-[0.4px] px-14 items-center justify-center text-center border-[#413c9b] shadow-lg bg-white">
                  <div className="flex-col my-20">
                    <div className="flex justify-between">
                      <div className="text-gray-500 text-3xl font-[800]">
                        Sign Up
                      </div>
                      <div className="my-3 text-base font-semibold text-blue-900 cursor-pointer">
                        Sign up as Corporation
                      </div>
                    </div>
                    <div>
                      <Formik initialValues={{}} onSubmit={() => {}}>
                        {({ values, handleChange, handleSubmit }) => (
                          <form onSubmit={handleSubmit}>
                            <div className="flex-col mt-5">
                              <div className="flex space-x-2">
                                <div className="flex-col text-start">
                                  <label className="text-gray-600">
                                    Corporation Name
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Corporation Name"
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                                <div className="flex-col text-start">
                                  <label className="text-gray-600">
                                    Corporation ID
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Corporation ID"
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                              </div>

                              <div className="flex space-x-2">
                                <div className="w-full flex-col text-start mt-3">
                                  <label className="text-gray-600">City</label>
                                  <input
                                    type="text"
                                    placeholder="City"
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                                <div className="w-full flex-col text-start mt-3">
                                  <label className="text-gray-600">
                                    Country
                                  </label>
                                  <select className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none">
                                    <option
                                      value=""
                                      className="w-full"
                                      key=""
                                      disabled
                                    >
                                      Select Country
                                    </option>
                                    <option
                                      value="Nigeria"
                                      className="w-full"
                                      key="Nigeria"
                                    >
                                      Nigeria
                                    </option>
                                    <option
                                      value="Ghana"
                                      className="w-full"
                                      key="Ghana"
                                    >
                                      Ghana
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div className="flex flex-col text-start">
                                <label className="text-gray-600 mt-3">
                                  Address
                                </label>
                                <input
                                  type="text"
                                  placeholder="Address"
                                  className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[400px] w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                />
                              </div>

                              <div className="flex flex-col text-start">
                                <label className="text-gray-600 mt-3">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  placeholder="Email Address"
                                  className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[400px] w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                />
                              </div>

                              <div className="text-start mt-3">
                                <label className="text-gray-600 mt-3">
                                  Number
                                </label>
                              </div>
                              <div className="flex space-x-2">
                                <div>
                                  <input
                                    type="text"
                                    placeholder="+47"
                                    className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[70px] w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                                <div className="w-full">
                                  <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="border-2 bg-[#F0F2F7] rounded-lg  w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                              </div>

                              <div className="flex space-x-2 mt-4">
                                <div className="flex-col text-start">
                                  <label className="text-gray-600">
                                    First Name of Decision Maker
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="First Name"
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                                <div className="flex-col text-start">
                                  <label className="text-gray-600">
                                    Last Name of Decision Maker
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                              </div>

                              <div className="flex flex-col text-start">
                                <label className="text-gray-600 mt-3">
                                  Email of Decision Maker
                                </label>
                                <input
                                  type="email"
                                  placeholder="Email Address"
                                  className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[400px] w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                />
                              </div>

                              <div className="text-start mt-3">
                                <label className="text-gray-600 mt-3">
                                  Number of Decision Maker
                                </label>
                              </div>
                              <div className="flex space-x-2">
                                <div>
                                  <input
                                    type="text"
                                    placeholder="+47"
                                    className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[70px] w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                                <div className="w-full">
                                  <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="border-2 bg-[#F0F2F7] rounded-lg  w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                              </div>

                              <div className="flex flex-col text-start">
                                <label className="text-gray-600 mt-3">
                                  Confirm Email
                                </label>
                                <input
                                  type="email"
                                  placeholder="Email Address"
                                  className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[400px] w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                />
                              </div>

                              <div
                                className="flex
                            flex-col text-start"
                              >
                                <label className="text-gray-600 mt-3">
                                  Password
                                </label>
                                <div className="flex">
                                  <input
                                    type={passwordShown ? "text" : "password"}
                                    placeholder="New Password"
                                    className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[400px] w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                  <button
                                    className="-ml-[10%]"
                                    onClick={togglePassword}
                                  >
                                    {passwordShown ? (
                                      <HiOutlineEye className="w-[25px] h-[25px] text-gray-600 mt-3" />
                                    ) : (
                                      <HiOutlineEyeOff className="w-[25px] h-[25px] text-gray-600 mt-3" />
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="text-sm text-gray-500 mt-3 hover:text-blue-gray-900">
                              <Link href="/forgot-password">
                                <a>Forgot Password?</a>
                              </Link>
                            </div>

                            <button
                              type="submit"
                              className="bg-[#35308d] text-white rounded-lg lg:w-[400px] w-full h-[50px] mt-10 font-[500]"
                            >
                              Sign Up
                            </button>

                            <div className="flex justify-center mt-3">
                              <div className="text-sm text-gray-500">
                                <Link href="/login">
                                  <a>Already have an account?</a>
                                </Link>
                              </div>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Login;
