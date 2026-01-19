"use client";
import { Bad_Script } from "next/font/google";

const badScript = Bad_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className={`text-5xl text-pink-500 font-bold ${badScript.className}`}>
        AURA
      </h1>

      <h2 className={`mt-4 text-2xl  text-pink-500  font-semibold ${badScript.className}`}>
        Porque Mereces Sentirte Bien
      </h2>
    </div>
  );
}


