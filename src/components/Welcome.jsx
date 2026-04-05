import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{
        fontVariationSettings: `'wght' ${baseWeight}`,
        display: "inline-block",
        willChange: "transform, font-variation-settings",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return () => {};

  const letters = Array.from(container.querySelectorAll("span"));
  const { min, max, default: base } =
    FONT_WEIGHTS[type] || FONT_WEIGHTS.title;


  let positions = [];

  const calculatePositions = () => {
    const containerRect = container.getBoundingClientRect();

    positions = letters.map((letter) => {
      const rect = letter.getBoundingClientRect();
      return rect.left - containerRect.left + rect.width / 2;
    });
  };

  calculatePositions();
  window.addEventListener("resize", calculatePositions);

  const animateLetter = (letter, weight, intensity) => {
    gsap.to(letter, {
      duration: 0.3,
      ease: "power3.out",
      overwrite: "auto", // 🔥 prevents jitter
      fontVariationSettings: `'wght' ${weight}`,
      scale: 1 + intensity * 0.25, // 🔥 smooth visual boost
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter, i) => {
      const distance = Math.abs(mouseX - positions[i]);

     
      const intensity = Math.exp(-(distance ** 2) / 20000);

      const weight = min + (max - min) * intensity;

      animateLetter(letter, weight, intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      gsap.to(letter, {
        duration: 0.4,
        ease: "power3.out",
        fontVariationSettings: `'wght' ${base}`,
        scale: 1,
      });
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
    window.removeEventListener("resize", calculatePositions);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const cleanup1 = setupTextHover(titleRef.current, "title");
    const cleanup2 = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      cleanup1();
      cleanup2();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Koushik!, Welcome to my",
          "text-2xl font-georama",
          100
        )}
      </p>

      <h1 ref={titleRef} className="mt-7">
        {renderText(
          "portfolio",
          "text-9xl italic font-georama",
          400
        )}
      </h1>

      <div className="small-screen">
        This website is designed only for Desktops/tablets only
      </div>
    </section>
  );
};

export default Welcome;