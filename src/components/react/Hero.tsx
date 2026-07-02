import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface Props {
  name: string;
  intro: string;
  keywords: string[];
}

/** Lightweight typing effect replacing the old typed.js dependency. */
function useTyped(words: string[]) {
  const [text, setText] = useState('');
  const state = useRef({ word: 0, char: 0, deleting: false });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0] ?? '');
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const s = state.current;
      const current = words[s.word % words.length];
      if (s.deleting) {
        s.char--;
        setText(current.slice(0, s.char));
        if (s.char <= 0) {
          s.deleting = false;
          s.word++;
          timer = setTimeout(tick, 350);
          return;
        }
        timer = setTimeout(tick, 55);
      } else {
        s.char++;
        setText(current.slice(0, s.char));
        if (s.char >= current.length) {
          s.deleting = true;
          timer = setTimeout(tick, 1400);
          return;
        }
        timer = setTimeout(tick, 110);
      }
    };
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

export default function Hero({ name, intro, keywords }: Props) {
  const typed = useTyped(keywords);

  return (
    <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl font-bold leading-tight sm:text-6xl md:text-7xl"
        style={{ textShadow: '0 4px 30px rgba(0,0,0,0.6)' }}
      >
        {name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 text-lg text-(--color-ink-soft) sm:text-2xl"
      >
        {intro}{' '}
        <span className="font-semibold text-(--color-accent-bright)">{typed}</span>
        <span className="ml-0.5 inline-block w-px animate-pulse text-(--color-accent-bright)">|</span>
      </motion.p>
    </div>
  );
}
