import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Add from "../../components/Favorite/Add";
import Link from "next/link";
import Search from "../../components/Search/Search";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const VehicleData = [
  {
    id: 1,
    imageUrl: "photos/2942172/pexels-photo-2942172.jpeg",
    nameOfVehicle: "Bus",
  },
  {
    id: 2,
    imageUrl: "photos/112460/pexels-photo-112460.jpeg",
    nameOfVehicle: "Car",
  },
  {
    id: 3,
    imageUrl: "photos/6271392/pexels-photo-6271392.jpeg",
    nameOfVehicle: "Camping",
  },
  {
    id: 4,
    imageUrl: "photos/1119796/pexels-photo-1119796.jpeg",
    nameOfVehicle: "Moterbike",
  },
  {
    id: 5,
    imageUrl: "photos/11053640/pexels-photo-11053640.jpeg",
    nameOfVehicle: "Truck",
  },
  {
    id: 6,
    imageUrl: "photos/924676/pexels-photo-924676.jpeg",
    nameOfVehicle: "Working Machine",
  },
];

const ForSaleVehicleData = [
  {
    id: 1,
    typeOfVehicle: "Car",
    kiloMetersUsed: 3445,
    location: "New jersey",
    type: "Private",
    price: 342342,
    imageUrl: "photos/112460/pexels-photo-112460.jpeg",
  },
  {
    id: 2,
    typeOfVehicle: "Car",
    kiloMetersUsed: 3445,
    location: "New jersey",
    type: "Private",
    price: 342342,
    imageUrl: "photos/112460/pexels-photo-112460.jpeg",
  },
  {
    id: 3,
    typeOfVehicle: "Bus",
    kiloMetersUsed: 3445,
    location: "New jersey",
    type: "Private",
    price: 342342,
    imageUrl: "photos/2942172/pexels-photo-2942172.jpeg",
  },
  {
    id: 4,
    typeOfVehicle: "Car",
    kiloMetersUsed: 3445,
    location: "New jersey",
    type: "Private",
    price: 342342,
    imageUrl: "photos/112460/pexels-photo-112460.jpeg",
  },
];

const RecentlyPublishedVehicleData = [
  {
    id: 1,
    typeOfVehicle: "Car",
    kiloMetersUsed: 3445,
    location: "New jersey",
    type: "Private",
    price: 342342,
    imageUrl: "photos/112460/pexels-photo-112460.jpeg",
  },
  {
    id: 2,
    typeOfVehicle: "Car",
    kiloMetersUsed: 3445,
    location: "New jersey",
    type: "Private",
    price: 342342,
    imageUrl: "photos/112460/pexels-photo-112460.jpeg",
  },
  {
    id: 3,
    typeOfVehicle: "Bus",
    kiloMetersUsed: 3445,
    location: "New jersey",
    type: "Private",
    price: 342342,
    imageUrl: "photos/2942172/pexels-photo-2942172.jpeg",
  },
  {
    id: 4,
    typeOfVehicle: "Car",
    kiloMetersUsed: 3445,
    location: "New jersey",
    type: "Private",
    price: 342342,
    imageUrl: "photos/112460/pexels-photo-112460.jpeg",
  },
];

const Vehicle = () => {
  return (
    <div className="bg-[#F9FAFF]">
      <Layout>
        {/* A search bar. */}
        <Search />

        <div className="text-3xl text-[#221F60] pl-24 mt-9 -mb-12 font-semibold">
          Types of Listing
        </div>

        <div className="container grid items-center content-center justify-center grid-cols-1 gap-4 p-20 mx-auto lg:grid-cols-3">
          {VehicleData.map((vehicle) => (
            <Link key={vehicle.id} href="/vehicle/sub">
              <a>
                <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
                  <div>
                    <Image
                      loader={myLoader}
                      src={vehicle.imageUrl}
                      alt={vehicle.nameOfVehicle}
                      width="345"
                      height="231"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                    {vehicle.nameOfVehicle}
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>

        <div className="text-3xl text-[#221F60] pl-24 mt-9 font-semibold -mb-10">
          Random Listing
        </div>

        <div className="container relative grid items-center content-center justify-center grid-cols-1 gap-4 p-20 mx-auto lg:grid-cols-3 ">
          {ForSaleVehicleData.map((vehicle) => (
            <div
              key={vehicle.id}
              className="w-[345px] h-[231px] shadow-lg rounded-xl mb-20 cursor-pointer relative"
            >
              <div>
                <Link href="/vehicle/individual">
                  <a>
                    <Image
                      loader={myLoader}
                      src={vehicle.imageUrl}
                      alt={vehicle.typeOfVehicle}
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
                  {vehicle.typeOfVehicle} for sale
                  <div className="text-sm font-normal">{vehicle.location}</div>
                  <div className="text-sm font-normal">kr {vehicle.price}</div>
                </div>
                <div className="flex-col p-3 font-semibold text-orange-600">
                  {vehicle.type}
                  <div className="text-sm font-normal mt-5 text-[#221F60]">
                    {vehicle.kiloMetersUsed}km
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-3xl text-[#221F60] pl-24 mt-9 items-center justify-center font-semibold">
          Recently Published
        </div>

        <div className="items-center justify-center px-20 lg:flex">
          <div className="w-[399px] h-[554px] flex-[1] mx-auto lg:p-1 pr-14">
            <Image
              loader={myLoader}
              src="photos/2121121/pexels-photo-2121121.jpeg"
              alt="Evolov"
              width="399"
              height="554"
              className="rounded-xl"
            />

            <div className="flex justify-between">
              <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                Car for sale
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
            {RecentlyPublishedVehicleData.map((vehicle) => (
              <div
                key={vehicle.id}
                className="w-[399px] h-[554px] flex-[1] mx-auto lg:p-1 pr-14"
              >
                <Image
                  loader={myLoader}
                  src={vehicle.imageUrl}
                  alt={vehicle.typeOfVehicle}
                  width="399"
                  height="554"
                  className="rounded-xl"
                />

                <div className="flex justify-between">
                  <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                    {vehicle.typeOfVehicle} for sale
                    <div className="text-sm font-normal">
                      {vehicle.location}
                    </div>
                    <div className="text-sm font-normal">
                      kr {vehicle.price}
                    </div>
                  </div>
                  <div className="flex-col p-3 font-semibold text-orange-600">
                    {vehicle.type}
                    <div className="text-sm font-normal mt-4 text-[#221F60]">
                      {vehicle.kiloMetersUsed}km
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="h-[278px] mb-5">
              <div className="w-[370px] h-[209px] rounded-xl">
                <Image
                  loader={myLoader}
                  src="photos/305070/pexels-photo-305070.jpeg"
                  alt="Evolov"
                  width="370"
                  height="209"
                  className="rounded-xl"
                />
                <div className="flex justify-between">
                  <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                    Car for sale
                    <div className="text-sm font-normal">New jersey</div>
                    <div className="text-sm font-normal">kr 4343,342,34</div>
                  </div>
                  <div className="flex-col p-3 font-semibold text-orange-600">
                    <div className="flex">
                      <Link href="/vehicle/individual">
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
                <Image
                  loader={myLoader}
                  src="photos/305070/pexels-photo-305070.jpeg"
                  alt="Evolov"
                  width="370"
                  height="209"
                  className="rounded-xl"
                />
                <div className="flex justify-between">
                  <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                    Car for sale
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

export default Vehicle;
