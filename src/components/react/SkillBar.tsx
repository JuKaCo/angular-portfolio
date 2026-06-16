import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, animate } from 'motion/react';

interface Props {
  name: string;
  percentage: number;
  level: 'excellent' | 'very-good' | 'good' | 'average';
}

const levelColor: Record<Props['level'], string> = {
  excellent: 'linear-gradient(90deg,#00ffff,#149ddd)',
  'very-good': 'linear-gradient(90deg,#149ddd,#3b82f6)',
  good: 'linear-gradient(90deg,#6366f1,#9a5cff)',
  average: 'linear-gradient(90deg,#9a5cff,#c084fc)',
};

export default function SkillBar({ name, percentage, level }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, percentage, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, percentage, count]);

  return (
    <div ref={ref} className="mb-4">
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-[--color-ink]">{name}</span>
        <span className="tabular-nums text-[--color-ink-soft]">{display}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/8">
        <motion.div
          className="h-full rounded-full"
          style={{ background: levelColor[level] }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
