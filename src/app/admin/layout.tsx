export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex h-16 w-full items-center justify-between rounded-full bg-gray-200 px-8 text-center text-gray-900">
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

      <div className="relative flex h-[calc(100%-64px)] items-center justify-center font-lato">
        {children}
      </div>
    </>
  );
}
