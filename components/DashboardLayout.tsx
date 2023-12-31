"use client";

import React from "react";
import Image from "next/image";
import { DashboardIcon, NotificationIcon, SalesIcon, SearchIcon, UserIcon } from "./SVGs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { removeToken } from "@/redux/services/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";

const DashboardMenu = [
  { title: "Home", icon: <DashboardIcon />, route: "/dashboard/home" },
  { title: "Users", icon: <UserIcon />, route: "/dashboard/users" },
  { title: "Sales", icon: <SalesIcon />, route: "/dashboard/sales" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logoutHandler = () => {
    dispatch(removeToken());
    router.push("/");
  };

  return (
    <>
      <div className="h-full fixed z-[1] top-0 left-0 overflow-x-hidden w-[270px] border border-r-[#F3F3F3] pt-[31px] pl-[34px] pr-[16px] lg:translate-x-[0%] translate-x-[-100%] transition">
        <Image src={"/images/logo.png"} alt="logo" width={159.065} height={45.816} className="mb-[42px]" />
        <div>
          <h3 className="uppercase text-[#B0B7C3] text-[12px] font-medium tracking-[0.84px] mb-[28px]">pages</h3>

          <div>
            <ul>
              {DashboardMenu.map((menu, id) => {
                return (
                  <li key={id}>
                    <Link
                      href={menu.route}
                      className={`flex items-center text-[#A7AFBC] text-[14px] font-medium  py-[17px] pl-[17px] rounded-xl hover:bg-[#F0F5FA] transition-all ${
                        menu.title.toLowerCase() === pathname.split("/")[2] ? "active" : ""
                      }`}
                    >
                      <span className="mr-[12px]">{menu.icon}</span> {menu.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:ml-[270px] ml-0  pl-[38px] pr-[35px]">
        <div className="pt-[23px] mb-[48px] flex justify-between items-center">
          {/* //search input */}
          <div className="md:w-[539px] w-[200px]">
            <div className="relative w-full">
              <input
                type="text"
                className={`pl-6 pr-11 py-[0.9rem] rounded-[14px] bg-[#F0F5FA] w-full focus-visible:outline-none placeholder:text-[14px] placeholder:text-[#B0B7C3] font-medium`}
                placeholder="Search"
              />

              <div className="absolute inset-y-0 right-0 pr-6 flex items-center cursor-pointer">
                <SearchIcon />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <NotificationIcon />

              <div className="pl-[43px] cursor-pointer">
                <Dropdown>
                  <DropdownTrigger>
                    <Image src={"/images/user.png"} alt="user" width={47} height={47} className="rounded-full" />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="faded">
                    <DropdownItem key="home" startContent={<DashboardIcon />}>
                      <span className="text-[12px]">
                        <Link href={"/dashboard/home"}>Home</Link>
                      </span>
                    </DropdownItem>
                    <DropdownItem key="home" startContent={<UserIcon />}>
                      <span className="text-[12px]">
                        <Link href={"/dashboard/users"}>Users</Link>
                      </span>
                    </DropdownItem>
                    <DropdownItem key="home" startContent={<SalesIcon />}>
                      <span className="text-[12px]">
                        <Link href={"/dashboard/sales"}>Sales</Link>
                      </span>
                    </DropdownItem>

                    <DropdownItem key="log-out" startContent={<CiLogout />}>
                      <span className="text-[12px]" onClick={logoutHandler}>
                        Log Out
                      </span>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
