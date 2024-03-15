import { useState } from "react";

export type LinkProps = {
  title: string;
  url: string;
  isActive: boolean;
};

export const useLinks = (initialState: LinkProps[]) => {
  const [links, setLinks] = useState<LinkProps[]>(initialState);

  const handleAddLink = (link: LinkProps) => {
    setLinks((prev) => [...prev, link]);
  };

  return {
    links,
    handleAddLink,
  };
};
