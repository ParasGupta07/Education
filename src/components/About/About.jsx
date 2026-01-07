import React from 'react'
import './About.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import AnimatedText from '../AnimatedText/AnimatedText';

export default function About() {
  return (
    <div className="container" id = "about">
      <div className="about-image-area about-animation-dekstop">
        <DotLottieReact
          src="https://lottie.host/801178af-f6fd-4d5a-9f57-2248dab7ff52/EdPrUnMFT5.lottie"
          loop
          autoplay
        />
      </div>
      <div className="about-content-area">
        <AnimatedText text = "WHAT DO WE DO" className = "about-heading"/>
        <div className="about-animation-mobile about-animation-tab">
          <DotLottieReact
          src="https://lottie.host/801178af-f6fd-4d5a-9f57-2248dab7ff52/EdPrUnMFT5.lottie"
          loop
          autoplay
        />
        </div>
        <p>
          <span className="highlight">This</span> is an innovative online test preparation platform dedicated to providing
          affordable, customized, and effective learning solutions for students preparing for exams like
          SAT, ACT, AP's, AMC, IB Curriculum, GCSE, ISEE, UK SATs, IGCSE, CBSE, ICSE, and State Boards.
        </p>
        <p>
          With a focus on <strong>personalized one-on-one tutoring</strong>, we ensure each student receives 
          tailored guidance that matches their learning style, strengths, and goals.
        </p>
        <p>
          We believe every student has the potential to succeed. Our mission is to make that 
          success attainable by offering <span className="highlight">flexible, interactive, and student-centered tutoring sessions. </span>  
          Whether aiming for top-tier universities abroad or academic excellence locally, 
          we guide students every step of the way.
        </p>
      </div>
    </div>
  )
}
