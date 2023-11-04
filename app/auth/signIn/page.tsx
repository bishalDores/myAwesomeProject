import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import SignInPage from "@/components/pages/SignInPage";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign In",
};

const SignIn = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("stacksToken");
  if (token?.value) {
    redirect("/");
  }

  return <SignInPage />;
};

export default SignIn;
