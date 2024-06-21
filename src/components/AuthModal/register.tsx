"use client";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAuth } from "@/hooks/useAuth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useAuthModalStore } from "@/store/useAuthModalStore";

import { IRegister } from "@/types/auth";

interface RegisterProps {
  setAuthState: (state: "login" | "forgot-password" | "register") => void;
}

export default function Register({ setAuthState }: RegisterProps) {
  const router = useRouter();
  const { register: signup } = useAuth();
  const { closeModal } = useAuthModalStore();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<IRegister>({
    defaultValues: {
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const handleForm: SubmitHandler<IRegister> = async (data) => {
    console.log(data);

    try {
      await signup(data);
      closeModal();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto w-full max-w-[600px] space-y-[25px] rounded bg-white p-10">
      <h1 className="text-center text-[22px] font-semibold leading-7">
        Registrasi
      </h1>

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
          <label className="form-label">Confirm password</label>
          <div>
            <Input
              {...register("password_confirmation")}
              type="password"
              placeholder="Password..."
            />
          </div>
        </div>

        <div className="text-center">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-[#28BCD0]  hover:bg-[#28BCD0]/80"
          >
            Register
          </Button>
        </div>
      </form>

      <p className="text-lightblack text-center">
        Sudah memiliki akun?{" "}
        <div
          onClick={() => setAuthState("login")}
          className="duration-30 inline-block cursor-pointer text-blue-400 underline transition-all hover:text-blue-500"
        >
          Login
        </div>
        .
      </p>
    </div>
  );
}
