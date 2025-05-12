"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type Props = {
  error: Error;
};

export default function RootErrorPage({ error }: Props) {
  useEffect(() => {}, [error]);

  return (
    <ErrorMessage
      content="Ocorreu um erro na aplicação. Tente novamente mais tarde!"
      contentTitle="501"
      pageTitle="Internal Server Error"
    />
  );
}
