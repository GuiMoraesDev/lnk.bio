export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container relative flex h-full flex-col items-center justify-center font-lato text-white">
        {children}
      </div>

      <footer className="w-full bg-gray-200 py-8 text-center text-gray-900">
        <p>Lnk.bio - Simplify Your Links</p>
      </footer>
    </>
  );
}
