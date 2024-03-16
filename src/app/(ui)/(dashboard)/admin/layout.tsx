import Link from "next/link";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto flex-1 overflow-hidden py-1 font-lato">
      <header className="flex h-16 w-full items-center justify-between rounded-full border border-blue-100 bg-blue-50 px-8 text-center text-gray-900">
        <h1>Admin Dashboard</h1>

        <ul className="flex items-center justify-center gap-8">
          <li>
            <Link href="/admin">Dashboard</Link>
          </li>
          <li>
            <Link href="/admin/settings">Settings</Link>
          </li>
          <li>
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </header>

      <div className="mt-8 flex h-[calc(100%-96px)] flex-col items-center justify-start gap-6">
        {children}
      </div>
    </main>
  );
}
