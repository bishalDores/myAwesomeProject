import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardHomePage from "@/components/pages/DashboardHomePage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Home",
  description: "Dashboard Home",
};
const DashboardHome = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("stacksToken");
  if (!token?.value) {
    redirect("/auth/signIn");
  }
  return (
    <>
      <DashboardHomePage />
    </>
  );
};

export default DashboardHome;
