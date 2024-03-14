import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function AdminPage() {
  return (
    <main className="grid h-full w-full grid-cols-3 items-center gap-6">
      <ManagerSection className="col-span-2" />

      <PreviewSection />
    </main>
  );
}

const ManagerSection = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center",
        className,
      )}
      {...props}
    >
      <h1>manager</h1>
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
