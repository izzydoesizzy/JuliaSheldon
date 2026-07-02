import { useRef } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

type MagneticReturn<T extends HTMLElement> = {
  ref: React.RefObject<T>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  onMouseMove: (e: React.MouseEvent<T>) => void;
  onMouseLeave: () => void;
};

/**
 * Physics-based magnetic pull toward the cursor. The element translates a
 * fraction of the distance between its centre and the pointer, eased by a
 * spring for that weighty, intentional feel.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(
  strength = 0.35
): MagneticReturn<T> {
  const ref = useRef<T>(null);
  const x = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 15,
    mass: 0.45,
  });
  const y = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 15,
    mass: 0.45,
  });

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x, y, onMouseMove, onMouseLeave };
}
