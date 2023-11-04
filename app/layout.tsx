import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";
import { UIProvidersNext } from "@/components/UIProvidersNext";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "My Awesome Project",
  description: "My awesome project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UIProvidersNext>
          <Providers>
            <Toaster closeButton={true} />
            {children}
          </Providers>
        </UIProvidersNext>
      </body>
    </html>
  );
}
