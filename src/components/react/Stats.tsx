import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'motion/react';
import type { Stat } from '../../data/types';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, mv]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats({ items }: { items: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map((s, i) => (
        <div key={i} className="glass rounded-2xl px-4 py-7 text-center">
          <p className="font-[family-name:--font-display] text-4xl font-bold text-gradient sm:text-5xl">
            <Counter value={s.value} suffix={s.suffix} />
          </p>
          <p className="mt-2 text-sm text-[--color-ink-soft]">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
