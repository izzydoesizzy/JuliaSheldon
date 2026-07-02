/* ── Ask Auntie Julia · V3 ──────────────────────────────────────────────
   Vanilla JS + GSAP (ScrollTrigger) + Lenis + Three.js (dynamic import).
   Every feature degrades gracefully: if a CDN fails or reduced-motion is
   set, content stays fully visible and readable. */

document.documentElement.classList.add("js");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const hasGSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

/* ── Loader ─────────────────────────────────────────────────────────── */
const loader = document.getElementById("loader");
function hideLoader() {
  if (loader) loader.classList.add("is-done");
}
window.addEventListener("load", () => setTimeout(hideLoader, 350));
setTimeout(hideLoader, 2600); // hard cap — never trap the visitor

/* ── Footer year ────────────────────────────────────────────────────── */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* ── If GSAP failed to load, reveal everything and stop here ────────── */
if (!hasGSAP || reduceMotion) {
  document.querySelectorAll(".reveal, .hero__title .word").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
}

/* ── Smooth scroll (Lenis) synced to ScrollTrigger ──────────────────── */
let lenis = null;
if (hasGSAP && !reduceMotion && typeof window.Lenis !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
} else if (hasGSAP) {
  gsap.registerPlugin(ScrollTrigger);
}

/* Anchor links work with Lenis */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { offset: -20 });
    else target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  });
});

/* ── Custom cursor ──────────────────────────────────────────────────── */
if (finePointer && !reduceMotion) {
  document.body.classList.add("has-cursor");
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  const pos = { x: innerWidth / 2, y: innerHeight / 2 };
  const soft = { x: pos.x, y: pos.y };

  addEventListener("mousemove", (e) => {
    pos.x = e.clientX;
    pos.y = e.clientY;
    if (dot) dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
  });

  (function cursorLoop() {
    soft.x += (pos.x - soft.x) * 0.16;
    soft.y += (pos.y - soft.y) * 0.16;
    if (ring) ring.style.transform = `translate3d(${soft.x}px, ${soft.y}px, 0)`;
    requestAnimationFrame(cursorLoop);
  })();

  document.querySelectorAll("[data-hover]").forEach((el) => {
    el.addEventListener("mouseenter", () => ring && ring.classList.add("is-hover"));
    el.addEventListener("mouseleave", () => ring && ring.classList.remove("is-hover"));
  });
}

/* ── Magnetic buttons ───────────────────────────────────────────────── */
if (finePointer && !reduceMotion && hasGSAP) {
  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    const strength = 0.35;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      gsap.to(el, {
        x: (e.clientX - r.left - r.width / 2) * strength,
        y: (e.clientY - r.top - r.height / 2) * strength,
        duration: 0.5,
        ease: "power3.out",
      });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.45)" });
    });
  });
}

/* ── Nav hide-on-scroll-down ────────────────────────────────────────── */
const nav = document.getElementById("nav");
let lastY = 0;
addEventListener(
  "scroll",
  () => {
    const y = scrollY;
    if (nav) nav.classList.toggle("is-hidden", y > lastY && y > 320);
    lastY = y;
  },
  { passive: true }
);

