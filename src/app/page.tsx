import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className=" flex-grow flex items-center justify-center p-6">
        <div className="bg-slate-200 p-12 rounded-lg shadow-lg max-w-4xl w-full flex items-center justify-center border-4 border-sky-300">

          {/*Background Image */}

          <div className="absolute inset-0 flex  items-center justify-center">
            <div className="relative w-full h-full max-w-[350px] max-h-[400px]">
              <Image
                src={"/images/bgpic.jpg"}
                alt="Backgound Image"
                width={400}
                height={300}
                objectFit="cover"
                className="opacity-10"
              />
            </div>
          </div>

          {/*Left Section */}

          <div className="w-2/3 pr-4 pt-16 relative z-10">
            {/*Logo */}
            <Image
              src={"/images/logo.jpeg"}
              alt="Logo"
              width={60}
              height={30}
              className="absolute top-[1px] left-0 w-18 h-18 z-10"
            />

            <p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>Name:</strong>
              </span>
              <span className="text-black"> Muhammad Arsalan</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>Roll No:</strong>
              </span>
              <span className="text-black"> 00156716</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>Distance learning:</strong>
              </span>
              <span className="text-black"> No</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>City:</strong>
              </span>
              <span className="text-black"> Karachi</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>Center:</strong>
              </span>
              <span className="text-black"> Governer House Karachi</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>Campus:</strong>
              </span>
              <span className="text-black"> Main</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>Days/Time:</strong>
              </span>
              <span className="text-black"> Saturday - 02:00PM - 05:00PM</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>Batch</strong>
              </span>
              <span className="text-black"> 1</span>
            </p>

            {/*Button Section */}

            <div className="flex flex-col mt-4">
              <button className="relative w-full p-1 rounded-lg border-gray-300 bg-blue-900 text-white items-center justify-center flex">
                <span
                  className="absolute inset-0 bg-slate-500"
                  style={{ width: "50%" }}
                ></span>
                <span className="relative z-10">Q1 & WMD</span>
              </button>
            </div>
          </div>

          {/*Right Section */}
          
          <div className="w-1/3 text-center relative z-10">
            <Image
              src={"/images/mypic.jpg"}
              alt="My Pic"
              width={800}
              height={800}
              className="rounded-lg mb-6 w-full"
            />
            <p className="border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-10 text-2xl">
              Authorized Signature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}