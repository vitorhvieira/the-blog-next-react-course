import { findAllPostAdmin } from "@/libs/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { DeletePostButton } from "../DeletePostButton/page";
import ErrorMessage from "../../ErrorMessage";

export async function PostListAdmin() {
  const posts = await findAllPostAdmin();

  if (posts.length <= 0)
    return <ErrorMessage content="Vamos criar um post?" contentTitle="Ei..." />;

  return (
    <div className="mb-16">
      {posts.map((post) => (
        <div
          key={post.id}
          className={clsx(
            "py-2 flex gap-2 justify-between items-center ",
            !post.published && "bg-slate-300"
          )}
        >
          <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

          {!post.published && (
            <span className="text-xs text-slate-600 italic">
              (Não publicado)
            </span>
          )}

          <DeletePostButton id={post.id} title={post.title} />
        </div>
      ))}
    </div>
  );
}
