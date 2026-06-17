import { useLenis } from "./hooks/useLenis";
import { CursorProvider } from "./hooks/useCursor";
import CustomCursor from "./components/CustomCursor";
import FloatingNav, { ScrollProgress } from "./components/FloatingNav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Audience from "./components/Audience";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useLenis();

  return (
    <CursorProvider>
      <CustomCursor />
      <ScrollProgress />
      <FloatingNav />

      <main className="grain relative">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Audience />
        <Testimonials />
        <Partners />
        <Contact />
      </main>

      <Footer />
    </CursorProvider>
  );
}
