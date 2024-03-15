import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const PreviewSection = ({
  className,
  ...props
}: ComponentProps<"div">) => {
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
