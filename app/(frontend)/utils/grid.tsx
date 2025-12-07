'use client';

import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const DURATION = 0.8;
const STAGGERDELAY = 0.02;
const EASE = 'circOut';

export const Grid = () => {
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isHelperVisible, setIsHelperVisible] = useState(true);
  const [columns, setColumns] = useState(4);
  const [rowsAmount, setRowsAmount] = useState(3);

  const cols = {
    hidden: { scaleY: 0, originY: 0.5 },
    show: { scaleY: 1, originY: 0.5 },
  };

  const rows = {
    hidden: { scaleX: 0, originX: 0.5 },
    show: { scaleX: 1, originX: 0.5 },
  };

  const helper = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  useEffect(() => {
    const updateColumns = () => {
      const cols = getComputedStyle(document.documentElement)
        .getPropertyValue('--grid-columns')
        .trim();
      setColumns(Number(cols) || 4);
    };

    const updateRows = () => {
      const rows = getComputedStyle(document.documentElement)
        .getPropertyValue('--grid-rows')
        .trim();
      setRowsAmount(Number(rows) || 3);
    };

    updateColumns();
    updateRows();
    window.addEventListener('resize', updateColumns);

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'g') {
        setIsGridVisible((prevState) => !prevState);
        setIsHelperVisible(true);
      }
      else if (e.key.toLowerCase() === 'h') {
        setIsHelperVisible((prevState) => !prevState);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('resize', updateColumns);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        className="container-grid h-full absolute inset-0"
      >
        {Array.from({ length: columns }, (_, i) => (
          <motion.div
            key={`col-${i}`}
            className={`col-span-1 row-span-full bg-red-500/20 border border-red-500/50 border-t-0 border-b-0 h-full`}
            variants={cols}
            initial="hidden"
            animate={ isGridVisible ? "show" : "hidden" }
            transition={{ delay: i * STAGGERDELAY, duration: DURATION, ease: EASE }}
          />
        ))}
      </motion.div>

      <motion.div
        className="container-grid h-full absolute inset-0"
      >
        {Array.from({ length: rowsAmount }, (_, i) => (
          <motion.div
            key={`row-${i}`}
            className={`row-span-1 col-span-full bg-blue-500/20 border border-blue-500/50 border-l-0 border-r-0 h-full`}
            variants={rows}
            initial="hidden"
            animate={ isGridVisible ? "show" : "hidden" }
            transition={{ delay: i * STAGGERDELAY, duration: DURATION, ease: EASE }}
          />
        ))}
      </motion.div>

      {isHelperVisible && (
        <motion.div
          className="fixed bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-lg font-mono text-sm pointer-events-auto"
          variants={helper}
          initial='hidden'
          animate={isGridVisible ? 'show' : 'hidden'}
          >
          <div className="flex items-center gap-2">
            <span className="text-red-500">●</span>
            <span>{columns} colonnes</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">Appuyez sur G pour masquer</span>
            <span className="text-gray-400">•</span>
            <span>{rowsAmount} lignes</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};
