import { findAllPublicPostsCached } from "@/libs/post/queries/public";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import ErrorMessage from "../ErrorMessage";

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();

  if (posts.length <= 0)
    return (
      <ErrorMessage
        contentTitle="Ops..."
        content="Ainda não criamos nenhum post."
      />
    );
  const post = posts[0];
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        imageProps={{
          alt: post.title,
          width: 1200,
          height: 720,
          src: post.coverImageUrl,
          priority: true,
        }}
        linkProps={{ href: `/post/${post.slug}` }}
      />
      <PostSummary
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        postHeading="h1"
        postUrl={`/post/${post.slug}`}
        title={post.title}
      />
    </section>
  );
}
