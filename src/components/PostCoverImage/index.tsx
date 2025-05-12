import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type Props = {
  linkProps: React.ComponentProps<typeof Link>;
  imageProps: React.ComponentProps<typeof Image>;
};

export function PostCoverImage({ imageProps, linkProps }: Props) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "w-full",
        "h-full",
        "overflow-hidden",
        "rounded-2xl",
        linkProps.className
      )}
    >
      <Image
        {...imageProps}
        className={clsx(
          "w-full",
          "h-full",
          "object-cover",
          "object-center",
          "group-hover:scale-105",
          "transition",
          imageProps.className
        )}
        alt={imageProps.alt}
      />
    </Link>
  );
}
