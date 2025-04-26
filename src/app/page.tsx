import { Container } from "@/components/Container";
import { PostList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <header>
        <h1 className="font-bold text-6xl text-center">Aqui é o Header</h1>
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <h1 className="font-bold text-6xl text-center">Aqui é o Footer</h1>
      </footer>
    </Container>
  );
}
