import { motion, useScroll, useSpring } from "motion/react";
import { 
  Flower as FlowerIcon, 
  ChevronUp
} from "lucide-react";
import { useEffect, useState } from "react";
import { FLOWER_SECTIONS } from "./constants";

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [currentBg, setCurrentBg] = useState("#FFFFFF");
  const [currentColor, setCurrentColor] = useState("#800000"); // Maroon default
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const sections = FLOWER_SECTIONS.map(s => document.getElementById(s.id));
      const current = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top >= -400 && rect.top <= 400;
      });

      if (current) {
        setActiveSection(current.id);
        const sectionData = FLOWER_SECTIONS.find(s => s.id === current.id);
        if (sectionData) {
          setCurrentBg(sectionData.bgLight);
          setCurrentColor(sectionData.color);
        }
      } else {
        setActiveSection("");
        setCurrentBg("#FFFFFF");
        setCurrentColor("#800000");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen font-sans text-dark-maroon selection:bg-maroon/20 selection:text-dark-maroon relative transition-colors duration-1000">
      {/* Dynamic Background Layer */}
      <div 
        className="fixed inset-0 z-[-1] transition-colors duration-1000 ease-in-out pointer-events-none"
        style={{ backgroundColor: currentBg }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left transition-colors duration-1000"
        style={{ scaleX, backgroundColor: currentColor }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/40 backdrop-blur-md border-b border-rose-200">
        <nav className="max-w-7xl mx-auto px-4 h-[70px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FlowerIcon className="w-5 h-5 transition-colors duration-1000" style={{ color: currentColor }} />
            <span className="font-serif italic text-lg tracking-tight hidden sm:block">Floral Spectrum</span>
          </div>
          <ul className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-2">
            {FLOWER_SECTIONS.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  style={{ 
                    borderColor: activeSection === section.id ? section.color : 'transparent',
                    color: activeSection === section.id ? section.color : undefined,
                    fontWeight: activeSection === section.id ? 600 : undefined
                  }}
                  className={`px-3 py-1.5 border text-[11px] uppercase tracking-wider transition-all duration-300 ${
                    activeSection === section.id
                      ? ""
                      : "text-rose-muted hover:text-rose-400 hover:border-rose-200"
                  }`}
                >
                  {section.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-maroon/60 mb-6 block font-bold">Aesthetic Study</span>
          <h1 className="font-serif italic text-6xl sm:text-8xl mb-8 leading-tight">
            The Soft <br /> <span className="not-italic font-sans font-light transition-colors duration-1000" style={{ color: currentColor }}>Elegance of Blooms</span>
          </h1>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <main>
        {FLOWER_SECTIONS.map((section, sectionIdx) => (
          <section
            key={section.id}
            id={section.id}
            className="py-32 px-8 sm:px-12 lg:px-20 border-b border-rose-100 bg-transparent"
          >
            <div className="max-w-7xl mx-auto">
              <div className="lg:grid lg:grid-cols-[1fr,1.5fr] lg:gap-20 items-start mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12 lg:mb-0"
                >
                  <div 
                    className="w-10 h-[2px] mb-6 transition-colors duration-1000" 
                    style={{ backgroundColor: section.color }} 
                  />
                  <span className="text-[10px] font-mono tracking-[0.3em] text-rose-300 uppercase mb-3 block">
                    Phase {sectionIdx + 1 < 10 ? `0${sectionIdx + 1}` : sectionIdx + 1}
                  </span>
                  <h2 className={`font-serif italic text-5xl sm:text-7xl mb-6 ${section.id === 'white' ? 'text-slate-400' : ''}`} style={{ color: section.id === 'white' ? undefined : section.color }}>
                    {section.name} Petals
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 lg:pt-0">
                  {section.flowers.map((flower, idx) => (
                    <motion.div
                      key={`${section.id}-${flower.name}-${idx}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="group flex flex-col bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20"
                    >
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-serif italic text-2xl transition-colors duration-300" style={{ color: section.id === 'white' ? '#4A0404' : section.color }}>
                            {flower.name}
                          </h3>
                          <span 
                            className="text-[10px] font-mono font-bold transition-colors duration-300 opacity-50"
                            style={{ color: section.id === 'white' ? '#4A0404' : section.color }}
                          >
                            #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                          </span>
                        </div>
                        <p className="text-xs text-rose-muted leading-relaxed font-light mb-4 flex-1">
                          {flower.description}
                        </p>
                        <div className="mt-auto pt-4 border-t border-rose-100">
                          <span className="text-[10px] uppercase tracking-wider text-rose-400 font-bold block mb-1">Botanical Note</span>
                          <p className="text-[11px] italic text-maroon/80 font-medium leading-snug">
                            {flower.funFact}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-rose-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-cursive text-4xl sm:text-5xl mb-6 font-light italic transition-colors duration-1000" style={{ color: currentColor }}>
            Thank you for visiting
          </p>
          <div className="w-12 h-[1px] bg-rose-200 mx-auto mb-10" />
          <div className="flex justify-center items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-rose-400 font-medium">Floral Spectrum</span>
            <div className="w-1 h-1 rounded-full transition-colors duration-1000" style={{ backgroundColor: currentColor }} />
            <span className="text-[10px] uppercase tracking-[0.4em] text-rose-400 font-medium">Botanical Study</span>
          </div>
        </div>
      </footer>

      {/* Scroll Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-white text-maroon rounded-full shadow-2xl flex items-center justify-center border border-rose-100 hover:bg-soft-pink transition-all duration-300"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
