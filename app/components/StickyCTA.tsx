"use client";

import { useEffect, useState } from "react";

export default function StickyCTA({
  phoneHref,
  instagram,
}: {
  phoneHref: string;
  instagram: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 680);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-3 mb-3 rounded-2xl bg-white/95 backdrop-blur border border-blush-200 shadow-[0_-6px_30px_-10px_rgba(230,61,129,0.4)] p-2 flex gap-2">
        <a
          href={phoneHref}
          className="flex-1 text-center rounded-xl bg-gradient-to-r from-blush-600 to-blush-500 px-4 py-3 text-sm font-bold text-white"
        >
          Call or Text
        </a>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center rounded-xl gold-border text-gold-700 px-4 py-3 text-sm font-bold"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
