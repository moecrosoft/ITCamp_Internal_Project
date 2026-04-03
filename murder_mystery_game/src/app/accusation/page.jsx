import { Suspense } from "react";
import AccusationClient from "./AccusationClient";

export const dynamic = "force-dynamic";

export default function AccusationPage() {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-black" />}>
      <AccusationClient />
    </Suspense>
  );
}