/* ── GSAP choreography ──────────────────────────────────────────────── */
if (hasGSAP && !reduceMotion) {
  /* Hero words rise */
  gsap.to(".hero__title .word", {
    y: 0,
    duration: 1.15,
    stagger: 0.09,
    delay: 0.45,
    ease: "expo.out",
  });

  /* Hero SVG wave: draw on, then drift forever */
  const wave = document.getElementById("wavePath");
  if (wave) {
    const len = wave.getTotalLength();
    wave.style.strokeDasharray = String(len);
    wave.style.strokeDashoffset = String(len);
    gsap.to(wave, { strokeDashoffset: 0, duration: 1.8, delay: 1.0, ease: "power2.inOut" });
    gsap.to(wave, {
      attr: { d: "M0,30 C150,60 300,0 450,30 C600,60 750,0 900,30 C1050,60 1150,15 1200,30" },
      duration: 3.2,
      delay: 2.9,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }

  /* Scroll reveals */
  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    });
  });

  /* Stat counters */
  gsap.utils.toArray(".stat__n").forEach((el) => {
    const target = Number(el.dataset.count || 0);
    const suffix = el.dataset.suffix || "";
    const state = { v: 0 };
    gsap.to(state, {
      v: target,
      duration: 1.8,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate() {
        el.textContent = Math.round(state.v).toLocaleString() + suffix;
      },
    });
  });

  /* Horizontal workshop track — pinned on desktop, stacked on mobile */
  const mm = gsap.matchMedia();
  mm.add("(min-width: 701px)", () => {
    const track = document.getElementById("htrack");
    const pin = document.querySelector(".hpin");
    if (!track || !pin) return;

    const distance = () => track.scrollWidth - innerWidth;
    const tween = gsap.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: ".hwrap",
        start: "top top",
        end: () => "+=" + distance(),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    /* Cards drift in slightly as they enter */
    gsap.utils.toArray(".htrack .card").forEach((card) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
        scrollTrigger: {
          trigger: card,
          containerAnimation: tween,
          start: "left 92%",
          once: true,
        },
      });
    });

    return () => {}; /* matchMedia handles cleanup */
  });

  /* Partners ticker — seamless loop (content duplicated below) */
  const ticker = document.getElementById("ticker");
  if (ticker) {
    ticker.innerHTML += ticker.innerHTML; // duplicate once for the -50% loop
    gsap.to(ticker, { xPercent: -50, duration: 32, ease: "none", repeat: -1 });
  }
} else {
  /* No GSAP or reduced motion: counters show final values immediately */
  document.querySelectorAll(".stat__n").forEach((el) => {
    el.textContent =
      Number(el.dataset.count || 0).toLocaleString() + (el.dataset.suffix || "");
  });
  const ticker = document.getElementById("ticker");
  if (ticker) ticker.innerHTML += ticker.innerHTML;
}

/* ── Three.js — ambient particle field (dynamic import, fully optional) ── */
async function initWebGL() {
  if (reduceMotion) return;
  const canvas = document.getElementById("webgl");
  if (!canvas) return;

  let THREE;
  try {
    THREE = await import("three");
  } catch {
    canvas.remove(); // CDN unavailable — the page is complete without it
    return;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  } catch {
    canvas.remove(); // no WebGL support
    return;
  }

  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 60);
  camera.position.z = 9;

  /* Particle cloud: brand teal + violet points drifting in a slow galaxy */
  const COUNT = innerWidth < 700 ? 900 : 2200;
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const teal = new THREE.Color("#4fb3c9");
  const violet = new THREE.Color("#8f6df0");

  for (let i = 0; i < COUNT; i++) {
    const r = 4.5 + Math.random() * 7.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
    positions[i * 3 + 2] = r * Math.cos(phi) * 0.55 - 2;
    const c = Math.random() < 0.55 ? teal : violet;
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.045,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geo, mat);
  scene.add(points);

  /* A faint wireframe torus-knot far back for depth */
  const knot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(2.6, 0.75, 90, 12),
    new THREE.MeshBasicMaterial({ color: 0x2f8499, wireframe: true, transparent: true, opacity: 0.05 })
  );
  knot.position.set(4.5, -1.5, -6);
  scene.add(knot);

  const mouse = { x: 0, y: 0 };
  addEventListener("mousemove", (e) => {
    mouse.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.y = (e.clientY / innerHeight) * 2 - 1;
  });

  addEventListener("resize", () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  let scrollFactor = 0;
  addEventListener(
    "scroll",
    () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      scrollFactor = max > 0 ? scrollY / max : 0;
    },
    { passive: true }
  );

  const clock = new THREE.Clock();
  let visible = true;
  document.addEventListener("visibilitychange", () => {
    visible = document.visibilityState === "visible";
  });

  (function frame() {
    requestAnimationFrame(frame);
    if (!visible) return;
    const t = clock.getElapsedTime();
    points.rotation.y = t * 0.03 + scrollFactor * 1.2;
    points.rotation.x = Math.sin(t * 0.08) * 0.06 + mouse.y * 0.05;
    points.rotation.z = mouse.x * 0.03;
    knot.rotation.x = t * 0.08;
    knot.rotation.y = t * 0.05;
    camera.position.y = -scrollFactor * 1.4;
    renderer.render(scene, camera);
  })();
}
initWebGL();
