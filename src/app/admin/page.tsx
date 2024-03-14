"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { twMerge } from "tailwind-merge";

import { LinksView } from "./views/Links/Links";

export default function AdminPage() {
  return (
    <main className="flex h-full w-full flex-col items-center gap-6">
      <Tabs.Root
        defaultValue="links"
        className="mt-8 inline-flex h-full w-full flex-1 flex-col px-8"
      >
        <Tabs.List className="mb-4 border-b border-gray-200">
          <Tabs.Trigger
            value="links"
            className={twMerge(
              "p-2 transition",
              "data-[state='active']:font-bold data-[state='active']:text-blue-500",
              "hover:scale-105",
            )}
          >
            Links
          </Tabs.Trigger>

          <Tabs.Trigger
            value="appearance"
            className={twMerge(
              "p-2 transition",
              "data-[state='active']:font-bold data-[state='active']:text-blue-500",
              "hover:scale-105",
            )}
          >
            Appearance
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="links" className="h-full w-full">
          <LinksView />
        </Tabs.Content>

        <Tabs.Content value="appearance" className="h-full w-full">
          <div />
        </Tabs.Content>
      </Tabs.Root>
    </main>
  );
}
