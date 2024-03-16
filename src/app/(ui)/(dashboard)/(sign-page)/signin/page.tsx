import Link from "next/link";

import { SigninForm } from "./components/SigninForm";

export default function SigninPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">
        Sign in for{" "}
        <a href="https://lnk.bio" className="text-blue-500">
          lnk.bio
        </a>
      </h1>

      <SigninForm />

      <section className="flex flex-col items-center justify-center gap-4">
        <Link href="/signup" className="text-blue-500 hover:underline">
          Don&apos;t have an account? Sign up
        </Link>

        <Link href="/" className="text-blue-500 hover:underline">
          Return to home
        </Link>
      </section>
    </div>
  );
}
