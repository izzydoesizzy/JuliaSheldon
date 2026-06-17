import { type ReactNode } from "react";

type Props = {
  items: ReactNode[];
  reverse?: boolean;
  speed?: "slow" | "normal";
  separator?: ReactNode;
  className?: string;
  itemClassName?: string;
};

/**
 * Seamless infinite marquee. Two identical copies of the content sit inside a
 * single animated flex track that translates -50% of its own width, so the
 * second copy lands exactly where the first began — a perfect, jump-free loop.
 */
export default function Marquee({
  items,
  reverse = false,
  speed = "normal",
  separator,
  className = "",
  itemClassName = "",
}: Props) {
  const anim = reverse
    ? "animate-marquee-reverse"
    : speed === "slow"
    ? "animate-marquee-slow"
    : "animate-marquee";

  const Copy = ({ ariaHidden }: { ariaHidden?: boolean }) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((item, i) => (
        <span key={i} className={`flex shrink-0 items-center ${itemClassName}`}>
          {item}
          {separator ?? (
            <span className="mx-8 inline-block h-1.5 w-1.5 rounded-full bg-current opacity-40" />
          )}
        </span>
      ))}
    </div>
  );

  return (
    <div className={`mask-fade-x flex w-full overflow-hidden ${className}`}>
      <div className={`flex shrink-0 ${anim}`}>
        <Copy />
        <Copy ariaHidden />
      </div>
    </div>
  );
}
