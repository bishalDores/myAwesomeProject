import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardUsersPage from "@/components/pages/DashboardUsersPage";

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
