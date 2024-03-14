import Link from "next/link";

import { SignupForm } from "./components/SignupForm";

export default function SignupPage() {
  return (
    <main className="flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold">
        Sign up for{" "}
        <a href="https://lnk.bio" className="text-blue-500">
          lnk.bio
        </a>
      </h1>

      <p className="text-lg text-gray-700">
        Create your lnk.bio account and start managing your links today!
      </p>

      <SignupForm />

      <section className="flex flex-col items-center justify-center gap-4">
        <Link href="/signin" className="text-blue-500 hover:underline">
          Already have an account? Sign in
        </Link>

        <Link href="/" className="text-blue-500 hover:underline">
          Return to home
        </Link>
      </section>
    </main>
  );
}
