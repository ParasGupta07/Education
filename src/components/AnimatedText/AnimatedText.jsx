import React, { useEffect, useRef } from "react";
import "./AnimatedText.css";
import { gsap } from "gsap";

const AnimatedText = ({ text = "Default animated text" }) => {
  const textRef = useRef(null);
  const timelineRef = useRef(null);

  const splitText = () => {
    const element = textRef.current;
    if (!element || !text) return [];

    element.innerHTML = "";

    text.split(" ").forEach((word) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "animated-word";

      word.split("").forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.className = "animated-char";
        wordSpan.appendChild(charSpan);
      });

      element.appendChild(wordSpan);
      element.appendChild(document.createTextNode(" "));
    });

    return element.querySelectorAll(".animated-char");
  };

  useEffect(() => {
    const chars = splitText();
    if (chars.length === 0) return;

    timelineRef.current = gsap.timeline({ repeat: -1, repeatDelay: 5 });
    timelineRef.current.fromTo(
      chars,
      { yPercent: () => gsap.utils.random([-100, 100]), rotation: () => gsap.utils.random(-30, 30), autoAlpha: 0 },
      { yPercent: 0, rotation: 0, autoAlpha: 1, ease: "back.out(1.7)", duration: 0.8, stagger: { amount: 0.5, from: "random" } }
    );

    return () => timelineRef.current.kill();
  }, [text]);

  return (
    <div className="animated-text-container">
      <div className="animated-text-inner" ref={textRef}></div>
    </div>
  );
};

export default AnimatedText;
