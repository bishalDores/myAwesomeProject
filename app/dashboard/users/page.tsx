import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardUsersPage from "@/components/pages/DashboardUsersPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Users",
  description: "Dashboard Users",
};

const DashboardUsers = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("stacksToken");
  if (!token?.value) {
    redirect("/auth/signIn");
  }
  return (
    <>
      <DashboardUsersPage />
    </>
  );
};

export default DashboardUsers;
