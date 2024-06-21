"use client";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAuth } from "@/hooks/useAuth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useAuthModalStore } from "@/store/useAuthModalStore";

import { ILogin } from "@/types/auth";

interface LoginProps {
  setAuthState: (state: "login" | "forgot-password" | "register") => void;
}

export default function Login({ setAuthState }: LoginProps) {
  const router = useRouter();
  const { closeModal } = useAuthModalStore();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleForm: SubmitHandler<ILogin> = async (data) => {
    console.log(data);
    try {
      await login(data);
      closeModal();
      router.refresh();
    } catch {}
  };

  return (
    <div className=" mx-auto w-full max-w-[600px] space-y-[25px] rounded bg-white p-10">
      <h1 className="text-center text-[22px] font-semibold leading-7">Login</h1>

      <form className="space-y-4" onSubmit={handleSubmit(handleForm)}>
        <div>
          <label className="form-label">Email address</label>
          <div>
            <Input
              {...register("email")}
              type="text"
              placeholder="Email address..."
            />
          </div>
        </div>

        <div>
          <label className="form-label">Password</label>
          <div>
            <Input
              {...register("password")}
              type="password"
              placeholder="Password..."
            />
          </div>
        </div>

        <div>
          <div
            onClick={() => setAuthState("forgot-password")}
            className="cursor-pointer text-blue-500 underline transition-all duration-300 hover:text-blue-500"
          >
            Lupa Password
          </div>
        </div>
        <div className="text-center">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400"
          >
            Login
          </Button>
        </div>
      </form>

      <p className="text-lightblack text-center">
        Belum registrasi?{" "}
        <span
          onClick={() => setAuthState("register")}
          className="cursor-pointer  text-blue-400  underline transition-all duration-300 hover:text-blue-500"
        >
          Registrasi
        </span>
      </p>
    </div>
  );
}
