import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import StoreInitializer from "@/store/StoreInitializer";
import { useAuth } from "@/hooks/useAuth";
import { unstable_noStore as noStore } from "next/cache";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Safety Riding",
  description: "Safety Riding",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  noStore();

  const { fetchUser } = useAuth();
  const user = await fetchUser();

  return (
    <html lang="en">
      <body
        className={cn(
          poppins.className,
          " bg-white text-base font-normal text-black antialiased"
        )}
      >
        <StoreInitializer auth={user} />
        <main>
          <Navbar />
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
