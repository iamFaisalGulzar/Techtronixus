import { useState, useEffect } from "react";
import { MobileNav, Typography, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { Popover, Whisper, Button, Dropdown } from 'rsuite';


export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const [openDropdownSettings, setOpenDropdownSettings] = useState(false);
  const [camera, setCamera] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white absolute items-center justify-center mt-1 ml-[6px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            className="bg-[#221F60] border pl-[30px] placeholder-style w-72 right-1 rounded-lg text-white"
            placeholder="Search"
          />
          <div
            className="mt-1 ml-[-14%]  lg:ml-[-18%] "
            onClick={() => {
              setCamera(!camera);
              console.log("clicked");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="items-center w-8 ml-1 bg-white rounded-lg h-9"
            onClick={() => {
              setOpenDropdownSettings(!openDropdownSettings);
              console.log("clicked");
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>
        {camera ? (
          <div className="absolute flex-end ">
            <div className="relative z-40 w-auto h-auto px-5 py-2 ml-32 bg-white rounded-lg">
              <div className="flex-col">
                <div className="items-center text-gray-600">
                  Search by image
                  <hr />
                </div>
                <div className="mb-1 font-semibold text-gray-800 ">
                  <div className="flex">
                    <div>
                      <button className="flex p-2 m-1 bg-gray-200 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mr-1 hover:text-blue-900"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                          />
                        </svg>
                        Choose File
                      </button>
                    </div>
                    <div>
                      <button className="flex p-2 m-1 bg-gray-200 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mr-1 hover:text-blue-900"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                          />
                        </svg>
                        Take photo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {openDropdownSettings ? (
          <div className="absolute flex-end ">
            <div className="relative z-40 w-auto h-auto px-5 py-2 bg-white rounded-lg ml-16 mt-1">
              <div className="
              grid grid-cols-1 lg:grid-cols-2 gap-4
              ">

             
              <div className="flex-col overflow-y-auto h-72">
                <div className="text-gray-600 flex-col">
                 <div>
                 Select Country
                 </div>
                  <div className="relative top-0">
                  <input type="text" placeholder="Seach Country" className="bg-gray-100 sticky p-3 outline-none my-2"/>
                  </div>
                </div>
                <div className="mb-1 font-semibold text-gray-800 hover:bg-blue-400 hover:text-white py-2 px-2 text-lg rounded-lg focus:bg-green-600">
                  Norway
                </div>
                <div className="mb-1 font-semibold text-gray-800 hover:bg-blue-400 hover:text-white py-2 px-2 text-lg rounded-lg focus:bg-green-600">
                  India
                </div>
                <div className="mb-1 font-semibold text-gray-800 hover:bg-blue-400 hover:text-white py-2 px-2 text-lg rounded-lg focus:bg-green-600">
                  Norway
                </div><div className="mb-1 font-semibold text-gray-800 hover:bg-blue-400 hover:text-white py-2 px-2 text-lg rounded-lg focus:bg-green-600">
                  Norway
                </div><div className="mb-1 font-semibold text-gray-800 hover:bg-blue-400 hover:text-white py-2 px-2 text-lg rounded-lg focus:bg-green-600">
                  Norway
                </div><div className="mb-1 font-semibold text-gray-800 hover:bg-blue-400 hover:text-white py-2 px-2 text-lg rounded-lg focus:bg-green-600">
                  Norway
                </div><div className="mb-1 font-semibold text-gray-800 hover:bg-blue-400 hover:text-white py-2 px-2 text-lg rounded-lg focus:bg-green-600">
                  Norway
                </div><div className="mb-1 font-semibold text-gray-800 hover:bg-blue-400 hover:text-white py-2 px-2 text-lg rounded-lg focus:bg-green-600">
                  Norway
                </div>
                <div className="mb-1 font-semibold text-gray-800 hover:bg-blue-400 hover:text-white py-2 px-2 text-lg rounded-lg focus:bg-green-600">
                  Pakistan
                </div>
              </div>

              <div className=" flex-col">
              <div className="text-gray-600 text-lg mb-1">
                 Select Category
                 </div>
                 <hr/>

                 <div className="flex text-lg space-x-6">
                    <div>
                      <div>
                        <input type="checkbox" /> <span className="ml-2 font-semibold text-gray-800">All</span> 
                      </div>
                      <div>
                        <input type="checkbox" /> <span className="ml-2 font-semibold text-gray-800">Car</span> 
                      </div>
                      <div>
                        <input type="checkbox" /> <span className="ml-2 font-semibold text-gray-800 checked:bg-green-700">Home</span> 
                      </div>
                    </div>

                    <div>
                    <div>
                        <input type="checkbox" /> <span className="ml-2 font-semibold text-gray-800">All</span> 
                      </div>
                      <div>
                        <input type="checkbox" /> <span className="ml-2 font-semibold text-gray-800">Car</span> 
                      </div>
                      <div>
                        <input type="checkbox" /> <span className="ml-2 font-semibold text-gray-800 checked:bg-green-700">Home</span> 
                      </div>
                    </div>
                 </div>

                 
              </div>
              

              </div>
              <div className="relative bottom-0 text-right ">
                  <button className="relative bottom-0 fle bg-[#221F60] p-3 text-white font-semibold rounded-lg hover:bg-blue-900 mt-2"
                  onClick={() => setOpenDropdownSettings(false)}
                  >
                    Apply Settings
                  </button>
                 </div>
           
            </div>
          
          </div>
          
        ) : null}
      </div>

      <Typography as="li" color="white" className="p-1 font-normal">
        <a
          
          className="flex items-center text-sm text-gray-200 focus:text-white focus:font-semibold no-underline"
        >
          Home
        </a>
      </Typography>
      <Typography as="li" color="white" className="p-1 font-normal">
        <Link href="/property/publish/house">
        <a
          
          className="flex items-center text-sm text-gray-200 focus:text-white focus:font-semibold no-underline"
        >
          Publish
        </a>
        </Link>
      </Typography>
      <Typography as="li" color="white" className="p-1 font-normal">
        <a
          
          className="flex items-center text-sm text-gray-200 focus:text-white focus:font-semibold no-underline"
        >
          Chat
        </a>
      </Typography>
      <Typography as="li" color="white" className="p-1 font-normal">
        <a
          
          className="flex items-center text-sm text-gray-200 focus:text-white focus:font-semibold no-underline"
        >
          Contact us
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className=" bg-[#221F60] max-w-screen-3xl py-3 shadow-lg px-5 lg:px-14 lg:py-3">
      <div className="container flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <a>
            <Image
              src="/../public/images/logo/logo.png"
              width={150}
              height={65}
              alt="Evolov"
            />
          </a>
        </Link>

        <div className="hidden lg:block">{navList}</div>

        <div className="hidden lg:block">
          <button className="mb-2 bg-white text-[#221F60] mr-3 text-sm py-1 px-6 font-semibold rounded-full">
            <Link href="/sign-up">
              <a className="hover:no-underline">Sign Up</a>
            </Link>
          </button>
          <button className="mb-2 bg-[#FF942C] text-white text-sm py-1 px-7 font-medium rounded-full">
            <Link href="/login">
              <a className="mb-2 bg-[#FF942C] text-white text-sm no-underline hover:no-underline font-medium rounded-full">Login</a>
            </Link>
          </button>
        </div>

        <IconButton
          variant="text"
          className="w-6 h-6 p-2 ml-auto text-white text-inherit lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <button className="mb-2 bg-[#FF942C] text-white text-sm py-1 px-7 font-medium rounded-full">
          <Link href="/login">
            <a className="mb-2 bg-[#FF942C] text-white text-sm no-underline hover:no-underline font-medium rounded-full">Login</a>
          </Link>
        </button>
        <button className="mb-2 bg-white text-[#221F60] ml-3 text-sm py-1 px-6 font-semibold rounded-full">
          <Link href="/sign-up">
            <a>Sign Up</a>
          </Link>
        </button>
      </MobileNav>
    </div>
  );
}
