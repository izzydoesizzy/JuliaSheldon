import { useCursor } from "../hooks/useCursor";

export default function Footer() {
  const { hoverProps } = useCursor();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink pb-10 pt-20 text-paper">
      <div className="container-edge">
        <div className="flex flex-col gap-10 border-b border-paper/15 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <a
            href="#top"
            {...hoverProps}
            className="font-display text-[14vw] font-extrabold leading-[0.8] tracking-tight lg:text-[9rem]"
          >
            Ask Auntie
            <br />
            <span className="spectrum-text animate-shimmer">Julia.</span>
          </a>

          <div className="flex flex-col gap-4 text-sm">
            <a
              href="mailto:sheldon.julia@gmail.com"
              {...hoverProps}
              className="link-underline w-fit text-paper/80"
            >
              sheldon.julia@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/julia-sheldon"
              target="_blank"
              rel="noopener noreferrer"
              {...hoverProps}
              className="link-underline w-fit text-paper/80"
            >
              LinkedIn ↗
            </a>
            <span className="text-paper/45">Waterloo, Ontario · she/her</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Julia Sheldon. Navigating sex, identity &amp; love.
          </p>
          <p>In-person &amp; virtual · teens, adults &amp; 2SLGBTQIA+ communities</p>
        </div>
      </div>
    </footer>
  );
}
