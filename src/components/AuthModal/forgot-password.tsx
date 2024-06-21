"use client";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAuth } from "@/hooks/useAuth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useAuthModalStore } from "@/store/useAuthModalStore";

import { IForgotPassword } from "@/types/auth";

interface ForgotPasswordProps {
  setAuthState: (state: "login" | "forgot-password" | "register") => void;
}

export default function ForgotPassword({ setAuthState }: ForgotPasswordProps) {
  const { closeModal } = useAuthModalStore();
  const router = useRouter();
  const { forgotPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<IForgotPassword>({
    defaultValues: {
      email: "",
    },
  });

  const handleForm: SubmitHandler<IForgotPassword> = async (data) => {
    try {
      await forgotPassword(data);
      closeModal();
    } catch {}
  };

  return (
    <div className="mx-auto w-full max-w-[600px] space-y-[25px] rounded bg-white p-10">
      <h1 className="text-center text-[22px] font-semibold leading-7">
        Forgot password
      </h1>

      <form className="space-y-4" onSubmit={handleSubmit(handleForm)}>
        <div>
          <label className="form-label">
            Forgotten your password? Enter your e-mail address below, and we
            send you an e-mail allowing you to reset it.
          </label>
          <div className="mt-2">
            <Input
              {...register("email")}
              type="text"
              placeholder="Email address..."
            />
          </div>
        </div>
        <div className="text-center">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400"
          >
            Forgot Password
          </Button>
        </div>
      </form>

      <p className="text-lightblack text-center">
        <div
          onClick={() => setAuthState("register")}
          className="cursor-pointer text-blue-400 underline transition-all duration-300 hover:text-blue-500"
        >
          Sign in
        </div>
      </p>
    </div>
  );
}
