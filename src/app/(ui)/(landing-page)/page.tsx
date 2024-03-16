import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <main className="container mx-auto flex-1 font-lato">
        <header className="flex h-16 w-full items-center justify-between rounded-full border border-blue-100 bg-blue-50 px-8 text-center text-gray-900">
          <Link href="/">
            <h1>Lnk.Bio</h1>
          </Link>

          <ul className="flex items-center justify-center gap-8">
            <li>
              <Link href="/signin">Sign In &rarr;</Link>
            </li>
          </ul>
        </header>

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
        </div>
      </main>

      <footer className="w-full bg-gray-200 py-8 text-center">
        <p>Lnk.bio - Simplify Your Links</p>
      </footer>
    </>
  );
}
