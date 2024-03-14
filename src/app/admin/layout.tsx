export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex w-full items-center justify-between bg-gray-200 px-4 py-8 text-center text-gray-900">
        <h1>Admin Dashboard</h1>

        <ul className="flex items-center justify-center gap-8">
          <li>
            <a href="/admin">Dashboard</a>
          </li>
          <li>
            <a href="/admin/settings">Settings</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </header>
      <div className="container relative flex h-full flex-col items-center justify-center font-lato text-white">
        {children}
      </div>

      <footer className="w-full bg-gray-200 py-8 text-center text-gray-900">
        <p>Lnk.bio - Simplify Your Links</p>
      </footer>
    </>
  );
}
