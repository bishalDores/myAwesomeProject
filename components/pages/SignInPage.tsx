"use client";
import Navigation from "@/components/Navigation";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { AppleIcon, AtIcon, EyeIcon, GoogleIcon, LockIcon } from "@/components/SVGs";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { postRequest } from "@/utils/httpsHandlers";
import { setLoginToken } from "@/redux/services/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import useScreenSize from "@/utils/useScreenSize";

const schema = yup
  .object({
    email: yup
      .string()
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter valid email address.")
      .required("Email is required."),
    password: yup.string().required("Password is required."),
  })
  .required();

const SignInPage = () => {
  const [remember, setRemember] = useState(false);
  const dispatch = useAppDispatch();
  const screenSize = useScreenSize();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    const response = await postRequest("login", data);
    if (response.error) {
      toast.error(response.error);
    } else {
      dispatch(setLoginToken(response.token));
    }
  };

  console.log(screenSize);
  return (
    <>
      <Navigation />
      <div
        className={`${
          screenSize.height >= 850 ? `md:h-[calc(100vh-74px)]` : `h-auto mt-8`
        } flex flex-col justify-center items-center md:w-[540px] px-4 md:px-0 md:mx-auto mt-8 md:mt-0`}
      >
        <h1 className="text-[#323B4B] text-[26px] font-bold mb-[19px]">Sign In</h1>
        <p className="text-[#8A94A6] text-[18px] font-[500] mb-[30px]">Welcome back, you’ve been missed!</p>
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
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="w-full mb-[30px]">
            <div className="relative w-full">
              <input
                className={`pl-11 pr-4 py-4 border rounded-2xl ${
                  errors.email?.message ? `border-[#FF5630] error-shadow` : "border-[#F3F3F3]"
                } w-full focus-visible:outline-none placeholder:text-[16px] placeholder:text-[#B0B7C3] font-medium`}
                placeholder="Your Email"
                {...register("email")}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <AtIcon />
              </div>
            </div>
            {errors.email?.message && (
              <small className="mt-4 block text-[#FF5630] text-[14px] font-medium">Please enter a valid email address.</small>
            )}
          </div>

          <div className="w-full mb-[30px]">
            <div className="relative w-full">
              <input
                type="password"
                className={`pl-11 pr-11 py-4 border rounded-2xl ${
                  errors.password?.message ? `border-[#FF5630] error-shadow` : "border-[#F3F3F3]"
                } w-full focus-visible:outline-none placeholder:text-[16px] placeholder:text-[#B0B7C3] font-medium`}
                placeholder="Password"
                {...register("password")}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockIcon />
              </div>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <EyeIcon />
              </div>
            </div>
            {errors.password?.message && <small className="mt-4 block text-[#FF5630] text-[14px] font-medium">Password is required.</small>}
          </div>

          <div className="flex items-start mt-[30px] w-full">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value="yes"
              className="opacity-0 absolute h-8 w-8"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
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
              Remember Me
            </label>
          </div>
          <div className="w-full">
            <Button className="my-[35px] w-full bg-[#377DFF] rounded-2xl h-12 text-white text-[16px] font-medium" type="submit">
              Sign In
            </Button>
          </div>
        </form>
        <div className="text-[#B0B7C3] text-[16px] font-medium">
          Don’t have an account yet?{" "}
          <Link href={"/auth/signUp"} className="text-[#377DFF]">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
