import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockData } from "../data/mockData";
import { cn } from "../lib/utils";

export const Hero = () => {
  const { hero } = mockData;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % hero.images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [hero.images.length]);

  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface pt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-20 relative"
        >
          <h1 className="font-headline text-4xl lg:text-7xl font-extrabold text-primary tracking-tight leading-[1.1] mb-8">
            {hero.title.main} <br/>
            <span className="text-secondary">{hero.title.highlight}</span> <br/>
            {hero.title.sub}
          </h1>
          <p className="text-on-surface-variant text-lg max-w-lg mb-10 leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="bg-primary-container text-on-primary px-8 py-4 rounded-xl font-bold shadow-lg flex items-center gap-2 hover:bg-primary transition-all">
              {hero.ctaPrimary} <ArrowForward size={20} />
            </a>
            <a href="#about" className="bg-surface-container-lowest border border-outline-variant/30 text-primary px-8 py-4 rounded-xl font-bold hover:bg-surface-container-low transition-all">
              {hero.ctaSecondary}
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary-fixed/20 to-transparent rounded-[2rem] hidden lg:block"></div>
          <div className="absolute inset-4 rounded-[1.5rem] overflow-hidden shadow-2xl bg-surface-container-high">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover" 
                src={hero.images[currentImageIndex]} 
                alt="Industrial cleaning infrastructure"
              />
            </AnimatePresence>
            
            {/* Slider Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {hero.images.map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    i === currentImageIndex ? "bg-white w-8" : "bg-white/40"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-10 glass-card p-4 rounded-xl shadow-xl hidden lg:flex items-center gap-4 z-30"
          >
            <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center text-white", hero.floatingCards[0].color)}>
              <span className="material-symbols-outlined">{hero.floatingCards[0].icon}</span>
            </div>
            <div>
              <p className="text-xs text-on-surface-variant font-bold uppercase">{hero.floatingCards[0].label}</p>
              <p className="text-sm font-bold text-primary">{hero.floatingCards[0].value}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ArrowForward = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
