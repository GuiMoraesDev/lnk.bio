"use client";

import { LinksView } from "./views/Links";

import { TabNavigator } from "@/components/atoms/TabNavigator";

export default function AdminPage() {
  return (
    <TabNavigator.Root defaultValue="links" className="px-8">
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
        <div />
      </TabNavigator.Content>
    </TabNavigator.Root>
  );
}
