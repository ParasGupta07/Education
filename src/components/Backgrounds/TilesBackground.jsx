import React, { useEffect } from "react";
import "./TilesBackground.css";

export default function TilesBackground() {
  useEffect(() => {
    const tiles = document.querySelectorAll(".tiles-bg section div");
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].style.setProperty("--i", i);
      tiles[i].style.setProperty("--d", Math.random() * 8);
      tiles[i].style.setProperty("--a", Math.random() * 8 + 4);
      tiles[i].style.setProperty("--hue", Math.floor(Math.random() * 360));
      tiles[i].style.setProperty("--y", Math.floor(Math.random() * 100));
    }
  }, []);

  return (
    <div className="tiles-bg">
      <main>
        <section>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </section>
      </main>
    </div>
  );
}
