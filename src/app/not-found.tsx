import ErrorMessage from "@/components/ErrorMessage";

export default function NotFoundPage() {
  return (
    <ErrorMessage
      content="Erro 404 - Pagina não encontrada"
      contentTitle="404"
      pageTitle="Pagina não encontrada!"
    />
  );
}
