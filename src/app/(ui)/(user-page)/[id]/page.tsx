import { type LinkProps, UserView } from "@/views/UserView";

export default function PreviewPage() {
  const links: LinkProps[] = [
    {
      id: "1",
      title: "Google",
      url: "https://google.com",
      isActive: true,
    },
    {
      id: "2",
      title: "Facebook",
      url: "https://facebook.com",
      isActive: true,
    },
    {
      id: "3",
      title: "Twitter",
      url: "https://twitter.com",
      isActive: true,
    },
    {
      id: "4",
      title: "Instagram",
      url: "https://instagram.com",
      isActive: true,
    },
  ];

  return (
    <UserView
      avatar="https://via.placeholder.com/150"
      name="Username"
      description="User description"
      links={links}
    />
  );
}
