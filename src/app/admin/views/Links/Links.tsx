import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import { useLinks } from "./hooks/useLinks";
import { ManagerSection } from "./ManagerSection";
import { PreviewSection } from "./PreviewSection";

export const LinksView = ({ className, ...props }: ComponentProps<"div">) => {
  const { links, handleAddLink, handleToggleLinkStatus } = useLinks([
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
    {
      title: "Instagram",
      url: "https://instagram.com",
      isActive: true,
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com",
      isActive: true,
    },
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
    {
      title: "Instagram",
      url: "https://instagram.com",
      isActive: true,
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com",
      isActive: true,
    },
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
    {
      title: "Instagram",
      url: "https://instagram.com",
      isActive: true,
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com",
      isActive: true,
    },
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
    {
      title: "Instagram",
      url: "https://instagram.com",
      isActive: true,
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com",
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
