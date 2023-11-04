"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Select, SelectItem } from "@nextui-org/react";
import { SelectorSvg } from "./SVGs";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const [lng, setLng] = useState("en");
  const router = useRouter();

  return (
    <nav className="flex justify-between pt-7 md:px-[81px] px-7 items-center h-[74px]">
      <div>
        <Image src={"/images/logo.png"} alt="logo" width={159.065} height={45.816} onClick={() => router.push("/")} className="cursor-pointer" />
      </div>

      <div>
        <Select
          className="rounded-2xl w-[146px] language-selector "
          placeholder="English (UK)"
          selectorIcon={<SelectorSvg />}
          onChange={(e) => setLng(e.target.value)}
        >
          <SelectItem key={"English (UK)"} textValue={"English (UK)"}>
            <span className="text-tiny text-default-400"> English (UK)</span>
          </SelectItem>
          <SelectItem key={"Bengali"} textValue={"Bengali"}>
            <span className="text-tiny text-default-400">Bengali</span>
          </SelectItem>
        </Select>
      </div>
    </nav>
  );
};

export default Navigation;
