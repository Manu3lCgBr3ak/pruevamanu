import React, { useEffect, useRef } from "react";
import { images } from "../../assets/images/animation/images.js";

export default function ScrollAnimation() {
  const imgRef = useRef(null);
  const frameRef = useRef(0);
  const ticking = useRef(false);
  const maxScrollRef = useRef(0);
  const MAX_FRAMES = images.length;

  // ⚡ Pre-cargar imágenes una sola vez
  useEffect(() => {
    const preload = () => {
      for (const { p } of images) {
        const i = new Image();
        i.src = p;
      }
    };
    preload();
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    const SPEED_MULTIPLIER = 3; // ajusta para mayor o menor velocidad

    const updateImage = (frame) => {
      img.src = images[frame].p;
    };

    const recalcMaxScroll = () => {
      maxScrollRef.current =
        document.documentElement.scrollHeight - window.innerHeight;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          const scrollFraction =
            (window.scrollY / maxScrollRef.current) * SPEED_MULTIPLIER;
          const frame = Math.min(
            MAX_FRAMES - 1,
            Math.floor(scrollFraction * MAX_FRAMES)
          );

          if (frame !== frameRef.current) {
            frameRef.current = frame;
            updateImage(frame);
          }

          ticking.current = false;
        });
      }
    };

    recalcMaxScroll();
    updateImage(0);

    // ⚡ Usamos passive listeners para no bloquear el render
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", recalcMaxScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", recalcMaxScroll);
    };
  }, [MAX_FRAMES]);

  return (
    <div className="w-full h-full relative overflow-hidden flex justify-center items-center bg-[#161717] rounded-[3rem] will-change-transform">
      <img
        ref={imgRef}
        alt="scroll animation"
        className="w-full h-full object-cover absolute top-0 left-0 pointer-events-none select-none"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
