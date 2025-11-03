// src/assets/images/animation/images.js

// 🔹 Usa import.meta.url para rutas absolutas que funcionen con Vite o React
export const images = Array.from({ length: 40 }, (_, i) => {
  const frameNumber = String(i + 1).padStart(4, "0");
  return { p: new URL(`./${frameNumber}.webp`, import.meta.url).href };
});
