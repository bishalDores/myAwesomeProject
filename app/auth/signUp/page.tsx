import React, { useState } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SignUpPage from "@/components/pages/SignUpPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up",
};

const SignUp = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("stacksToken");
  if (token?.value) {
    redirect("/");
  }

  return <SignUpPage />;
};

export default SignUp;
