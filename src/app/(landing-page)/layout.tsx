export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container relative flex h-full flex-col items-center justify-center font-lato">
        {children}
      </div>

      <footer className="w-full bg-gray-200 py-8 text-center">
        <p>Lnk.bio - Simplify Your Links</p>
      </footer>
    </>
  );
}
