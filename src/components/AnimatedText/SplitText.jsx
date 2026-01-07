import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  tag = "p",
  onLetterAnimationComplete
}) => {
  const ref = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts.status === "loaded") {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  useEffect(() => {
    if (!ref.current || !text || !fontsLoaded) return;

    const el = ref.current;

    if (el._splitInstance) {
      el._splitInstance.revert?.();
      el._splitInstance = null;
    }

    const splitInstance = new GSAPSplitText(el, { type: splitType });
    const targets = splitInstance[splitType] || splitInstance.chars || splitInstance.words;

    gsap.fromTo(
      targets,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        scrollTrigger: {
          trigger: el,
          start: `top ${100 * (1 - threshold)}%`,
          once: true
        },
        onComplete: onLetterAnimationComplete
      }
    );

    el._splitInstance = splitInstance;

    return () => {
      splitInstance.revert?.();
      ScrollTrigger.getAll().forEach(st => st.kill());
      el._splitInstance = null;
    };
  }, [text, delay, duration, ease, splitType, JSON.stringify(from), JSON.stringify(to), threshold, rootMargin, fontsLoaded, onLetterAnimationComplete]);

  const renderTag = () => {
    const style = {
      textAlign,
      overflow: "hidden",
      display: "inline-block",
      whiteSpace: "normal",
      wordWrap: "break-word",
      willChange: "transform, opacity"
    };
    const classes = `split-parent ${className}`;

    switch (tag) {
      case "h1": return <h1 ref={ref} style={style} className={classes}>{text}</h1>;
      case "h2": return <h2 ref={ref} style={style} className={classes}>{text}</h2>;
      case "h3": return <h3 ref={ref} style={style} className={classes}>{text}</h3>;
      case "h4": return <h4 ref={ref} style={style} className={classes}>{text}</h4>;
      case "h5": return <h5 ref={ref} style={style} className={classes}>{text}</h5>;
      case "h6": return <h6 ref={ref} style={style} className={classes}>{text}</h6>;
      default: return <p ref={ref} style={style} className={classes}>{text}</p>;
    }
  };

  return renderTag();
};

export default SplitText;
