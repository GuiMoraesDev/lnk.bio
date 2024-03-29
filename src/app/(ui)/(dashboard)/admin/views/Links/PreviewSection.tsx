/* import { ArrowSquareOut } from "phosphor-react"; */
import { type ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

import { type LinkProps, UserView } from "@/views/UserView";

type PreviewSectionProps = ComponentPropsWithoutRef<"div"> & {
  links: LinkProps[];
};

export const PreviewSection = ({
  links,
  className,
  ...props
}: PreviewSectionProps) => {
  return (
    <div
      className={twMerge(
        "flex h-full w-full flex-col items-start justify-start gap-8 border-l border-gray-300 px-4",
        className,
      )}
      {...props}
    >
      <h1 className="font-fira-sans text-4xl">Preview</h1>

      <div className="mx-auto flex aspect-[9/16] w-full flex-col items-center justify-start gap-4 rounded-[36px] border-[16px] border-gray-900 p-4 pt-12">
        <UserView
          avatar="https://via.placeholder.com/150"
          name="Username"
          description="User description"
          links={links}
        />
        {/* <span className="block h-16 w-16 rounded-full bg-red-300" />

        <p>@username</p>
        <small>User description</small>

        <div className="relative w-full flex-1 gap-4 overflow-y-auto overflow-x-hidden rounded-md">
          <ul className="absolute flex w-full flex-1 flex-col gap-2 pr-2">
            {links.map(({ title, url, isActive }) => {
              if (!isActive) return null;

              return (
                <a
                  className="group flex w-full cursor-pointer items-center justify-between rounded-full border border-gray-200 bg-gray-50 p-4 text-sm"
                  key={title + url}
                  href={url}
                  target="_blank"
                >
                  <section className="flex flex-col items-start justify-start">
                    <p>{title}</p>
                  </section>

                  <ArrowSquareOut
                    size={20}
                    className={twMerge("text-gray-600")}
                  />
                </a>
              );
            })}
          </ul>
        </div> */}
      </div>
    </div>
  );
};
