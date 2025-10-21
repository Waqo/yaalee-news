'use client';
import { useEffect, useRef } from 'react';

type AdSlotProps = {
  id: string;
  minHeight: number;
  render?: () => void;
};

export function AdSlot({ id, minHeight, render }: AdSlotProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          render?.();
          io.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [render]);

  return (
    <div
      id={id}
      ref={ref}
      style={{ minHeight }}
      className="w-full flex justify-center items-center my-6 bg-muted/20 border border-border rounded-md"
      data-testid={`ad-${id}`}
    >
      <span className="text-xs text-muted-foreground uppercase tracking-wide">Advertisement</span>
    </div>
  );
}
