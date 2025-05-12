import { PostDate } from "../PostDate";
import { PostHeading } from "../PostHeading";

type Props = {
  postHeading: "h1" | "h2";
  postUrl: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  createdAt,
  excerpt,
  postHeading,
  postUrl,
  title,
}: Props) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <PostDate dateTime={createdAt} />
      <PostHeading as={postHeading} url={postUrl}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
