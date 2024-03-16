import { type ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "inline-flex gap-1 items-center justify-center rounded-md text-nowrap",
  variants: {
    variant: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-200 text-gray-700",
    },
    size: {
      sm: "px-2.5 py-1.5 text-xs",
      md: "px-3 py-2 text-sm",
      lg: "px-4 py-2.5 text-base",
      xl: "px-5 py-3 text-lg",
    },
    rounded: {
      sm: "rounded-md",
      md: "rounded-lg",
      lg: "rounded-xl",
      full: "rounded-full",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    rounded: "md",
    fullWidth: false,
  },
});

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export const Button = ({
  className,
  variant,
  size,
  rounded,
  fullWidth,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonVariants({
        variant,
        rounded,
        size,
        fullWidth,
        className,
      })}
      {...props}
    />
  );
};
