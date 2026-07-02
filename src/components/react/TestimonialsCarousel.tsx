import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Item {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export default function TestimonialsCarousel({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const item = items[index];

  return (
    <div
      className="relative mx-auto max-w-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="glass relative overflow-hidden rounded-2xl p-8 text-center sm:p-10">
        <span
          className="pointer-events-none absolute left-5 top-2 select-none font-[family-name:--font-display] text-7xl leading-none text-(--color-accent)/25"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote className="text-balance text-lg text-(--color-ink)">
              {item.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-(--color-accent)/40"
              />
              <div className="text-left">
                <p className="font-semibold text-(--color-ink)">{item.name}</p>
                <p className="text-sm text-(--color-ink-soft)">{item.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {items.length > 1 && (
        <div className="mt-5 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-(--color-accent-bright)' : 'w-2 bg-white/25'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
