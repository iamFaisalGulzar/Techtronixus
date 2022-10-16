import React from "react";

const Details = () => {
  return (
    <>
      <hr className="mt-2 mb-4 bg-gray-400 p-[0.7px]" />
      <div
        className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:px-10">
        <div>
          <div className="mb-1 text-lg ">Kr 234,567,333</div>
          <div className="mb-2 text-sm font-semibold">Brand; Tesla</div>
          <div className="mb-2 text-sm font-semibold">Vehicle Type: Sedan</div>
          <div className="mb-2 text-sm font-semibold">Seats: 3</div>
          <div className="mb-2 text-sm font-semibold">Drivetrian: 4WD</div>
        </div>
        <div className="mt-7">
          <div className="mb-2 text-sm font-semibold">Model: 5</div>
          <div className="mb-2 text-sm font-semibold">Fuel: Electric</div>
          <div className="mb-2 text-sm font-semibold">Exterior Color:white</div>
          <div className="mb-2 text-sm font-semibold">
            Transmission: Automatic
          </div>
          <div className="mb-2 text-sm font-semibold">Exterior Color</div>
        </div>
        <div className="mt-3">
          <div className="mb-2 text-sm font-semibold">
            Max Speed: 210km/hour
          </div>
          <div className="mb-2 text-sm font-semibold">Color: Purple</div>
          <div className="mb-2 text-sm font-semibold">Condition: Used</div>
          <div className="mb-2 text-sm font-semibold">Acceleration: 3.2s</div>
        </div>
      </div>
      <hr className="mt-2 mb-4 bg-gray-400 p-[0.7px]" />
      <div className="text-sm font-normal">
        <div className="text-xl text-gray-600 mb-5 lg:px-10">Features:</div>

        <div className="flex lg:w-1/2 w-full justify-between lg:px-10">
          <div>
            <div className="mb-1 text-gray-800 font-semibold">
              Traction Control System
            </div>
            <div className="mb-1 text-gray-800 font-semibold">
              Leather interior
            </div>
            <div className="mb-1 text-gray-800 font-semibold">
              Power Steering
            </div>
            <div className="mb-1 text-gray-800 font-semibold">
              Cruise Control
            </div>
            <div className="mb-1 text-gray-800 font-semibold">
              Power Windows
            </div>
            <div className="mb-1 text-gray-800 font-semibold">Power Locks</div>
          </div>

          <div>
            <div className="mb-1 text-gray-800 font-semibold">
              Air Condition
            </div>
            <div className="mb-1 text-gray-800 font-semibold">
              Power Mirrors
            </div>
            <div className="mb-1 text-gray-800 font-semibold">Power Seats</div>
            <div className="mb-1 text-gray-800 font-semibold">
              Power Sunroof
            </div>
            <div className="mb-1 text-gray-800 font-semibold">Power Trunk</div>
            <div className="mb-1 text-gray-800 font-semibold">
              Power Antenna
            </div>
          </div>
        </div>
        <hr className="mt-4 mb-4 bg-gray-300 p-[0.7px]" />
      </div>
    </>
  );
};

export default Details;
