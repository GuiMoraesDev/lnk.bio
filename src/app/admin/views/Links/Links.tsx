import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import { ManagerSection } from "./ManagerSection";
import { PreviewSection } from "./PreviewSection";

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
