import Image from "next/image";

export type LinkProps = {
  id: string;
  title: string;
  url: string;
  isActive: boolean;
};

type UserLink = {
  avatar: string;
  name: string;
  description: string;
  links: LinkProps[];
};

export const UserView = ({ avatar, name, description, links }: UserLink) => (
  <main className="flex flex-col items-center justify-center gap-8">
    <Image
      src={avatar}
      alt={name}
      width={200}
      height={200}
      className="rounded-full"
    />

    <div className="flex flex-col items-center justify-center gap-3">
      <h1 className="font-fira-sans text-2xl font-semibold">{name}</h1>

      <p className="text-3xl">{description}</p>
    </div>

    <ul className="flex w-full flex-col items-center gap-4">
      {links.map((link) => {
        if (!link.isActive) return null;

        return (
          <li
            key={link.id}
            className="inline-flex w-full items-center justify-center"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border-2 border-black bg-slate-700 p-4 text-white shadow-md shadow-black transition hover:scale-110"
            >
              {link.title}
            </a>
          </li>
        );
      })}
    </ul>
  </main>
);
