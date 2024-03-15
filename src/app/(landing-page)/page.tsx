import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <h1 className="text-center text-4xl font-bold">
        Welcome to{" "}
        <a href="https://lnk.bio" className="text-blue-500">
          Lnk.bio
        </a>
      </h1>

      <p className="text-center text-xl">
        Simplify your online presence with a single, customizable link.
      </p>

      <Link
        href="/signin"
        className="rounded-lg bg-blue-500 px-8 py-4 font-bold text-white transition duration-300 hover:bg-blue-600"
      >
        Sign In &rarr;
      </Link>
    </div>
  );
}
