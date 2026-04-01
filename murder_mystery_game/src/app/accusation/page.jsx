"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Cinzel } from "next/font/google";
import { STORIES } from "@/lib/stories";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const CORKBOARD_ASSETS = {
  sterling_estate: "/corkboard.png",
  knives_out: "/corkboard.png",
  sim_it_club: "/corkboard.png",
};

export default function AccusationPage() {
  const searchParams = useSearchParams();
  const storyId = searchParams.get("storyId");
  const story = storyId ? STORIES[storyId] : null;
  const corkboardImage = storyId ? CORKBOARD_ASSETS[storyId] || "/corkboard.png" : "/corkboard.png";

  useEffect(() => {
    const currentUrl = window.location.href;

    // Duplicate the current accusation entry so browser-back stays on this page.
    window.history.pushState(null, "", currentUrl);

    const handlePopState = () => {
      window.history.pushState(null, "", currentUrl);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-black px-6 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,0,0,0.22),_rgba(0,0,0,0.92)_65%)]" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
        <h1 className={`${cinzel.className} text-center text-5xl tracking-[0.16em] text-red-200`}>
          Accusation Board
        </h1>
        <p className="mt-4 text-center text-sm uppercase tracking-[0.28em] text-zinc-400">
          {story?.title || "Final Decision"}
        </p>

        <div className="relative mt-10 aspect-[4/3] w-full max-w-5xl">
          <Image
            src={corkboardImage}
            alt="Accusation corkboard"
            fill
            priority
            className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          />
        </div>
      </div>
    </main>
  );
}
