import { PostList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen">
      <header>
        <h1 className="font-bold text-9xl text-center">Aqui é o Header</h1>
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <h1 className="font-bold text-9xl text-center">Aqui é o Footer</h1>
      </footer>
    </div>
  );
}
