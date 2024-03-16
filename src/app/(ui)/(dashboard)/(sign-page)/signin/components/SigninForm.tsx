"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { SignIn } from "phosphor-react";
import { type FormEvent } from "react";

import { Button } from "@/components/atoms/Button/Button";

export const SigninForm = () => {
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await signIn("credentials", {
      email: "",
      password: "",
      redirect: false,
    });

    router.push("/admin");
  };

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-xs flex-col gap-4">
      <input
        type="email"
        placeholder="Email Address"
        className="rounded-lg border-2 border-gray-300 p-4"
      />
      <input
        type="password"
        placeholder="Password"
        className="rounded-lg border-2 border-gray-300 p-4"
      />

      <Button type="submit" size="xl">
        Sign In <SignIn />
      </Button>
    </form>
  );
};
