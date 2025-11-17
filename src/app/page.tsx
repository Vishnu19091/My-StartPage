"use client";
import Main from "@/app/_components/Main";
import { useLocalStorageState } from "@/app/_hooks/useLocalStorage";

const gifs: string[] = [
  "/assets/black.eps",
  "/assets/neon_sunset.gif",
  "/assets/psychos.gif",
  "/assets/smoker.gif",
];

export default function Home() {
  // <----- works fine ----->
  const [bgIndex, setBgIndex] = useLocalStorageState<number>(0, "bgwallpaper");

  const handleBg = () => {
    setBgIndex((prev) => (prev + 1) % gifs.length);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background layer */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${gifs[bgIndex]})`,
          opacity: 0.4, // dim background only
          zIndex: -1,
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen">
        {/* Change Background Button */}
        <button
          onClick={handleBg}
          className="glass-element mt-5 opacity-60 hover:opacity-100 transition-all duration-200"
        >
          Change Background
        </button>

        {/* Main Content */}
        <Main />

        {/* Footer */}
        <footer className="text-[#7e7e7e] font-semibold text-base opacity-50 hover:opacity-100 transition w-fit mx-auto mb-3">
          Made with ❤️, by a nitpicker.
        </footer>
      </div>
    </div>
  );
}
