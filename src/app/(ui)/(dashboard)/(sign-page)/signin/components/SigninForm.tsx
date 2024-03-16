"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { type FormEvent } from "react";

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

      <button
        type="submit"
        className="rounded-lg bg-blue-500 px-8 py-4 text-center font-bold text-white transition duration-300 hover:bg-blue-600"
      >
        Sign In
      </button>
    </form>
  );
};
