import { PostListAdmin } from "@/components/admin/PostListAdmin/page";
import { SpinLoader } from "@/components/SpinLoader";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Post Admin",
};

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader />}>
      <PostListAdmin />
    </Suspense>
  );
}
