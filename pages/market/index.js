import React from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "../../components/Search/Search";
import Layout from "../../components/layout";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Market = () => {
  return (
    <div className="bg-[#F9FAFF]">
      <Layout>
        {/* A search bar. */}
        <Search />

        <div className="text-3xl text-[#221F60] pl-24 mt-9 -mb-12 font-semibold">
          Types of Listing
        </div>

        <div className="container grid items-center content-center justify-center grid-cols-1 gap-4 p-20 mx-auto lg:grid-cols-3">
          <Link href="/market/animal">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/1108099/pexels-photo-1108099.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Animals
                </div>
              </div>
            </a>
          </Link>

          <Link href="/market/art">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/20967/pexels-photo.jpg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Antique and Art
                </div>
              </div>
            </a>
          </Link>

          <Link href="/market/business-equipment">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/1029243/pexels-photo-1029243.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Business Equipment
                </div>
              </div>
            </a>
          </Link>

          <Link href="/market/sub">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/313707/pexels-photo-313707.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Clothing, Cosmetic and Accessories
                </div>
              </div>
            </a>
          </Link>

          <Link href="/market/sub">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Link href="/market/electronics">
                    <a>
                      <Image
                        loader={myLoader}
                        src="photos/1841841/pexels-photo-1841841.jpeg"
                        alt="Evolov"
                        width="345"
                        height="231"
                        className="rounded-lg"
                      />
                    </a>
                  </Link>
                </div>
                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Electronics and Appliances
                </div>
              </div>
            </a>
          </Link>

          <Link href="/market/sub">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/210881/pexels-photo-210881.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Car, Boat, MC & Plane Electronics
                </div>
              </div>
            </a>
          </Link>

          <Link href="/market/sub">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/6301180/pexels-photo-6301180.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Furniture, Interior
                </div>
              </div>
            </a>
          </Link>

          <Link href="/market/sub">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/9792165/pexels-photo-9792165.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Garden, Renovation and House
                </div>
              </div>
            </a>
          </Link>

          <Link href="/market/sub">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/1047540/pexels-photo-1047540.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Hobby, Entertainment
                </div>
              </div>
            </a>
          </Link>

          <Link href="/market/sub">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/235554/pexels-photo-235554.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Parents and Kids
                </div>
              </div>
            </a>
          </Link>

          <Link href="/market/sub">
            <a>
              <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src="photos/307008/pexels-photo-307008.jpeg"
                    alt="Evolov"
                    width="345"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  Sports and Leisure
                </div>
              </div>
            </a>
          </Link>
        </div>

        <div className="text-3xl text-[#221F60] pl-24 mt-9 items-center justify-center font-semibold">
          Recently Published
        </div>

        <div className="items-center justify-center px-20 lg:flex">
          <div className="w-[399px] h-[554px] flex-[1] mx-auto lg:p-1 pr-14">
            <Link href="/market/individual">
              <a>
                <Image
                  loader={myLoader}
                  src="photos/1020016/pexels-photo-1020016.jpeg"
                  alt="Evolov"
                  width="399"
                  height="554"
                  className="rounded-xl"
                />
              </a>
            </Link>

            <div className="flex justify-between">
              <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                lorem ipsum dolor sit
                <div className="text-sm font-normal">New jersey</div>
                <div className="text-sm font-normal">kr 4343,342,34</div>
              </div>
              <div className="flex-col p-3 font-semibold text-orange-600">
                Private
              </div>
            </div>
          </div>

          <div className="lg:flex-[2] lg:mt-4 mt-14 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:p-6 pr-20 items-center mx-auto  content-center justify-center">
            <div className="h-[278px] mb-5">
              <div className="w-[370px] h-[209px] rounded-xl">
                <Link href="/market/individual">
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
                    lorem ipsum dolor sit
                    <div className="text-sm font-normal">New jersey</div>
                    <div className="text-sm font-normal">kr 4343,342,34</div>
                  </div>
                  <div className="flex-col p-3 font-semibold text-orange-600">
                    Private
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[278px] mb-5">
              <div className="w-[370px] h-[209px] rounded-xl">
                <Link href="/market/individual">
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
                    lorem ipsum dolor sit
                    <div className="text-sm font-normal">New jersey</div>
                    <div className="text-sm font-normal">kr 4343,342,34</div>
                  </div>
                  <div className="flex-col p-3 font-semibold text-orange-600">
                    Private
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[278px] mb-5">
              <div className="w-[370px] h-[209px] rounded-xl">
                <Link href="/market/company">
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
                    lorem ipsum dolor sit
                    <div className="text-sm font-normal">New jersey</div>
                    <div className="text-sm font-normal">kr 4343,342,34</div>
                  </div>
                  <div className="flex-col p-3 font-semibold text-orange-600">
                    <div className="flex">
                      <Link href="/market/individual">
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
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[278px] mb-5">
              <div className="w-[370px] h-[209px] rounded-xl">
                <Link href="/market/individual">
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
                    lorem ipsum dolor sit
                    <div className="text-sm font-normal">New jersey</div>
                    <div className="text-sm font-normal">kr 4343,342,34</div>
                  </div>
                  <div className="flex-col p-3 font-semibold text-orange-600">
                    Private
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

export default Market;
