'use client';
import Lottie from "lottie-react";
import logoAnimation from "@/(frontend)/lotties/logo.json";
import ReaderAnim from "./readerAnim";

interface HeroProps {
  paragraphs: string[];
}

const Hero = ({ paragraphs }: HeroProps) => {
  const texts = paragraphs.length > 0 
    ? paragraphs 
    : ["Avec Yanagestion gagnez du temps et concentrez-vous sur votre cœur de métier, nous nous occupons du reste.", "Implantée au cœur des Antilles-Guyane, nous accompagnons les entrepreneurs avec des solutions adaptées à leurs besoins."];

  return (
    <section className="container-grid h-[400vh]">
      <hgroup className="fixed inset-0 flex flex-col items-center justify-center px-2.5 md:px-20 lg:px-80 z-10">
        <Lottie animationData={logoAnimation} loop={false} className="w-10 h-10" />
        <div className="text-center text-2xl md:text-5xl font-bold w-full min-h-[calc((100dvh/4)-2.5rem)]">
          <ReaderAnim texts={texts} />
        </div>
      </hgroup>
    </section>
  );
};

export default Hero;