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
    nurse: "/c_assets/marta_ir.png",
    grandson: "/c_assets/hugh_ir.png",
    daughter: "/c_assets/lin_ir.png",
    son: "/c_assets/walt_ir.png",
  },
};

const STORY_ROUTES = {
  sterling_estate: "/caseone",
  knives_out: "/casetwo",
};

/*
function formatLabel(label) {
  return label
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase());
}
*/

/*
function renderCharacterValue(value) {
  if (Array.isArray(value)) {
    return (
      <ul className="space-y-2 text-sm leading-7 text-zinc-200/90">
        {value.map((item, index) => (
          <li key={`${item}-${index}`} className="border-l border-red-900/50 pl-4">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  */

  /*
  if (value && typeof value === "object") {
    return (
      <div className="space-y-3">
        {Object.entries(value).map(([key, nestedValue]) => (
          <div key={key} className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h3 className="text-xs uppercase tracking-[0.22em] text-red-300/70">
              {formatLabel(key)}
            </h3>
            <div className="mt-3">{renderCharacterValue(nestedValue)}</div>
          </div>
        ))}
      </div>
    );
  }

  return <p className="text-sm leading-7 text-zinc-200/90">{value}</p>;
}
*/

export default function InterrogationPage() {
  const searchParams = useSearchParams();
  const storyId = searchParams.get("storyId");
  const characterId = searchParams.get("characterId");

  const story = storyId ? STORIES[storyId] : null;
  const character = story && characterId ? story.characters?.[characterId] : null;
  const characterImage = storyId && characterId ? CHARACTER_ASSETS[storyId]?.[characterId] : null;
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
          <h1 className={`${cinzel.className} text-4xl text-red-400`}>Character not found</h1>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            The interrogation file could not be loaded from the selected story.
          </p>
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
    <main className="relative min-h-dvh overflow-hidden bg-black text-white">
      <Image
        src="/interrogation.png"
        alt="Interrogation room"
        fill
        priority
        className="object-cover"
      />
      {characterImage ? (
              <div className="relative z-10 h-full w-full max-w-[22rem]">
                <Image
                  src={characterImage}
                  alt={character.name}
                  fill
                  className="object-contain object-bottom drop-shadow-[0_25px_40px_rgba(0,0,0,0.75)]"
                />
              </div>
            ) : (
              <div className="relative z-10 flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-white/20 text-center text-sm text-zinc-400">
                Character render not available.
              </div>
            )}
    
            {/*
            <Link
              href={backHref}
              className={`${caesarDressing.className} text-2xl tracking-[0.14em] text-white transition hover:text-[#B22222]`}
            >
              Back
            </Link>
            */}

            
            
          
          {/*
          <div className="mt-6 grid max-h-[75vh] gap-4 overflow-y-auto pr-2">
            {Object.entries(character).map(([key, value]) => (
              <section
                key={key}
                className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5"
              >
                <h3 className="text-xs uppercase tracking-[0.24em] text-red-300/70">
                  {formatLabel(key)}
                </h3>
                <div className="mt-3">{renderCharacterValue(value)}</div>
              </section>
            ))}
          </div>
          */}
    </main>
  );
}
