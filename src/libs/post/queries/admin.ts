import { postRepository } from "@/repositories/post";
import { cache } from "react";

export const findPostByIdAdmin = cache(
  async (id: string) => await postRepository.findById(id)
);

export const findAllPostAdmin = cache(
  async () => await postRepository.findAll()
);
