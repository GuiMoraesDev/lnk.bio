import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import { useLinks } from "./hooks/useLinks";
import { ManagerSection } from "./ManagerSection";
import { PreviewSection } from "./PreviewSection";

export const LinksView = ({ className, ...props }: ComponentProps<"div">) => {
  const { links, handleAddLink } = useLinks([
    {
      title: "Google",
      url: "https://google.com",
      isActive: true,
    },
    {
      title: "Facebook",
      url: "https://facebook.com",
      isActive: true,
    },
    {
      title: "Twitter",
      url: "https://twitter.com",
      isActive: true,
    },
  ]);

  return (
    <div
      className={twMerge(
        "grid h-full w-full grid-cols-3 items-center gap-4",
        className,
      )}
      {...props}
    >
      <ManagerSection
        className="col-span-2"
        links={links}
        handleAddLink={handleAddLink}
      />

      <PreviewSection links={links} />
    </div>
  );
};
