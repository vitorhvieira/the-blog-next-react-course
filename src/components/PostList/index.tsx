import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/libs/post/queries";

export async function PostList() {
  const posts = await findAllPublicPosts();

  return (
    <div className="grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => (
        <div key={post.id} className="flex flex-col gap-4 group">
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
            postHeading="h2"
            postUrl={`/post/${post.slug}`}
            title={post.title}
          />
        </div>
      ))}
    </div>
  );
}
