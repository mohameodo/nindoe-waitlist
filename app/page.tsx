"use client"

import { useEffect } from "react";
import { WaitlistSignup } from "./components/waitlist-signup"
import { Toaster } from "@/components/ui/toaster"

const backgroundStyle = `
  .bg-pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    pointer-events: none;
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 2;
  }

  .light {
    position: fixed;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0) 70%);
    border-radius: 50%;
    pointer-events: none;
    mix-blend-mode: screen;
    z-index: 3;
  }
`

export default function Home() {
  useEffect(() => {
    const light = document.createElement("div");
    light.classList.add("light");
    document.body.appendChild(light);

    const moveLight = (e) => {
      light.style.left = `${e.clientX - 50}px`;
      light.style.top = `${e.clientY - 50}px`;
    };

    window.addEventListener("mousemove", moveLight);

    return () => {
      window.removeEventListener("mousemove", moveLight);
      document.body.removeChild(light);
    };
  }, []);

  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "black",
      }}
    >
      <style jsx global>
        {backgroundStyle}
      </style>
      <div className="bg-pattern"></div>
      <div className="content w-full">
        <WaitlistSignup />
      </div>
      <Toaster
        toastOptions={{
          style: {
            background: "rgb(0,0,0)",
            color: "white",
            border: "1px solid rgb(63 63 70)",
          },
          className: "rounded-xl",
          duration: 5000,
        }}
      />
    </main>
  )
}
