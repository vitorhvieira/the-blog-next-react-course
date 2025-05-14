import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import { asyncDelay } from "@/utils/async-delay";
import { SIMULATE_WAIT_IN_MS } from "@/libs/constants";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
  async findAll(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    const post = await drizzleDb.query.posts.findFirst({
      where: (post, { eq }) => eq(post.id, id),
    });

    if (!post) throw new Error("Post não encontrado para ID!");

    return post;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    const post = await drizzleDb.query.posts.findFirst({
      where: (post, { and, eq }) =>
        and(eq(post.published, true), eq(post.slug, slug)),
    });

    if (!post) throw new Error("Post não encontrado para Slug!");

    return post;
  }
}
