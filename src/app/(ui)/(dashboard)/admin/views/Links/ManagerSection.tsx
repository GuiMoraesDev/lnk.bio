"use client";

import { Info, Plus } from "phosphor-react";
import {
  useState,
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type FormEvent,
} from "react";
import { twMerge } from "tailwind-merge";

import { type LinkProps } from "./hooks/useLinks";

import { Button } from "@/components/atoms/Button/Button";
import { Modal } from "@/components/atoms/Modal";
import { Toggle } from "@/components/atoms/Toggle";

type ManagerSectionProps = ComponentPropsWithoutRef<"div"> & {
  links: LinkProps[];
  handleAddLink: (link: LinkProps) => void;
  handleToggleLinkStatus: (index: number) => void;
};

export const ManagerSection = ({
  links,
  handleAddLink,
  handleToggleLinkStatus,
  className,
  ...props
}: ManagerSectionProps) => {
  return (
    <div
      className={twMerge(
        "relative flex h-full flex-1 flex-col items-start justify-start gap-6 pb-2",
        className,
      )}
      {...props}
    >
      <YourLinkCard />

      <div className="flex w-full shrink-0 flex-col gap-8">
        <h1 className="font-fira-sans text-4xl">Manage your links</h1>

        <AddLinkModal onFormSubmit={handleAddLink}>
          <Plus className="h-4 w-4" />
          Add link
        </AddLinkModal>
      </div>

      <div className="relative h-full w-full gap-4 overflow-y-auto overflow-x-hidden rounded-md">
        <ul className="absolute flex w-full flex-1 flex-col gap-2 pr-2">
          {links.map((link, index) => (
            <LinkCard
              key={index}
              title={link.title}
              url={link.url}
              isActive={link.isActive}
              handleToggleLinkStatus={() => handleToggleLinkStatus(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const YourLinkCard = ({ className, ...props }: ComponentProps<"div">) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://example.com/your-link");
  };

  return (
    <div
      className={twMerge(
        "flex w-full items-center gap-4 rounded-md border border-gray-200 bg-gray-50 p-4 text-sm",
        className,
      )}
      {...props}
    >
      <Info className="h-8 w-8 text-gray-400" />

      <section className="flex w-full flex-col items-center justify-between gap-2 xl:flex-row">
        <p className="m-0 inline-flex gap-0.5">
          Your link is live in:{" "}
          <a
            href="https://example.com/your-link"
            target="__blank"
            className="text-blue-500 underline"
          >
            https://example.com/your-link
          </a>
        </p>

        <p>Share your Linktree to your socials</p>
      </section>

      <Button
        type="button"
        /* className=" rounded-md bg-blue-500 p-4 text-white" */
        onClick={handleCopyLink}
      >
        Copy link
      </Button>
    </div>
  );
};

type AddLinkModalProps = ComponentPropsWithoutRef<typeof Modal.Trigger> & {
  onFormSubmit: (link: LinkProps) => void;
};
const AddLinkModal = ({
  onFormSubmit,
  className,
  ...props
}: AddLinkModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onFormSubmit({
      title: "",
      url: "",
      isActive: true,
    });

    setIsOpen(false);
  };

  return (
    <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
      <Modal.Trigger asChild>
        <Button
          {...props}
          className={className}
          size="xl"
          rounded="full"
          fullWidth
          onClick={() => setIsOpen(true)}
        />
      </Modal.Trigger>

      <Modal.Content className="flex flex-col items-center justify-center bg-gray-50">
        <Modal.Header>
          <Modal.Title>Enter url</Modal.Title>
        </Modal.Header>

        <form
          onSubmit={onSubmit}
          className="flex w-full max-w-sm flex-col items-center justify-center gap-4"
        >
          <input
            type="text"
            placeholder="Title"
            className="w-full rounded-md border border-gray-200 p-2"
          />
          <input
            type="url"
            placeholder="Url"
            className="w-full rounded-md border border-gray-200 p-2"
          />

          <section className="flex w-full items-center gap-4">
            <Button
              variant="secondary"
              fullWidth
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>

            <Button type="submit" fullWidth>
              Add
            </Button>
          </section>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
};

type LinkCardProps = LinkProps & {
  handleToggleLinkStatus: () => void;
};
const LinkCard = ({
  handleToggleLinkStatus,
  title,
  url,
  isActive,
}: LinkCardProps) => {
  return (
    <li className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
      <section className="flex flex-col gap-1">
        <p className="text-sm font-semibold">{title}</p>
        <a
          href={url}
          target="__blank"
          className="text-sm text-blue-400 underline"
        >
          {url}
        </a>
      </section>

      <Toggle onCheckedChange={handleToggleLinkStatus} checked={isActive} />
    </li>
  );
};
