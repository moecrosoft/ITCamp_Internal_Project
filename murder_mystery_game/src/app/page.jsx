import Link from "next/link";
import { Caesar_Dressing, Nosifer } from "next/font/google";

const nosifer = Nosifer({
  subsets: ["latin"],
  weight: "400",
});

const caesarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
});

function MenuButton({ children, href, disabled = false }) {
  const className = `${caesarDressing.className} text-left text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.3em] text-white transition duration-300 ${
    disabled
      ? "cursor-not-allowed opacity-60"
      : "cursor-pointer hover:text-red-300"
  }`;

  if (disabled) {
    return (
      <button type="button" disabled className={className}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <main
      className="relative min-h-dvh overflow-hidden bg-black bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/landingpagebg.png')" }}
    >
      <div className="relative z-10 flex min-h-dvh items-center justify-between px-8 py-10 md:px-14 lg:px-24">
        <nav className="self-end pb-6 md:pb-10">
          <div className="flex flex-col items-start gap-5 md:gap-7">
            <MenuButton href="/cases">Play</MenuButton>
            <MenuButton href="/suspects">Credit</MenuButton>
            <MenuButton disabled>Quit</MenuButton>
          </div>
        </nav>

        <section className="ml-6 max-w-3xl text-right">
          <h1
            className={`${nosifer.className} landing-title text-5xl leading-[1.15] tracking-[0.28em] text-[#8D0000] drop-shadow-[0_0_18px_rgba(0,0,0,0.85)] sm:text-6xl md:text-7xl lg:text-[5.5rem]`}
          >
            Crimson
            <br />
            Midnight
          </h1>
        </section>
      </div>
    </main>
  );
}
