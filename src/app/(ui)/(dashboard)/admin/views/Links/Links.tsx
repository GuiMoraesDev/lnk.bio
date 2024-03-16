import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import { useLinks } from "./hooks/useLinks";
import { ManagerSection } from "./ManagerSection";
import { PreviewSection } from "./PreviewSection";

export const LinksView = ({ className, ...props }: ComponentProps<"div">) => {
  const { links, handleAddLink, handleToggleLinkStatus } = useLinks([
    {
      id: "1",
      title: "Google",
      url: "https://google.com",
      isActive: true,
    },
    {
      id: "2",
      title: "Facebook",
      url: "https://facebook.com",
      isActive: true,
    },
    {
      id: "3",
      title: "Twitter",
      url: "https://twitter.com",
      isActive: true,
    },
    {
      id: "4",
      title: "Instagram",
      url: "https://instagram.com",
      isActive: true,
    },
  ]);

  return (
    <div
      className={twMerge(
        "grid h-full w-full flex-1 grid-cols-3 items-center gap-4 overflow-hidden",
        className,
      )}
      {...props}
    >
      <ManagerSection
        className="col-span-2"
        links={links}
        handleAddLink={handleAddLink}
        handleToggleLinkStatus={handleToggleLinkStatus}
      />

      <PreviewSection links={links} />
    </div>
  );
};
