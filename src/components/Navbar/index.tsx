"use client";
import { useRouter } from "next/navigation";
import React from "react";

import { useAuth } from "@/hooks/useAuth";
import useScroll from "@/hooks/useScroll";

import AuthModal from "@/components/AuthModal";
import { links } from "./links";
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";

import { useAuthModalStore } from "@/store/useAuthModalStore";

const Header: React.FC = () => {
  const scrollPercentage = useScroll();
  const { logout, loggedIn } = useAuth();
  const { openModal } = useAuthModalStore();
  const router = useRouter();

  const handleOpenModal = () => {
    openModal("login");
  };

  const handleLogout = () => {
    logout();
    router.refresh();
  };

  return (
    <header className="w-full fixed z-50 shadow-lg">
      <nav className="flex flex-row justify-between items-center py-4 px-10 bg-[#28BCD0] shadow-xl">
        <div className="flex items-center">
          <div className="text-2xl font-bold uppercase tracking-wider text-[#F5F91E] drop-shadow-md">
            Safety <span className="text-white">Drive</span>
          </div>
        </div>
        <AuthModal />

        <div className="flex gap-6 items-center">
          {links.map(
            (link, index) =>
              ((!loggedIn && link.label === "Home") ||
                (link.label !== "Login" && loggedIn)) && (
                <NavLinks
                  key={index}
                  label={link.label}
                  href={link.href}
                  className="text-lg font-semibold transition-colors duration-300"
                />
              )
          )}
          {loggedIn ? (
            <Button
              onClick={handleLogout}
              className="rounded-full bg-[#F5F91E] px-3 md:px-5 font-semibold text-black hover:bg-green-400 text-sm py-2 shadow-lg"
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={handleOpenModal}
              className="rounded-full bg-[#F5F91E] px-3 md:px-5 font-semibold text-black hover:bg-green-400 text-sm py-2 shadow-lg"
            >
              Login
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
