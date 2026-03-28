"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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

const CHARACTER_ASSETS = {
  sterling_estate: {
    wife: "/c_assets/wife_ir.png",
    son: "/c_assets/son_ir.png",
    maid: "/c_assets/maid_ir.png",
    driver: "/c_assets/driver_ir.png",
    gardener: "/c_assets/gardener_ir.png",
  },
  knives_out: {
    nurse: "/c_assets/marta.png",
    grandson: "/c_assets/hugh.png",
    daughter: "/c_assets/lin.png",
    son: "/c_assets/walt.png",
  },
};

const CHARACTER_POSITIONS = {
  sterling_estate: {
    son: "left-[38%] top-[26%] w-[clamp(10%,25%,25%)] aspect-[3/4]",
    wife: "left-[38%] top-[37%] w-[clamp(10%,20%,20%)] aspect-[3/4]",
    maid: "left-[41%] top-[39.1%] w-[clamp(10%,18%,18%)] aspect-[3/4]",
    driver: "left-[29%] top-[34.3%] w-[clamp(10%,20%,20%)] aspect-[3/4]",
    gardener: "left-[36%] top-[29%] w-[clamp(10%,25%,25%)] aspect-[3/4]",
  },
  knives_out: {
    nurse: "left-1/2 top-[56%] w-[28rem] -translate-x-1/2 -translate-y-1/2",
  },
};


const STORY_ROUTES = {
  sterling_estate: "/caseone",
  knives_out: "/casetwo",
};

export default function InterrogationPage() {
  const searchParams = useSearchParams();
  const storyId = searchParams.get("storyId");
  const characterId = searchParams.get("characterId");

  const characterPosition =
  CHARACTER_POSITIONS[storyId]?.[characterId] ||
  "left-1/2 top-[56%] w-[28rem] -translate-x-1/2 -translate-y-1/2";

  const story = storyId ? STORIES[storyId] : null;
  const character = story && characterId ? story.characters?.[characterId] : null;
  const characterImage =
    storyId && characterId ? CHARACTER_ASSETS[storyId]?.[characterId] : null;
  const backHref = storyId ? STORY_ROUTES[storyId] || "/menu" : "/menu";

  if (!story || !character) {
    return (
      <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-black px-6 py-10 text-white">
        <Image
          src="/interrogation.png"
          alt="Interrogation room"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-xl rounded-[2rem] border border-red-900/40 bg-black/70 p-8 text-center shadow-2xl">
          <h1 className={`${cinzel.className} text-4xl text-red-400`}>
            Character not found
          </h1>
          <Link
            href={backHref}
            className={`${caesarDressing.className} mt-8 inline-block text-2xl tracking-[0.14em] text-white transition hover:text-[#B22222]`}
          >
            Back
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-dvh w-full bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[2000px] min-w-[900px] aspect-[16/9] overflow-hidden">
        <Image
          src="/interrogation.png"
          alt="Interrogation room"
          fill
          priority
          className="object-cover"
        />

        <Link
          href={backHref}
          className={`${caesarDressing.className} absolute left-6 top-6 z-20 text-3xl tracking-[0.14em] text-white transition hover:text-[#B22222] md:left-10 md:top-8`}
        >
          Back
        </Link>

        <div className={`absolute z-10  ${characterPosition}`}>
          {characterImage ? (
            <Image
              src={characterImage}
              alt={character.name}
              fill
              className="object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)]"
            />
          ) : (
            <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-dashed border-white/20 bg-black/30 text-center text-sm text-zinc-300">
              Character render not available.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
