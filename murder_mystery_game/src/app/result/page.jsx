"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Caesar_Dressing, Cinzel } from "next/font/google";
import { STORIES } from "@/lib/stories";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const caesarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
});

const RESULT_CONTENT = {
  sterling_estate: {
    correct: {
      title: "Sterling Solved",
      message: "You saw through the lies in the estate and named the real killer.",
    },
    wrong: {
      title: "The Estate Stays Silent",
      message: "That accusation missed the truth. The Sterling household is still hiding its murderer.",
    },
  },
  knives_out: {
    correct: {
      title: "Thrombey Truth Unraveled",
      message: "You untangled the family scheme and exposed the real mastermind behind the death.",
    },
    wrong: {
      title: "The Family Walks Free",
      message: "That accusation does not hold. The true architect of the crime still hides in the family.",
    },
  },
  sim_it_club: {
    correct: {
      title: "Case Closed",
      message: "You uncovered who poisoned Fuku and brought the truth out of the club room.",
    },
    wrong: {
      title: "Fatal Error Remains",
      message: "That choice was off the mark. The real killer is still hidden among the EXCO.",
    },
  },
};

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const storyId = searchParams.get("storyId");
  const outcome = searchParams.get("outcome");

  const story = storyId ? STORIES[storyId] : null;
  const resultConfig =
    storyId && outcome ? RESULT_CONTENT[storyId]?.[outcome] || null : null;
  const isCorrect = outcome === "correct";

  useEffect(() => {
    const currentUrl = window.location.href;
    window.history.pushState(null, "", currentUrl);

    const handlePopState = () => {
      window.history.pushState(null, "", currentUrl);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  if (!story || !resultConfig) {
    return (
      <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-black px-6 py-10 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(90,0,0,0.22),_rgba(0,0,0,0.95)_70%)]" />
        <div className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-red-900/40 bg-black/85 p-10 text-center shadow-2xl backdrop-blur-md">
          <h1 className={`${cinzel.className} text-5xl text-red-300`}>
            Result Unavailable
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            The result screen could not be loaded for this case.
          </p>
          <Link
            href="/menu"
            className={`${caesarDressing.className} mt-10 inline-block text-2xl uppercase tracking-[0.14em] text-white transition hover:text-[#B22222]`}
          >
            Back To Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-black px-6 py-10 text-white">
      <div
        className={`absolute inset-0 ${
          isCorrect
            ? "bg-[radial-gradient(circle_at_center,_rgba(28,90,40,0.28),_rgba(0,0,0,0.95)_68%)]"
            : "bg-[radial-gradient(circle_at_center,_rgba(90,0,0,0.3),_rgba(0,0,0,0.95)_68%)]"
        }`}
      />

      <div className="relative z-10 w-full max-w-3xl rounded-[2rem] border border-white/10 bg-black/85 p-10 text-center shadow-2xl backdrop-blur-md">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          {story.title}
        </p>
        <h1
          className={`${cinzel.className} mt-4 text-5xl ${
            isCorrect ? "text-emerald-300" : "text-red-300"
          }`}
        >
          {resultConfig.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-300">
          {resultConfig.message}
        </p>

        <div className="mt-10 flex items-center justify-center gap-8">
          {!isCorrect ? (
            <button
              type="button"
              onClick={() => router.replace(`/accusation?storyId=${storyId}`)}
              className={`${caesarDressing.className} text-2xl uppercase tracking-[0.14em] text-white transition hover:text-[#B22222]`}
            >
              Try Again
            </button>
          ) : null}
          <Link
            href="/menu"
            className={`${caesarDressing.className} text-2xl uppercase tracking-[0.14em] text-white transition ${
              isCorrect ? "hover:text-emerald-300" : "hover:text-[#B22222]"
            }`}
          >
            Back To Menu
          </Link>
        </div>
      </div>
    </main>
  );
}
