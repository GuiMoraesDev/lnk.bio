"use client";

import { UserPlus } from "phosphor-react";

import { Button } from "@/components/atoms/Button/Button";

export const SignupForm = () => {
  return (
    <form className="flex w-full max-w-xs flex-col gap-4">
      <input
        type="text"
        placeholder="Full Name"
        className="rounded-lg border-2 border-gray-300 p-4"
      />
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
        Sign Up <UserPlus />
      </Button>
    </form>
  );
};
