"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { twMerge } from "tailwind-merge";

const TabsRoot = forwardRef<
  ElementRef<typeof TabsPrimitive.Root>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={twMerge("flex h-full flex-col", className)}
    {...props}
  />
));
TabsRoot.displayName = TabsPrimitive.Root.displayName;

const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={twMerge(
        "inline-flex h-9 w-full items-center justify-start gap-2 overflow-x-auto whitespace-nowrap",
        "mb-4 border-b border-gray-200",
        className,
      )}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={twMerge(
      "relative inline-flex h-full min-w-36 items-center justify-center whitespace-nowrap text-center text-sm text-gray-700 transition",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state='active']:text-blue-600",
      "before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:rounded-full before:bg-transparent before:transition before:content-['']",
      "data-[state='active']:before:bg-blue-400",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={twMerge("mt-2 flex-1 overflow-hidden", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export const TabNavigator = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
};
