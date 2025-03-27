"use client";

import dynamic from "next/dynamic";

// Import CursorWrapper with no SSR to ensure it only runs on client
const CursorWrapper = dynamic(() => import("./CursorWrapper"), {
  ssr: false,
});

export default function ClientCursorLoader() {
  return <CursorWrapper />;
}
