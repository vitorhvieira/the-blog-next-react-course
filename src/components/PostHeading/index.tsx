import clsx from "clsx";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  url: string;
  as: "h1" | "h2";
};

export function PostHeading({ as: Tag, children, url }: Props) {
  const headingClassMap = {
    h1: "text-2xl/tight sm:text-4xl font-extrabold",
    h2: "text-2xl/tight font-bold",
  };

  return (
    <h1 className={clsx(headingClassMap[Tag])}>
      <Link className="hover:text-slate-600 transition" href={url}>
        {children}
      </Link>
    </h1>
  );
}
