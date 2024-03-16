"use client";

import {
  SessionProvider as NextAuthSessionProvider,
  type SessionProviderProps,
} from "next-auth/react";

export const SessionProvider = (props: SessionProviderProps) => {
  return <NextAuthSessionProvider {...props} />;
};
