'use client';

import { createContext, useState, useCallback, useEffect, ReactNode } from 'react';

export interface IntroContextType {
  isIntroDone: boolean;
  isLottieComplete: boolean;
  setLottieComplete: () => void;
  completeIntro: () => void;
  skipIntro: () => void;
}

export const IntroContext = createContext<IntroContextType | null>(null);

interface IntroProviderProps {
  children: ReactNode;
}

export function IntroProvider({ children }: IntroProviderProps) {
  const [isLottieComplete, setIsLottieComplete] = useState(false);
  const [isIntroDone, setIsIntroDone] = useState(false);

  const setLottieCompleteCallback = useCallback(() => {
    setIsLottieComplete(true);
  }, []);

  const completeIntro = useCallback(() => {
    setIsIntroDone(true);
  }, []);

  const skipIntro = useCallback(() => {
    setIsLottieComplete(true);
    setIsIntroDone(true);
  }, []);

  return (
    <IntroContext.Provider 
      value={{ 
        isIntroDone, 
        isLottieComplete, 
        setLottieComplete: setLottieCompleteCallback, 
        completeIntro,
        skipIntro 
      }}
    >
      {children}
    </IntroContext.Provider>
  );
}

