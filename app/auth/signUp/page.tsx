"use client";
import Navigation from "@/components/Navigation";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { AppleIcon, AtIcon, EyeIcon, GoogleIcon, GreenBar, GreyBar, LockIcon, Smiley } from "@/components/SVGs";
import Link from "next/link";

const SignUpPage = () => {
  const [length, setLength] = useState(6);

  const checkPasswordStrength = () => {
    switch (length) {
      case 1:
        return (
          <div className="w-full flex justify-between">
            <GreenBar />
            <GreyBar />
            <GreyBar />
            <GreyBar />
            <GreyBar />
            <GreyBar />
          </div>
        );
      case 2:
        return (
          <div className="w-full flex justify-between">
            <GreenBar />
            <GreenBar />
            <GreyBar />
            <GreyBar />
            <GreyBar />
            <GreyBar />
          </div>
        );
      case 3:
        return (
          <div className="w-full flex justify-between">
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreyBar />
            <GreyBar />
            <GreyBar />
          </div>
        );
      case 4:
        return (
          <div className="w-full flex justify-between">
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreyBar />
            <GreyBar />
          </div>
        );
      case 5:
        return (
          <div className="w-full flex justify-between">
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreyBar />
          </div>
        );
      case 6:
        return (
          <div className="w-full flex justify-between">
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreenBar />
          </div>
        );
      default:
        <div className="w-full flex justify-between">
          <GreenBar />
          <GreenBar />
          <GreenBar />
          <GreenBar />
          <GreenBar />
          <GreenBar />
        </div>;
    }
  };
  return (
    <>
      <Navigation />
      <div className="md:h-[calc(100vh-74px)] flex flex-col justify-center items-center md:w-[540px] px-4 md:px-0 md:mx-auto">
        <h1 className="text-[#323B4B] text-[26px] font-bold mb-[19px]">Getting Started</h1>
        <p className="text-[#8A94A6] text-[18px] font-[500] mb-[30px]">Create an account to continue!</p>
        <div className="flex justify-between sm:flex-row flex-col">
          <Button
            variant="bordered"
            startContent={<GoogleIcon />}
            className="w-[255px] h-[58px] bg-[#F0F5FA] border-0 rounded-2xl text-[#8A94A6] text-[16px] font-medium sm:mr-[30px] mb-5 sm:mb-0"
          >
            Sign Up with Google
          </Button>
          <Button
            variant="bordered"
            startContent={<AppleIcon />}
            className="w-[255px] h-[58px] bg-[#F0F5FA] border-0 rounded-2xl text-[#8A94A6] text-[16px] font-medium"
          >
            Sign Up with Apple ID
          </Button>
        </div>
        <div className="text-center my-[30px] text-[#B0B7C3] text-[20px] font-medium relative after:content-[''] after:absolute after:top-[14px] after:left-[54px] after:w-[100px] after:md:w-[230px] after:h-[2px] after:bg-[#F0F5FA] before:content-[''] before:absolute before:top-[14px] before:right-[54px] before:w-[100px] before:md:w-[230px] before:h-[2px] before:bg-[#F0F5FA]">
          OR
        </div>

        <div className="w-full mb-[30px]">
          <div className="relative w-full">
            <input
              type="text"
              className="pl-11 pr-4 py-4 border rounded-2xl border-[#F3F3F3] w-full focus-visible:outline-none placeholder:text-[16px] placeholder:text-[#B0B7C3] font-medium"
              placeholder="Your Email"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AtIcon />
            </div>
          </div>
          <small className="mt-4 block text-[#FF5630] text-[14px] font-medium">Please enter a valid email address.</small>
        </div>
        <div className="w-full mb-[30px]">
          <div className="relative w-full">
            <input
              type="text"
              className="pl-11 pr-4 py-4 border rounded-2xl border-[#F3F3F3] w-full focus-visible:outline-none placeholder:text-[16px] placeholder:text-[#B0B7C3] font-medium"
              placeholder="Your Name"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Smiley />
            </div>
          </div>
          {/* <small className="mt-4 block text-[#FF5630] text-[14px] font-medium">Please enter a valid email address.</small> */}
        </div>

        <div className="w-full mb-[30px]">
          <div className="relative w-full">
            <input
              type="text"
              className="pl-11 pr-11 py-4 border rounded-2xl border-[#F3F3F3] w-full focus-visible:outline-none placeholder:text-[16px] placeholder:text-[#B0B7C3] font-medium"
              placeholder="Create Password"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LockIcon />
            </div>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
              <EyeIcon />
            </div>
          </div>
          {/* <small className="mt-4 block text-[#FF5630] text-[14px] font-medium">Please enter a valid email address.</small> */}
        </div>

        {checkPasswordStrength()}

        <div className="flex items-start mt-[30px] w-full">
          <input type="checkbox" id="terms" name="terms" value="yes" className="opacity-0 absolute h-8 w-8" />
          <div className="bg-[#EDEFF1] border-2 rounded-lg w-7 h-7 flex flex-shrink-0 justify-center items-center mr-2 ">
            <svg
              className="fill-current hidden w-3 h-3 text-black pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(-9 -11)" fill="#000000" fill-rule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label htmlFor="terms" className="select-none text-[#B0B7C3] text-[16px] font-medium">
            I agree to the Terms & Conditions
          </label>
        </div>
        <div className="w-full">
          <Button className="my-[35px] w-full bg-[#377DFF] rounded-2xl h-12 text-white text-[16px] font-medium">Sign Up</Button>
        </div>
        <div className="text-[#B0B7C3] text-[16px] font-medium">
          Already have an account ?{" "}
          <Link href={"/auth/signIn"} className="text-[#377DFF]">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
