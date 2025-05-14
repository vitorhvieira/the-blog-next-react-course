"use client";

import { deletePostAction } from "@/actions/delete-post-action";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { useTransition } from "react";

type Props = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: Props) {
  const [isPending, startTransistion] = useTransition();
  const handleDelete = () => {
    if (!confirm("Tem certeza?")) return;

    startTransistion(async () => {
      const result = await deletePostAction(id);

      alert(`O result é: ${result}`);
    });
  };
  return (
    <button
      className={clsx(
        "text-red-500 cursor-pointer transition",
        "[&_svg]:w-4 [&_svg]:h-4",
        "hover:scale-120 hover:text-red-700",
        "disabled:text-slate-600 disabled:cursor-not-allowed"
      )}
      aria-label={`Apagar post: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={handleDelete}
      disabled={isPending}
    >
      <Trash2Icon />
    </button>
  );
}
