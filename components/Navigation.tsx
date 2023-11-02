"use client";
import React from "react";
import Image from "next/image";
import { Select, SelectItem } from "@nextui-org/react";
import { SelectorSvg } from "./SVGs";

const Navigation = () => {
  return (
    <nav className="flex justify-between pt-7 md:px-[81px] px-7 items-center">
      <div>
        <Image src={"/images/logo.png"} alt="logo" width={159.065} height={45.816} />
      </div>

      <div>
        <Select className="rounded-2xl w-[146px] language-selector " placeholder="English (UK)" selectorIcon={<SelectorSvg />}>
          <SelectItem key={"english"} value={"english"} className="text-[12px]">
            English (UK)
          </SelectItem>
          <SelectItem key={"bengali"} value={"bengali"} className="text-[12px]">
            Bengali
          </SelectItem>
        </Select>
      </div>
    </nav>
  );
};

export default Navigation;
