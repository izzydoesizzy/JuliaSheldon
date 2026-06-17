import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useMagnetic } from "../hooks/useMagnetic";
import { useCursor } from "../hooks/useCursor";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost";
  strength?: number;
  className?: string;
};

/**
 * Magnetic, physics-eased button/link with an inner label that counter-drifts
 * slightly for depth. Wires into the shared custom-cursor hover state.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "solid",
  strength = 0.4,
  className = "",
}: Props) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic<HTMLAnchorElement>(
    strength
  );
  const { hoverProps } = useCursor();

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-500 ease-expo will-change-transform";
  const styles: Record<string, string> = {
    solid: "bg-ink text-paper hover:bg-violet",
    outline: "border border-ink/25 text-ink hover:border-ink/70",
    ghost: "text-ink hover:text-coral",
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        onMouseLeave();
        hoverProps.onMouseLeave();
      }}
      onMouseEnter={hoverProps.onMouseEnter}
      className={`${base} ${styles[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.a>
  );
}
