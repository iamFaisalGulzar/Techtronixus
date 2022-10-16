import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Formik } from "formik";
import Layout from "../../components/Login/Layout";
import Link from "next/link";
import { Suspense } from "react";

const Login = () => {
  console.log("LOGIN PAGE 1");
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
                      <div className="text-[#34308b] text-3xl font-[800]">
                        Sign Up
                      </div>
                      <div className="my-3 text-base text-gray-500 hover:text-blue-800 cursor-pointer">
                        <Link href="/sign-up/corporation">
                          Sign up as Corporation
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Formik
                        initialValues={{
                          first_name: "",
                          last_name: "",
                          username: "",
                          country: "",
                          country_code: "",
                          number: "",
                          email: "",
                          password: "",
                          confirm_password: "",
                        }}
                        validate={(values) => {
                          const errors = {};
                          if (!values.first_name) {
                            errors.first_name = "Required";
                          }
                          if (!values.last_name) {
                            errors.last_name = "Required";
                          }
                          if (!values.username) {
                            errors.username = "Required";
                          }
                          if (!values.country) {
                            errors.country = "Required";
                          }
                          if (!values.number) {
                            errors.number = "Required";
                          }
                          if (!values.email) {
                            errors.email = "Required";
                          } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                              values.email
                            )
                          ) {
                            errors.email = "Invalid email address";
                          }
                          if (!values.password) {
                            errors.password = "Required";
                          }
                          return errors;
                        }}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            resetForm();
                            setSubmitting(false);
                          }, 400);
                        }}
                      >
                        {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                        }) => (
                          <form onSubmit={handleSubmit}>
                            <div className="flex-col mt-5">
                              <div className="flex space-x-2">
                                <div className="flex-col text-start">
                                  <label className="text-gray-600">
                                    First Name
                                  </label>
                                  <input
                                    type="text"
                                    name="first_name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.first_name}
                                    placeholder="First Name"
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                  {errors.first_name && touched.first_name && (
                                    <div className="text-red-500 text-sm">
                                      {errors.first_name}
                                    </div>
                                  )}
                                </div>
                                <div className="flex-col text-start">
                                  <label className="text-gray-600">
                                    Last Name
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="last_name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.last_name}
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                  {errors.last_name && touched.last_name && (
                                    <div className="text-red-500 text-sm">
                                      {errors.last_name}
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="flex space-x-2">
                                <div className="w-full flex-col text-start mt-3">
                                  <label className="text-gray-600">
                                    Username
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                  {errors.username && touched.username && (
                                    <div className="text-red-500 text-sm">
                                      {errors.username}
                                    </div>
                                  )}
                                </div>
                                <div className="w-full flex-col text-start mt-3">
                                  <label className="text-gray-600">
                                    Country
                                  </label>
                                  <select
                                    name="country"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.country}
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  >
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

                              <div className="text-start mt-3">
                                <label className="text-gray-600 mt-3">
                                  Number
                                </label>
                              </div>
                              <div className="flex space-x-2">
                                <div>
                                  <input
                                    type="text"
                                    name="country_code"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.country_code}
                                    placeholder="+47"
                                    className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[70px] w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                                <div className="w-full">
                                  <input
                                    type="text"
                                    name="number"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.number}
                                    placeholder="Phone Number"
                                    className="border-2 bg-[#F0F2F7] rounded-lg  w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                              </div>
                              {errors.number && touched.number && (
                                <div className="text-red-500 text-sm text-left">
                                  {errors.number}
                                </div>
                              )}

                              <div className="flex flex-col text-start">
                                <label className="text-gray-600 mt-3">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                  placeholder="Email Address"
                                  className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[400px] w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                />
                                {errors.email && touched.email && (
                                  <div className="text-red-500 text-sm">
                                    {errors.email}
                                  </div>
                                )}
                              </div>
                              <div className="flex flex-col text-start">
                                <label className="text-gray-600 mt-3">
                                  Password
                                </label>
                                <div className="flex">
                                  <input
                                    type={passwordShown ? "text" : "password"}
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
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
                                {errors.password && touched.password && (
                                  <div className="text-red-500 text-sm">
                                    {errors.password}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="text-sm text-gray-500 mt-3 hover:text-blue-gray-900">
                              <Link href="/forgot-password">
                                <a>Forgot Password?</a>
                              </Link>
                            </div>

                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="bg-[#35308d] text-white rounded-lg lg:w-[400px] w-full h-[50px] mt-10 font-[500]"
                            >
                              Sign Up
                            </button>

                            <div className="flex justify-center mt-3">
                              <div className="text-sm text-gray-500">
                                <Link href="/login">
                                  <a>{"Already Have an account? Click here"}</a>
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
