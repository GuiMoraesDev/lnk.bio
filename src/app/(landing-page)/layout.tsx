export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="container mx-auto flex-1 font-lato">{children}</main>

      <footer className="w-full bg-gray-200 py-8 text-center">
        <p>Lnk.bio - Simplify Your Links</p>
      </footer>
    </>
  );
}
