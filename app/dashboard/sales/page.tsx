import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardSalesPage from "@/components/pages/DashboardSalesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Sales",
  description: "Dashboard Sales",
};

const DashboardSales = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("stacksToken");
  if (!token?.value) {
    redirect("/auth/signIn");
  }
  return (
    <>
      <DashboardSalesPage />
    </>
  );
};

export default DashboardSales;
