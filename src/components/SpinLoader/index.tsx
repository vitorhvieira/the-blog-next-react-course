import clsx from "clsx";

type Props = {
  className?: string;
};

export function SpinLoader({ className }: Props) {
  return (
    <div className={clsx("flex", "justify-center", "items-center", className)}>
      <div
        className={clsx(
          "w-10",
          "h-10",
          "border-4",
          "border-t-transparent",
          "rounded-full",
          "animate-spin"
        )}
      ></div>
    </div>
  );
}
