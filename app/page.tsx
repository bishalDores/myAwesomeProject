import Navigation from "@/components/Navigation";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("stacksToken");
  if (!token?.value) {
    redirect("/auth/signUp");
  }

  return (
    <main>
      <Navigation />
    </main>
  );
}
