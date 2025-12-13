'use client';
import Lottie from "lottie-react";
import logoAnimation from "@/(frontend)/lotties/logo.json";
import ReaderAnim from "./animations/readerAnim";
import { type SanityDocument } from "next-sanity";
import Summary from "./summary";
import DomTomDepartement from "./domTomDepartement";
import DateComponent from "./date";
import { useContext, useMemo, useRef } from "react";
import NavButton from "./navButton";
import Navigation from "./navigation";
import { IntroContext } from "@/(frontend)/contexts/IntroContext";
import { motion } from "framer-motion";

interface HeroProps {
  paragraphs: string[] | SanityDocument[];
  summary: string[];
}

const Hero = ({ paragraphs, summary }: HeroProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const introContext = useContext(IntroContext);
  const { isLottieComplete, completeIntro, setLottieComplete } = introContext ?? {};

  const texts = paragraphs.length > 0 
    ? paragraphs 
    : ["ERROR: Avec Yanagestion gagnez du temps et concentrez-vous sur votre cœur de métier, nous nous occupons du reste.", "ERROR: Implantée au cœur des Antilles-Guyane, nous accompagnons les entrepreneurs avec des solutions adaptées à leurs besoins."];

    const homePageTitle = "Yanagestion";
    
    const summaryWithTitle = useMemo(() => {
      return [homePageTitle, ...summary];
    }, [summary]);

  return (
    <>
      <div id={`tag-0`} className="tag absolute w-full h-[400dvh] pointer-events-none" aria-hidden="true"></div>
      <section ref={containerRef} className="container-grid h-[400vh] mb-64" id="hero">
        <div className="fixed inset-0 container-grid">
          <NavButton text="Un devis ?" target="tag-3" className="absolute top-2.5 right-2.5" />
          <Navigation nbSections={summaryWithTitle.length} />
          <DomTomDepartement className="col-span-full row-start-1 row-end-2 self-end font-mono text-gray" />
          <hgroup className="absolute top-1/2 translate-y-[-50%] w-full flex flex-col items-center justify-center px-2.5 md:px-20 lg:px-80 z-10">
            <Lottie 
                animationData={logoAnimation} 
                loop={false} 
                className="w-10 h-10"
                onComplete={setLottieComplete}
            />

            <motion.div 
              className="text-center text-2xl md:text-5xl font-bold w-full min-h-[calc((100dvh/4)-2.5em)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isLottieComplete ? 1 : 0, y: isLottieComplete ? 0 : 30 }}
              transition={{ duration: 0.75, ease: "backOut", delay: 0.3 }}
              onAnimationComplete={() => {
                if (isLottieComplete) {
                  completeIntro?.();
                }
              }}
              >
              <ReaderAnim texts={texts.flat() as string[]} containerRef={containerRef} />
            </motion.div>
          </hgroup>

          <Summary summary={summaryWithTitle} className="col-span-2 md:col-span-1 row-start-3 self-end md:self-start pt-2.5" />
          <DateComponent className="col-span-full row-start-1 self-start md:col-start-3 md:row-start-3 md:row-end-4 md:self-end pl-2.5 text-xs font-mono text-gray" />
        </div>
      </section>
    </>
  );
};

export default Hero;