import { PostFeatured } from "@/components/PostFeatured";
import { PostList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export const dynamic = "force-static";

export default async function Home() {
  return (
    <>
      <PostFeatured />
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    </>
  );
}
