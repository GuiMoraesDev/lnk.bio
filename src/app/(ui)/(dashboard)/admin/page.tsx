"use client";

import { useSession } from "next-auth/react";

import { LinksView } from "./views/Links";

import { TabNavigator } from "@/components/atoms/TabNavigator";

export default function AdminPage() {
  const { data: session } = useSession();

  // eslint-disable-next-line no-console
  console.log(session);

  return (
    <TabNavigator.Root defaultValue="links" className="w-full px-8">
      <TabNavigator.List>
        <TabNavigator.Trigger value="links">Links</TabNavigator.Trigger>

        <TabNavigator.Trigger value="appearance">
          Appearance
        </TabNavigator.Trigger>
      </TabNavigator.List>

      <TabNavigator.Content value="links">
        <LinksView />
      </TabNavigator.Content>

      <TabNavigator.Content value="appearance">
        <div className="h-full w-full" />
      </TabNavigator.Content>
    </TabNavigator.Root>
  );
}
