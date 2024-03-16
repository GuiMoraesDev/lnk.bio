import { getServerSession } from "next-auth/next";

import { SessionProvider } from "@/providers/SessionProvider";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  // eslint-disable-next-line no-console
  console.log("session", session);

  return <SessionProvider session={session}>{children}</SessionProvider>;
}
