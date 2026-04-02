"use client";

import { useEffect } from "react";

/** Legacy path /doi-tac from production → section đối tác trên trang chủ. */
export default function DoiTacRedirectPage() {
  useEffect(() => {
    window.location.replace("/#doi-tac");
  }, []);

  return (
    <main className="mx-auto flex min-h-[40vh] max-w-lg flex-col justify-center px-6 py-16 text-center">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Đang chuyển đến mục đối tác trên trang chủ…
      </p>
    </main>
  );
}
