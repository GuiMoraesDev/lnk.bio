import Image from "next/image";

export default function PreviewPage() {
  const links = [
    {
      name: "Google",
      url: "https://google.com",
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
    },
    {
      name: "GitHub",
      url: "https://github.com",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <Image
        src="/images/avatar-placeholder.png"
        alt="lnk.bio"
        width={200}
        height={200}
        className="rounded-full"
      />

      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="font-fira-sans text-2xl font-semibold">
          @guimoraes.dev
        </h1>

        <p className="text-3xl">Discover my universe 🔭</p>
      </div>

      <ul className="flex w-full flex-col items-center gap-4">
        {links.map((link) => (
          <li
            key={link.name}
            className="inline-flex w-full items-center justify-center"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border-2 border-black bg-slate-700 p-4 shadow-md shadow-black transition hover:scale-110"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
