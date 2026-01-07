import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import AnimatedText from "../AnimatedText/AnimatedText";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      img: "/images/testimonials/test1.png",
      name: "Ruchira",
      role: "Prepared for SAT",
      quote:
        "our platform helped me tremendously with my SAT prep. The structured lessons and practice tests have boosted my confidence and skills.",
    },
    {
      img: "/images/testimonials/test2.png",
      name: "Ahnika",
      role: "Preparing for ISEE exam",
      quote:
        "our platformPREP was incredibly helpful for my ISEE preparation. The content was comprehensive, interactive, and well-structured, boosting my confidence and performance.",
    },
    {
      img: "/images/testimonials/test3.png",
      name: "Srija",
      role: "Preparing for SAT and AP exams",
      quote:
        "I'm currently using our platform for my SAT and AP prep, and it's been fantastic. The lessons are engaging, well-structured, and really effective.",
    },
    {
      img: "/images/testimonials/test4.png",
      name: "Arjun Mehta",
      role: "Preparing for ACT",
      quote:
        "our platform Education Academy has made my ACT prep stress-free. The personalized study plan and detailed feedback kept me on track and motivated throughout the journey.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const updateIndex = (newIndex) => {
    setCurrentIndex((newIndex + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-container" id="our-students">
      <h1 className="testimonial-title testimonial-heading-dekstop">Our Students</h1>
      <div className="testimonial-heading-mobile"><AnimatedText text = "Our Students"/></div>
      <div className="testimonial-carousel">
        <button
          className="testimonial-arrow testimonial-arrow-left"
          onClick={() => updateIndex(currentIndex - 1)}
        >
          ‹
        </button>

        <div className="testimonial-track">
          {testimonials.map((t, i) => {
            const offset = (i - currentIndex + testimonials.length) % testimonials.length;
            let className = "testimonial-card";

            if (offset === 0) className += " testimonial-card-center";
            else if (offset === 1) className += " testimonial-card-right";
            else if (offset === testimonials.length - 1)
              className += " testimonial-card-left";
            else className += " testimonial-card-hidden";

            return (
              <div key={i} className={className}>
                <div className="testimonial-card-content">
                  <img className="testimonial-image" src={t.img} alt={t.name} />
                  <p className="testimonial-card-quote">{t.quote}</p>
                  <h3 className="testimonial-card-heading">{t.name}</h3>
                  <p className="testimonial-card-role">{t.role}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="testimonial-arrow testimonial-arrow-right"
          onClick={() => updateIndex(currentIndex + 1)}
        >
          ›
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`testimonial-dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => updateIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}
