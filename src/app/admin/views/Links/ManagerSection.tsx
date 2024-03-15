"use client";

import { Plus } from "phosphor-react";
import {
  useState,
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type FormEvent,
} from "react";
import { twMerge } from "tailwind-merge";

import { type LinkProps } from "./hooks/useLinks";

import { Modal } from "@/components/atoms/Modal";

type ManagerSectionProps = ComponentPropsWithoutRef<"div"> & {
  links: LinkProps[];
  handleAddLink: (link: LinkProps) => void;
};

export const ManagerSection = ({
  links,
  handleAddLink,
  className,
  ...props
}: ManagerSectionProps) => {
  return (
    <div
      className={twMerge(
        "relative flex h-full flex-col items-start justify-start gap-6",
        className,
      )}
      {...props}
    >
      <YourLinkCard />

      <div className="flex w-full flex-col gap-8">
        <h1 className="font-fira-sans text-4xl">Manage your links</h1>

        <AddLinkModal onFormSubmit={handleAddLink}>
          <Plus className="h-4 w-4" />
          Add link
        </AddLinkModal>
      </div>

      <ul className="flex w-full flex-col gap-4">
        {links.map((link, index) => (
          <LinkCard
            key={index}
            title={link.title}
            url={link.url}
            isActive={link.isActive}
          />
        ))}
      </ul>
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
        "flex w-full gap-4 rounded-md border border-gray-200 bg-gray-50 p-4 text-sm",
        className,
      )}
      {...props}
    >
      <section className="flex w-full flex-col items-center justify-between gap-2 md:flex-row">
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

      <button
        type="button"
        className="text-nowrap rounded-md bg-blue-500 p-4 text-white"
        onClick={handleCopyLink}
      >
        Copy link
      </button>
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
      <Modal.Trigger
        className={twMerge(
          "inline-flex w-full items-center justify-center gap-1 rounded-full bg-blue-700 p-4 text-white",
          className,
        )}
        onClick={() => setIsOpen(true)}
        {...props}
      />

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
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-md border border-gray-400 bg-gray-200 p-2 text-gray-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full rounded-md bg-blue-500 p-2 text-white"
            >
              Add
            </button>
          </section>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
};

const LinkCard = ({ title, url, isActive }: LinkProps) => {
  return (
    <li className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-gray-50 p-5">
      <section className="flex flex-col gap-2">
        <p>{title}</p>
        <p>{url}</p>
      </section>

      <button type="button" className="rounded-md bg-blue-500 p-2 text-white">
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </li>
  );
};
