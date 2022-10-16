import React, { useState } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { HiOutlineCamera, HiPencil } from "react-icons/hi";
import Link from "next/link";
import { Modal, Button } from "rsuite";

import ProfileRating from "../../components/ProfileRating/ProfileRating";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const My_individual = () => {
  const [editName, setEditName] = useState(false);
  const handleEditName = () => {
    setEditName(!editName);
  };

  const [editEmail, setEditEmail] = useState(false);
  const handleEditEmail = () => {
    setEditEmail(!editEmail);
  };

  const [editPhone, setEditPhone] = useState(false);
  const handleEditPhone = () => {
    setEditPhone(!editPhone);
  };

  const [editAddress, setEditAddress] = useState(false);
  const handleEditAddress = () => {
    setEditAddress(!editAddress);
  };

  const [editDescription, setEditDescription] = useState(false);
  const handleEditDescription = () => {
    setEditDescription(!editDescription);
  };

  const [following, setFollowing] = useState(false);
  const handleFollowing = () => {
    setFollowing(!following);
  };

  const [follow, setFollow] = useState("Unfollow");
  const handleFollow = () => {
    setFollow("Follow");
  };

  const handleClose = () => {
    setEditName(false);
    setEditEmail(false);
    setEditPhone(false);
    setEditAddress(false);
    setEditDescription(false);
  };

  return (
    <Layout>
      <div className="bg-[#F9FAFF]">
        <Modal open={editName} onClose={handleClose}>
          <Modal.Body className="p-4">
            <div className="font-semibold text-2xl mb-2">Edit Name</div>

            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-800"
            />
            {/* <Placeholder.Paragraph rows={20} /> */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              appearance="primary"
              className="bg-blue-600"
            >
              Save
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal open={editEmail} onClose={handleClose}>
          <Modal.Body className="p-4">
            <div className="font-semibold text-2xl mb-2">Edit Email</div>

            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-800"
            />
            {/* <Placeholder.Paragraph rows={20} /> */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              appearance="primary"
              className="bg-blue-600"
            >
              Save
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal open={editPhone} onClose={handleClose}>
          <Modal.Body className="p-4">
            <div className="font-semibold text-2xl mb-2">Edit Phone</div>

            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-800"
            />
            {/* <Placeholder.Paragraph rows={20} /> */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              appearance="primary"
              className="bg-blue-600"
            >
              Save
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal open={editAddress} onClose={handleClose}>
          <Modal.Body className="p-4">
            <div className="font-semibold text-2xl mb-2">Edit Address</div>

            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-800"
            />
            {/* <Placeholder.Paragraph rows={20} /> */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              appearance="primary"
              className="bg-blue-600"
            >
              Save
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal open={editDescription} onClose={handleClose}>
          <Modal.Body className="p-4">
            <div className="font-semibold text-2xl mb-2">Edit Description</div>

            <textarea
              type="email"
              placeholder="Add a description"
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-800"
              rows="5"
            ></textarea>

            {/* <Placeholder.Paragraph rows={20} /> */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              appearance="primary"
              className="bg-blue-600"
            >
              Save
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal open={following} onClose={handleClose}>
          <Modal.Body className="p-4">
            <div className="font-semibold text-2xl mb-2">Following</div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="rounded-full object-cover object-center flex-shrink-0 mr-4"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Perera
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                  onClick={() => setFollow("Follow")}
                >
                  {follow}
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="rounded-full object-cover object-center flex-shrink-0 mr-4"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Perera
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                  onClick={() => setFollow("Follow")}
                >
                  {follow}
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="rounded-full object-cover object-center flex-shrink-0 mr-4"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Perera
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                  onClick={() => setFollow("Follow")}
                >
                  {follow}
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="rounded-full object-cover object-center flex-shrink-0 mr-4"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Perera
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                  onClick={() => setFollow("Follow")}
                >
                  {follow}
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="rounded-full object-cover object-center flex-shrink-0 mr-4"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Perera
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                  onClick={() => setFollow("Follow")}
                >
                  {follow}
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="rounded-full object-cover object-center flex-shrink-0 mr-4"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Perera
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                  onClick={() => setFollow("Follow")}
                >
                  {follow}
                </button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              data-modal-close
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleFollowing}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>

        <div className="flex flex-col items-center justify-center ">
          <div className=" h-[178px] w-full">
            <Image
              loader={myLoader}
              src="photos/960137/pexels-photo-960137.jpeg"
              alt="Picture of the author"
              width={1920}
              height={225}
              layout="responsive"
              className=" h-full w-full object-cover"
            />
          </div>
          <div className="-mt-36">
            <div className="h-[240px] w-[240px]">
              <Image
                loader={myLoader}
                src="photos/614810/pexels-photo-614810.jpeg"
                alt="Picture of the author"
                width={240}
                height={240}
                layout="responsive"
                className="rounded-full h-[240px] w-[240px] opacity-4  -mt-36 object-cover"
              />

              <HiOutlineCamera
                className="absolute  rounded-full h-[150px] w-[150px] object-cover text-opacity-20  text-white text-5xl cursor-pointer"
                style={{
                  marginTop: "-122px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              <input
                type="file"
                className="absolute opacity-0  cursor-pointer"
                style={{
                  marginTop: "-122px",
                  left: "60%",
                  transform: "translate(-50%, -50%)",
                }}

                // onChange={saveImage}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full px-4">
            <div className="lg:flex hidden"></div>
            <div className=" text-center items-center justify-center">
              <div className="text-2xl font-bold text-[#393486] my-2">
                John Doe{" "}
                <HiPencil
                  className="inline-block text-gray-700 hover:bg-gray-200 hover:rounded-full  text-xl"
                  onClick={() => setEditName(true)}
                />
              </div>
              <div className="flex items-center justify-center font-semibold text-[#393486] p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Sweden{" "}
                <HiPencil
                  className="inline-block text-gray-700 hover:bg-gray-200 hover:rounded-full  text-xl"
                  onClick={() => setEditAddress(true)}
                />
              </div>
              <center></center>
            </div>

            <div className="lg:flex flex-col hidden text-right items-end justify-end mr-20">
              Member since
              <div>
                <div className="text-[#393486] font-semibold text-sm">2021</div>

                <div>
                  Phone: +9478934545{" "}
                  <HiPencil
                    className="inline-block text-gray-700 hover:bg-gray-200 hover:rounded-full  text-xl"
                    onClick={() => setEditPhone(true)}
                  />
                </div>
                <div>
                  Email: example.com{" "}
                  <HiPencil
                    className="inline-block text-gray-700 hover:bg-gray-200 hover:rounded-full  text-xl"
                    onClick={() => setEditEmail(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
        my-4 max-w-5xl grid lg:grid-cols-3 gap-4   mx-auto grid-cols-1 
      "
        >
          <div>
            <div
              className="lg:w-[320px] w-auto h-auto lg:h-[128px] shadow-lg  border border-gray-300 rounded-2xl mx-5 lg:my-6 my-2 hover:bg-gray-100 cursor-pointer "
              onClick={() => setFollowing(true)}
            >
              <div className="text-xl p-4 text-[#393486]">Following</div>

              <div className="text-sm text-gray-600 px-4 pb-4">
                The sellers you follow
              </div>
            </div>

            <Link href="/profile/individual/ads">
              <div className="lg:w-[320px] w-auto h-auto lg:h-[128px] shadow-lg  border border-gray-300 rounded-2xl mx-5 lg:my-6 my-2 hover:bg-gray-100 cursor-pointer ">
                <div className="text-xl p-4 text-[#393486]">My Ads</div>

                <div
                  className="
              text-sm text-gray-600 px-4 pb-4
            "
                >
                  The ads you have posted
                </div>
              </div>
            </Link>
          </div>

          <div>
            <div className="lg:w-[320px] w-auto h-auto lg:h-[128px] shadow-lg  border border-gray-300 rounded-2xl mx-5 lg:my-6 my-2 hover:bg-gray-100 cursor-pointer ">
              <div className="text-xl p-4 text-[#393486]">My Favorites</div>

              <div
                className="
              text-sm text-gray-600 px-4 pb-4
            "
              >
                The ads you have saved
              </div>
            </div>

            <div className="lg:w-[320px] w-auto h-auto lg:h-[128px] shadow-lg  border border-gray-300 rounded-2xl mx-5 lg:my-6 my-2 hover:bg-gray-100 cursor-pointer ">
              <div className="text-xl p-4 text-[#393486]">Notifications</div>

              <div
                className="
              text-sm text-gray-600 px-4 pb-4
            "
              >
                stay updated
              </div>
            </div>
          </div>

          <div>
            <Link href="/profile/individual/settings">
              {/* <a> */}
              <div className="lg:w-[320px] w-auto h-auto lg:h-[128px] shadow-lg  border border-gray-300 rounded-2xl mx-5 lg:my-6 my-2 hover:bg-gray-100 cursor-pointer ">
                <div className="text-xl p-4 text-[#393486]">Settings</div>

                <div
                  className="
              text-sm text-gray-600 px-4 pb-4
            "
                >
                  Manage your account
                </div>
              </div>
              {/* </a> */}
            </Link>

            <Link href="/profile/individual/cv">
              <div className="lg:w-[320px] w-auto h-auto lg:h-[128px] shadow-lg  border border-gray-300 rounded-2xl mx-5 lg:my-6 my-2 hover:bg-gray-100 cursor-pointer ">
                <div className="text-xl p-4 text-[#393486]">My CV</div>

                <div
                  className="
              text-sm text-gray-600 px-4 pb-4
            "
                >
                  Update your CV
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex felx-col relative mx-auto  max-w-5xl my-5">
          <div className="lg:my-2 my-8">
            <div className="text-3xl text-left font-bold text-[#393486] lg:my-2 my-14">
              About John Doe{" "}
              <HiPencil
                onClick={() => setEditDescription(true)}
                className="inline-block text-gray-700 hover:bg-gray-200 hover:rounded-full  text-xl"
              />
            </div>
            <div className="font-[500] lg:my-2 my-14">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel
              aliquam nisl nisl sit amet nisl. Sed tincidunt, nunc vel tincidunt
              luctus, nunc nisl aliquam nisl, vel aliquam nisl nisl sit amet
              nisl. Sed tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam
              nisl, vel aliquam nisl nisl sit amet nisl. Sed tincidunt, nunc vel
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel
              aliquam nisl nisl sit amet nisl. Sed tincidunt, nunc vel tincidunt
              luctus, nunc nisl aliquam nisl, vel aliquam nisl nisl sit amet
              nisl. Sed tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam
              nisl, vel aliquam nisl nisl sit amet nisl. Sed tincidunt, nunc vel
            </div>
            <hr className="mt-3" />
            <div className="flex justify-between  px-14">
              <div className="flex">
                <div className="text-2xl my-5 text-[#393486] text-left">
                  Ads
                </div>
                <div className="my-6 mx-3">
                  <select className="border border-gray-400 px-3 rounded-lg p-1 outline-none">
                    <option className="text-gray-400">Category</option>
                    <option className="text-gray-700" value="volvo">
                      Volvo
                    </option>
                    <option className="text-gray-700" value="saab">
                      Saab
                    </option>
                    <option className="text-gray-700" value="mercedes">
                      Mercedes
                    </option>
                  </select>
                </div>
              </div>

              <div className="my-4 border border-gray-400 p-2 text-gray-800 rounded-lg hover:bg-gray-100">
                Manage your ads
              </div>
            </div>
            <div>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 container lg:mx-auto py-5 items-center justify-center content-center px-14 lg:px-1">
                  <div className="lg:w-[438px]  w-auto  h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                    <div>
                      <Link href="/property/individual">
                        <a>
                          <Image
                            loader={myLoader}
                            src="photos/1396122/pexels-photo-1396122.jpeg"
                            alt="Evolov"
                            width="498"
                            height="268"
                            className="rounded-lg"
                          />
                        </a>
                      </Link>

                      <div
                        className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
                        title="Save"
                      ></div>
                    </div>

                    <div className="flex justify-between">
                      <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                        Appertment for sale
                        <div className="text-sm font-normal">New jersey</div>
                        <div className="text-sm font-normal">
                          kr 4343,342,34
                        </div>
                      </div>
                      <div className="flex-col font-semibold text-orange-600 p-3">
                        Private
                        <div className="text-sm font-normal mt-5 text-[#221F60]">
                          25,000m
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[438px]  w-auto  h-auto  lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                    <div>
                      <Link href="/property/individual">
                        <a>
                          <Image
                            loader={myLoader}
                            src="photos/1396122/pexels-photo-1396122.jpeg"
                            alt="Evolov"
                            width="498"
                            height="268"
                            className="rounded-lg"
                          />
                        </a>
                      </Link>

                      <div
                        className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
                        title="Save"
                      ></div>
                    </div>

                    <div className="flex justify-between">
                      <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                        Appertment for sale
                        <div className="text-sm font-normal">New jersey</div>
                        <div className="text-sm font-normal">
                          kr 4343,342,34
                        </div>
                      </div>
                      <div className="flex-col font-semibold text-orange-600 p-3">
                        Private
                        <div className="text-sm font-normal mt-5 text-[#221F60]">
                          25,000m
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[438px]  w-auto  h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                    <div>
                      <Link href="/property/individual">
                        <a>
                          <Image
                            loader={myLoader}
                            src="photos/1396122/pexels-photo-1396122.jpeg"
                            alt="Evolov"
                            width="498"
                            height="268"
                            className="rounded-lg"
                          />
                        </a>
                      </Link>

                      <div
                        className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
                        title="Save"
                      ></div>
                    </div>

                    <div className="flex justify-between">
                      <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                        Appertment for sale
                        <div className="text-sm font-normal">New jersey</div>
                        <div className="text-sm font-normal">
                          kr 4343,342,34
                        </div>
                      </div>
                      <div className="flex-col font-semibold text-orange-600 p-3">
                        Private
                        <div className="text-sm font-normal mt-5 text-[#221F60]">
                          25,000m
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[438px]  w-auto  h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                    <div>
                      <Link href="/property/individual">
                        <a>
                          <Image
                            loader={myLoader}
                            src="photos/1396122/pexels-photo-1396122.jpeg"
                            alt="Evolov"
                            width="498"
                            height="268"
                            className="rounded-lg"
                          />
                        </a>
                      </Link>

                      <div
                        className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
                        title="Save"
                      ></div>
                    </div>

                    <div className="flex justify-between">
                      <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                        Appertment for sale
                        <div className="text-sm font-normal">New jersey</div>
                        <div className="text-sm font-normal">
                          kr 4343,342,34
                        </div>
                      </div>
                      <div className="flex-col font-semibold text-orange-600 p-3">
                        Private
                        <div className="text-sm font-normal mt-5 text-[#221F60]">
                          25,000m
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProfileRating />
      </div>
    </Layout>
  );
};

export default My_individual;
