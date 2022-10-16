import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import Add from "../../components/Favorite/Add";
import Search from "../../components/Search/Search";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Properties = () => {
  return (
    <div className="bg-[#F9FAFF]">
      <Layout>
        {/* A search bar. */}
        <Search />

        <div className="text-3xl text-[#221F60] pl-24 mt-9 -mb-12 font-semibold">
          Types of Listing
        </div>

        <div className="container grid items-center content-center justify-center grid-cols-1 gap-4 p-20 mx-auto lg:grid-cols-3">
          <Link href="/property/sub">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/164558/pexels-photo-164558.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  House
                </div>
              </div>
            </a>
          </Link>

          <Link href="/property/sub">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Plot
                </div>
              </div>
            </a>
          </Link>

          <Link href="/property/sub">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/1571460/pexels-photo-1571460.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Apartment
                </div>
              </div>
            </a>
          </Link>

          <Link href="/property/sub">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/323705/pexels-photo-323705.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Commercial Real Estate
                </div>
              </div>
            </a>
          </Link>

          <Link href="/property/sub">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/1179156/pexels-photo-1179156.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Cottage
                </div>
              </div>
            </a>
          </Link>

          <Link href="/property/sub">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/772472/pexels-photo-772472.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Castle
                </div>
              </div>
            </a>
          </Link>

          <Link href="/property/sub">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/4480505/pexels-photo-4480505.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Garadge
                </div>
              </div>
            </a>
          </Link>
        </div>

        <div className="text-3xl text-[#221F60] pl-24 mt-9 font-semibold -mb-10">
          Random Listing
        </div>

        <div className="container relative grid items-center content-center justify-center grid-cols-1 gap-4 p-20 mx-auto lg:grid-cols-3 ">
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-20 cursor-pointer relative">
            <div>
              <Link href="/property/individual">
                <a>
                  <Image
                    loader={myLoader}
                    src="photos/1396122/pexels-photo-1396122.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="relative rounded-lg"
                  />
                </a>
              </Link>

              <div
                className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 absolute right-7 top-7 sm:right-3 sm:top-3"
                title="Save"
              >
                <Add />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                Appertment for sale
                <div className="text-sm font-normal">New jersey</div>
                <div className="text-sm font-normal">kr 4343,342,34</div>
              </div>
              <div className="flex-col p-3 font-semibold text-orange-600">
                Private
                <div className="text-sm font-normal mt-5 text-[#221F60]">
                  25,000m
                </div>
              </div>
            </div>
          </div>

          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-20 cursor-pointer relative">
            <div>
              <Link href="/property/company">
                <a>
                  <Image
                    loader={myLoader}
                    src="photos/271624/pexels-photo-271624.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="relative rounded-lg"
                  />
                </a>
              </Link>
              <div
                className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 absolute right-7 top-7 sm:right-3 sm:top-3"
                title="Save"
              >
                <Add />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                Appertment for sale
                <div className="text-sm font-normal">New jersey</div>
                <div className="text-sm font-normal">kr 4343,342,34</div>
              </div>
              <div className="flex-col p-3 font-semibold text-orange-600">
                <div className="flex">
                  <Link href="/property/individual">
                    <a>
                      <Image
                        loader={myLoader}
                        src="photos/1643384/pexels-photo-1643384.jpeg"
                        alt="Evolov"
                        width="25"
                        height="25"
                        className="rounded-full pt-7"
                      />
                    </a>
                  </Link>

                  <div className="ml-2   text-[#221F60] font-semibold">
                    Lock
                  </div>
                </div>
                <div className="text-sm font-normal mt-5 text-[#221F60]">
                  25,000m
                </div>
              </div>
            </div>
          </div>

          <Link href="/property/individual">
            <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-20 cursor-pointer relative">
              <div>
                <Image
                  loader={myLoader}
                  src="photos/1643384/pexels-photo-1643384.jpeg"
                  alt="Evolov"
                  width="345"
                  height="231"
                  className="relative rounded-lg"
                />
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 absolute right-7 top-7 sm:right-3 sm:top-3"
                  title="Save"
                >
                  <Add />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                  Appertment for sale
                  <div className="text-sm font-normal">New jersey</div>
                  <div className="text-sm font-normal">kr 4343,342,34</div>
                </div>
                <div className="flex-col p-3 font-semibold text-orange-600">
                  Private
                  <div className="text-sm font-normal mt-5 text-[#221F60]">
                    25,000m
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-3xl text-[#221F60] pl-24 mt-9 items-center justify-center font-semibold">
          Recently Published
        </div>

        <div className="items-center justify-center px-20 lg:flex">
          <div className="w-[399px] h-[554px] flex-[1] mx-auto lg:p-1 pr-14">
            <Link href="/property/individual">
              <a>
                <Image
                  loader={myLoader}
                  src="photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Evolov"
                  width="399"
                  height="554"
                  className="rounded-xl"
                />
              </a>
            </Link>

            <div className="flex justify-between">
              <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                Appertment for sale
                <div className="text-sm font-normal">New jersey</div>
                <div className="text-sm font-normal">kr 4343,342,34</div>
              </div>
              <div className="flex-col p-3 font-semibold text-orange-600">
                Private
                <div className="text-sm font-normal mt-4 text-[#221F60]">
                  25,000m
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex-[2] lg:mt-4 mt-14 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:p-6 pr-20 items-center mx-auto  content-center justify-center">
            <div className="h-[278px] mb-5">
              <div className="w-[370px] h-[209px] rounded-xl">
                <Link href="/property/individual">
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1776574/pexels-photo-1776574.jpeg"
                      alt="Evolov"
                      width="370"
                      height="209"
                      className="rounded-xl"
                    />
                  </a>
                </Link>
                <div className="flex justify-between">
                  <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                    Appertment for sale
                    <div className="text-sm font-normal">New jersey</div>
                    <div className="text-sm font-normal">kr 4343,342,34</div>
                  </div>
                  <div className="flex-col p-3 font-semibold text-orange-600">
                    Private
                    <div className="text-sm font-normal mt-5 text-[#221F60]">
                      25,000m
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[278px] mb-5">
              <div className="w-[370px] h-[209px] rounded-xl">
                <Link href="/property/individual">
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1571472/pexels-photo-1571472.jpeg"
                      alt="Evolov"
                      width="370"
                      height="209"
                      className="rounded-xl"
                    />
                  </a>
                </Link>

                <div className="flex justify-between">
                  <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                    Appertment for sale
                    <div className="text-sm font-normal">New jersey</div>
                    <div className="text-sm font-normal">kr 4343,342,34</div>
                  </div>
                  <div className="flex-col p-3 font-semibold text-orange-600">
                    Private
                    <div className="text-sm font-normal mt-5 text-[#221F60]">
                      25,000m
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[278px] mb-5">
              <div className="w-[370px] h-[209px] rounded-xl">
                <Link href="/property/company">
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/323775/pexels-photo-323775.jpeg"
                      alt="Evolov"
                      width="370"
                      height="209"
                      className="rounded-xl"
                    />
                  </a>
                </Link>
                <div className="flex justify-between">
                  <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                    Appertment for sale
                    <div className="text-sm font-normal">New jersey</div>
                    <div className="text-sm font-normal">kr 4343,342,34</div>
                  </div>
                  <div className="flex-col p-3 font-semibold text-orange-600">
                    <div className="flex">
                      <Link href="/property/individual">
                        <a>
                          <Image
                            loader={myLoader}
                            src="photos/1643384/pexels-photo-1643384.jpeg"
                            alt="Evolov"
                            width="25"
                            height="25"
                            className="rounded-full pt-7"
                          />
                        </a>
                      </Link>

                      <div className="ml-2   text-[#221F60] font-semibold">
                        Lock
                      </div>
                    </div>
                    <div className="text-sm font-normal mt-4 text-[#221F60]">
                      25,000m
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[278px] mb-5">
              <div className="w-[370px] h-[209px] rounded-xl">
                <Link href="/property/individual">
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/2251247/pexels-photo-2251247.jpeg"
                      alt="Evolov"
                      width="370"
                      height="209"
                      className="rounded-xl"
                    />
                  </a>
                </Link>
                <div className="flex justify-between">
                  <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                    Appertment for sale
                    <div className="text-sm font-normal">New jersey</div>
                    <div className="text-sm font-normal">kr 4343,342,34</div>
                  </div>
                  <div className="flex-col p-3 font-semibold text-orange-600">
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
  );
};

export default Properties;
