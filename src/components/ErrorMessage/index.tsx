"use client";

import clsx from "clsx";

type Props = {
  pageTitle?: string;
  contentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  content,
  contentTitle,
  pageTitle = "",
}: Props) {
  return (
    <>
      {pageTitle && <title>{pageTitle}</title>}
      <div
        className={clsx(
          "min-h-[320px]",
          "bg-slate-900",
          "text-slate-100",
          "mb-16",
          "py-8",
          "rounded-xl",
          "flex",
          "justify-center",
          "items-center",
          "text-center"
        )}
      >
        <div>
          <h1 className="text-7xl/tight mb-4 font-extrabold">{contentTitle}</h1>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
