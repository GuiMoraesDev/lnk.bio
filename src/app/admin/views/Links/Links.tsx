import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import { ManagerSection } from "./ManagerSection";

export const LinksView = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={twMerge(
        "grid h-full w-full grid-cols-3 items-center gap-4",
        className,
      )}
      {...props}
    >
      <ManagerSection className="col-span-2" />

      <PreviewSection />
    </div>
  );
};

const PreviewSection = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={twMerge(
        "flex h-full w-full flex-col items-center justify-center border-l border-gray-300",
        className,
      )}
      {...props}
    >
      <h1>preview</h1>
    </div>
  );
};
