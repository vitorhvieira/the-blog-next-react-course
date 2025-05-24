"use client";

import clsx from "clsx";
import {
  CircleXIcon,
  FileTextIcon,
  HomeIcon,
  MenuIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navClass = clsx(
    "bg-slate-900 text-slate-100 rounded-lg flex flex-col mb-8 sm:flex-row sm:flex-wrap",
    !isOpen && "h-10",
    !isOpen && "overflow-hidden",
    "sm:overflow-visible sm:h-auto"
  );
  const linkClass = clsx(
    "[&>svg]:w-[16px] [&>svg]:h-[16px] px-4 flex items-center gap-2 transition cursor-pointer hover:bg-slate-800 rounded-lg h-10 shrink-0"
  );
  const openCloseBtnClasses = clsx(linkClass, "text-blue-200 italic sm:hidden");
  return (
    <nav className={navClass}>
      <button
        className={openCloseBtnClasses}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <>
            <CircleXIcon />
            Fechar
          </>
        ) : (
          <>
            <MenuIcon />
            Menu
          </>
        )}
      </button>
      <a className={linkClass} href="/" target="_blank">
        <HomeIcon />
        Home
      </a>
      <Link className={linkClass} href="/admin/post">
        <FileTextIcon />
        Posts
      </Link>
      <Link className={linkClass} href="/admin/post/new">
        <PlusIcon />
        Criar post
      </Link>
    </nav>
  );
}
