import { useState } from "react";

export type LinkProps = {
  title: string;
  url: string;
  isActive: boolean;
};

export const useLinks = (initialState: LinkProps[]) => {
  const [links, setLinks] = useState<LinkProps[]>(initialState);

  const handleAddLink = (link: LinkProps) => {
    setLinks((state) => {
      const setState = new Set(state);
      setState.add(link);
      return Array.from(setState);
    });
  };

  const handleToggleLinkStatus = (index: number) => {
    setLinks((state) => {
      const findIndex = state.findIndex((_, i) => i === index);

      if (findIndex === -1) {
        return state;
      }

      const newArray = Array.from(state);

      let link = newArray[findIndex];
      newArray[findIndex] = { ...link, isActive: !link.isActive };
      return [...newArray];
    });
  };

  return {
    links: Array.from(links),
    handleAddLink,
    handleToggleLinkStatus,
  };
};
