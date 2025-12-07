import { useScroll, useTransform, motion } from "framer-motion";

interface ReaderAnimProps {
  texts: string[];
  keepAllTextsDisplayed?: boolean;
  transitionBuffer?: number;
}

const ReaderAnim = ({ 
  texts, 
  keepAllTextsDisplayed = false,
  transitionBuffer = 0.30 
}: ReaderAnimProps) => {
  const { scrollYProgress } = useScroll();

  if (keepAllTextsDisplayed) {
    const totalLetters = texts.reduce((sum, text) => sum + text.length, 0);
    let cumulativeLetters = 0;

    return (
      <div className="flex flex-col gap-4">
        {texts.map((text, textIndex) => {
          const letters = text.split("");
          const textStartOffset = cumulativeLetters;
          cumulativeLetters += letters.length;

          return (
            <motion.p key={textIndex}>
              {letters.map((letter, letterIndex) => {
                const globalIndex = textStartOffset + letterIndex;
                const threshold = globalIndex / totalLetters;

                const opacity = useTransform(
                  scrollYProgress,
                  [threshold, threshold + 0.015],
                  [0.2, 1]
                );

                return (
                  <motion.span key={letterIndex} style={{ opacity }}>
                    {letter}
                  </motion.span>
                );
              })}
            </motion.p>
          );
        })}
      </div>
    );
  }

  const segmentSize = 1 / texts.length;

  return (
    <span className="relative block">
      {texts.map((text, textIndex) => {
        const letters = text.split("");
        const isLastText = textIndex === texts.length - 1;

        const segmentStart = textIndex * segmentSize;
        const segmentEnd = (textIndex + 1) * segmentSize;

        const revealEnd = segmentEnd - (segmentSize * transitionBuffer);
        const fadeOutStart = segmentEnd - (segmentSize * transitionBuffer * 0.3);

        const isFirstText = textIndex === 0;
        
        const containerOpacity = useTransform(
          scrollYProgress,
          isFirstText
            ? (isLastText 
                ? [0, 1]
                : [0, fadeOutStart, segmentEnd])
            : (isLastText 
                ? [segmentStart, segmentStart + 0.01]
                : [segmentStart, segmentStart + 0.01, fadeOutStart, segmentEnd]),
          isFirstText
            ? (isLastText 
                ? [1, 1] 
                : [1, 1, 0])
            : (isLastText 
                ? [0, 1] 
                : [0, 1, 1, 0])
        );

        return (
          <motion.p 
            key={textIndex} 
            className="absolute top-0 left-0 w-full"
            style={{ opacity: containerOpacity }}
          >
            {letters.map((letter, letterIndex) => {
              const revealDuration = revealEnd - segmentStart;
              const letterProgress = letterIndex / letters.length;
              const letterThreshold = segmentStart + (letterProgress * revealDuration);

              const letterOpacity = useTransform(
                scrollYProgress,
                [letterThreshold, letterThreshold + 0.01],
                [0.2, 1]
              );

              return (
                <motion.span key={letterIndex} style={{ opacity: letterOpacity }}>
                  {letter}
                </motion.span>
              );
            })}
          </motion.p>
        );
      })}
    </span>
  );
};

export default ReaderAnim;