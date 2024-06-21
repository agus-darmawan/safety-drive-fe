"use client";
import React from "react";
import { GoX } from "react-icons/go";

import { useAuthModalStore } from "@/store/useAuthModalStore";

import ForgotPassword from "./forgot-password";
import Login from "./login";
import Register from "./register";

const AuthModal: React.FC = () => {
  const { isOpen, authState, closeModal, setAuthState } = useAuthModalStore();

  const renderComponent = () => {
    switch (authState) {
      case "login":
        return <Login setAuthState={setAuthState} />;
      case "forgot-password":
        return <ForgotPassword setAuthState={setAuthState} />;
      case "register":
        return <Register setAuthState={setAuthState} />;
      default:
        return null;
    }
  };
  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md rounded-lg bg-white shadow-lg">
        <div className="flex justify-end p-2">
          <GoX
            onClick={closeModal}
            size={25}
            className="cursor-pointer text-gray-600 hover:text-gray-900"
          />
        </div>
        {renderComponent()}
      </div>
    </div>
  );
};

export default AuthModal;
