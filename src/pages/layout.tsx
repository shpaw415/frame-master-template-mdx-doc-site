import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      <header>Header test</header>
      <main>{children}</main>
      <footer>Footer test</footer>
    </div>
  );
}
