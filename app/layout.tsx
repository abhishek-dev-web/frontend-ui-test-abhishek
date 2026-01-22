"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProfilePage = pathname.startsWith("/profile");

  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-gray-100">
        <div className="min-h-screen">
          <Sidebar />

          <div className="flex min-h-screen flex-col md:ml-64">
            {!isProfilePage && <Topbar />}

            <main className="flex-1 px-6 py-0 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}