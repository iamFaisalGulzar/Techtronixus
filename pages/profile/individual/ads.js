import React from "react";
import {
  HiAdjustments,
  HiHeart,
  HiOutlineEye,
  HiOutlineShare,
  HiOutlineThumbUp,
} from "react-icons/hi";
import Layout from "../../../components/Layout";
import ProfileSidebar from "../../../components/ProfileSidebar/ProfileSidebar";
import Image from "next/image";
import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";
import { CheckPicker } from "rsuite";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const data = [
  "Appertment For Rent",
  "Appertment For Sale",
  "House For Rent",
  "House For Sale",
  "Lloyd",
  "Alice",
  "Julia",
  "Albert",
].map((item) => ({ label: item, value: item }));

const Ads = () => {
  const [options, setOptions] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();

  const [Unpublished, setUnpublished] = React.useState(false);
  const [SureDelete, setSureDelete] = React.useState(false);

  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSureDelete(false);
    setUnpublished(false);
  };

  return (
    <Layout>
      <div className="flex">
        <ProfileSidebar />

        <div className="flex flex-col w-full">
          <div className="lg:px-[5%] pl-16 w-full py-10">
            <div className="flex justify-between mb-3 px-7">
              <div className="flex">
                <HiHeart className="text-3xl text-[#221F60]" />{" "}
                <div className="text-3xl text-[#221F60] ml-2">My Ads</div>
              </div>
              <div className="flex">
                <CheckPicker data={data} block />
                <button className="bg-[#221F60] text-white h-10 w-28 rounded-md">
                  Promote Ads
                </button>
              </div>
            </div>
            <hr />
            <Modal open={open} onClose={handleClose} className=" mt-48">
              <Modal.Header>
                <Modal.Title>Mark as Sold</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to mark this ad as sold?
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={handleClose}
                  appearance="primary"
                  className="bg-green-400"
                >
                  Yes
                </Button>
                <Button onClick={handleClose} appearance="subtle">
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal open={Unpublished} onClose={handleClose} className=" mt-48">
              <Modal.Header>
                <Modal.Title>Unpublish Ad</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to unpublish this ad?
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={handleClose}
                  appearance="primary"
                  className="bg-blue-400"
                >
                  Yes
                </Button>
                <Button onClick={handleClose} appearance="subtle">
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal open={SureDelete} onClose={handleClose} className=" mt-48">
              <Modal.Header>
                <Modal.Title>Delete Ad</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure you want to delete this ad?</Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={handleClose}
                  appearance="primary"
                  className="bg-red-400"
                >
                  Yes
                </Button>
                <Button onClick={handleClose} appearance="subtle">
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto lg:p-20 p-14 items-center content-center justify-center">
              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>
                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370  top-2 left-9"
                    title="Save"
                  >
                    <div className="bg-[#33941A] py-1 rounded-full text-white px-6">
                      Active
                    </div>
                  </div>
                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370  top-2 left-9"
                    title="Save"
                  >
                    <div className="bg-[#33941A] py-1 rounded-full text-white px-6">
                      Active
                    </div>
                  </div>
                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments
                      className="text-white text-2xl rounded-full"
                      onClick={() => setOptions(!options)}
                    />
                  </div>

                  {options ? (
                    <div className="absolute flex items-center justify-center rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-0 top-9">
                      <div className=" flex flex-col w-auto h-auto bg-white p-3 rounded-xl mt-1">
                        <div
                          className=" mb-2 text-white bg-[#221F60] rounded-full p-2 cursor-pointer"
                          size="xs"
                          onClick={() => handleOpen("xs")}
                        >
                          Mark as Sold
                        </div>

                        <div
                          className="text-center text-gray-800 mb-2 hover:text-blue-800 rounded-full p-2 cursor-pointer bg-gray-200 border border-gray-300"
                          onClick={() => setUnpublished(true)}
                        >
                          Unpublish
                        </div>
                        <hr />
                        <div
                          className="mb-2 text-center text-white bg-red-600 rounded-full p-2 cursor-pointer"
                          onClick={() => setSureDelete(true)}
                        >
                          Delete
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="flex justify-between">
                  <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                    Appertment for sale
                    <div className="flex space-x-4">
                      <div className="text-base font-normal">
                        <HiOutlineEye className="inline-block" /> 34
                      </div>
                      <div className="text-base font-normal">
                        <HiOutlineThumbUp className="inline-block" /> 344
                      </div>
                      <div className="text-base font-normal">
                        <HiOutlineShare className="inline-block" /> 3423
                      </div>
                    </div>
                  </div>
                  <div className="flex-col font-semibold text-[#221F60] p-3">
                    <div className="text-sm font-semibold mt-1 text-[#221F60]">
                      BDT 434
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370  top-2 left-9"
                    title="Save"
                  >
                    <div className="bg-[#33941A] py-1 rounded-full text-white px-6">
                      Active
                    </div>
                  </div>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>
                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370  top-2 left-9"
                    title="Save"
                  >
                    <div className="bg-[#33941A] py-1 rounded-full text-white px-6">
                      Active
                    </div>
                  </div>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>
                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370  top-2 left-9"
                    title="Save"
                  >
                    <div className="bg-[#33941A] py-1 rounded-full text-white px-6">
                      Active
                    </div>
                  </div>
                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="text-3xl text-[#221F60] ml-9">Promoted Ads</div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto lg:p-20 px-14 items-center content-center justify-center">
              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="text-3xl text-[#221F60] ml-9">Unpublished Ads</div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto lg:p-20 px-14 items-center content-center justify-center">
              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="text-3xl text-[#221F60] ml-9">Ongoing Ads</div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto lg:p-20 px-14 items-center content-center justify-center">
              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="text-3xl text-[#221F60] ml-9">Sold Ads</div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto lg:p-20 px-14 items-center content-center justify-center">
              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiAdjustments className="text-white text-2xl rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                      <div className="flex space-x-4">
                        <div className="text-base font-normal">
                          <HiOutlineEye className="inline-block" /> 34
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineThumbUp className="inline-block" /> 344
                        </div>
                        <div className="text-base font-normal">
                          <HiOutlineShare className="inline-block" /> 3423
                        </div>
                      </div>
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ads;
