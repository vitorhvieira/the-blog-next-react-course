export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function AdminPostIDPage({ params }: Props) {
  const { id } = await params;
  return <div>AdminLoginPage{id}</div>;
}
