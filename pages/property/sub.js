import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import Add from "../../components/Favorite/Add";
import Filters from "../../components/property/Filters";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import FilterPhone from "../../components/property/FilterPhone";
import { Suspense } from "react";
import SubSearch from "../../components/Search/SubSearch";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Sub = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-[#F9FAFF]">
          <Layout>
            <div className="flex">
              <div className="flex-1 py-16 pl-10 lg:block md:block hidden">
                <Breadcrumb />
                <Filters />
              </div>

              <div className="absolute">
                <FilterPhone />
              </div>

              <div className="flex-auto">
              <SubSearch />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto p-20 items-center content-center justify-center">
                  <div className="lg:w-[438px] w-auto h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
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
                      >
                        <Add />
                      </div>
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

                  <div className="lg:w-[438px] w-auto h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                    <div>
                      <Link href="/property/company">
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
                      >
                        <Add />
                      </div>
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
                        <Image
                          loader={myLoader}
                          src="photos/1396122/pexels-photo-1396122.jpeg"
                          alt="Evolov"
                          width="25"
                          height="25"
                          className="rounded-full pt-7"
                        />
                        <span className="ml-2 -mt-3 font-normal text-[#221F60]">
                          Lock
                        </span>
                        <div className="text-sm font-normal mt-4 text-[#221F60]">
                          25,000m
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[438px] w-auto h-auto  lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
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
                      >
                        <Add />
                      </div>
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

                  <div className="lg:w-[438px] w-auto h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
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
                      >
                        <Add />
                      </div>
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

                  <div className="lg:w-[438px] w-auto h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
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
                      >
                        <Add />
                      </div>
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
          </Layout>
        </div>
      </Suspense>
    </>
  );
};

export default Sub;
