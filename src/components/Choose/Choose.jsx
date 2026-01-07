import React from "react";
import "./Choose.css";
import AnimatedText from "../AnimatedText/AnimatedText";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Choose() {
  return (
    <>
    <section className="choose-wrapper" id="why-choose-us">
    <AnimatedText text = "Why Choose Us?"/>
      <div className="choose-container">
        <input className="choose-radio sr-only" id="choose-card-1" type="radio" name="choose-panel" defaultChecked />
        <input className="choose-radio sr-only" id="choose-card-2" type="radio" name="choose-panel" />
        <input className="choose-radio sr-only" id="choose-card-3" type="radio" name="choose-panel" />

        {/* Card 1 */}
        <article className="choose-card choose-first-container">
          <header className="choose-card-header">
            <h2 className="choose-card-title">Digital Education</h2>
            <label htmlFor="choose-card-2" className="choose-card-next" aria-hidden>
              &#10539;
            </label>
          </header>

          <div className="choose-card-body">
            <DotLottieReact
              src="https://lottie.host/e7a9c058-bfe6-4d7b-8c39-e4ce6182ba0d/oWgttRGtSb.lottie"
              loop
              autoplay
            />
            <div className="choose-card-para">
              <p>At Our platform, we believe digital education is the bridge to a smarter future. Our goal is to make learning simple, engaging, and available to everyone — anytime, anywhere. Through interactive tools, online resources, and personalized learning experiences, we help students and professionals gain the skills they need to succeed in a fast-changing world. Our platform is committed to making education inclusive, accessible, and future-ready, empowering every learner to grow with confidence.</p>
            </div>
          </div>
          <label htmlFor="choose-card-1" className="choose-card-overlay" aria-hidden></label>
        </article>

        {/* Card 2 */}
        <article className="choose-card choose-second-container">
          <header className="choose-card-header">
            <h2 className="choose-card-title">Full Mentorship</h2>
            <label htmlFor="choose-card-3" className="choose-card-next" aria-hidden>
              &#10539;
            </label>
          </header>

          <div className="choose-card-body">
            <DotLottieReact
              src="https://lottie.host/dbcff5a6-8349-45be-9dcb-639b80d106e5/e5AUJPLADn.lottie"
              loop
              autoplay
            />
            <div className="choose-card-para">
              <p>At Our platform, our Full Mentorship program is designed to guide students at every step of their learning journey. From building a strong conceptual foundation to personalized doubt-solving sessions, we ensure that every learner stays on track. Our mentors provide motivation, regular progress checks, and tailored strategies so students can confidently move toward their goals.</p>
            </div>
          </div>

          <label htmlFor="choose-card-2" className="choose-card-overlay" aria-hidden></label>
        </article>

        {/* Card 3 */}
        <article className="choose-card choose-third-container">
          <header className="choose-card-header">
            <h2 className="choose-card-title">Till Exam Revision</h2>
            <label htmlFor="choose-card-1" className="choose-card-next" aria-hidden>
              &#10539;
            </label>
          </header>

          <div className="choose-card-body">
            <DotLottieReact
              src="https://lottie.host/ba4d34e8-fc6b-487b-9e50-852430701c75/vSdGMjMVOa.lottie"
              loop
              autoplay
            />
            <div className="choose-card-para">
              <p>Preparing for exams can be stressful — but with Our platform, you're never alone. Our Till Exam Revision support includes structured revision plans, topic-wise quick notes, practice tests, and last-minute guidance to ensure maximum retention. We focus on improving speed, accuracy, and confidence so students walk into the exam hall fully prepared.</p>
            </div>
          </div>

          <label htmlFor="choose-card-3" className="choose-card-overlay" aria-hidden></label>
        </article>
      </div>
    </section>
    </>
  );
}
