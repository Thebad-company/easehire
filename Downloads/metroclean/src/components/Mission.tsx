import { motion } from "framer-motion";
import { mockData } from "../data/mockData";

export const Mission = () => {
  const { mission } = mockData;

  return (
    <section id="mission" className="py-24 bg-surface-container-low overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto"
        >
          <span className="text-error font-bold tracking-widest uppercase text-xs mb-4 inline-block">Our Pledge</span>
          <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-primary mb-8 tracking-tight">
            {mission.title}
          </h2>
          <p className="text-secondary text-2xl font-headline font-bold italic mb-10 leading-relaxed">
            "{mission.quote}"
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
            {mission.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/5">
              <div className="text-secondary font-bold text-lg mb-2">Innovation</div>
              <p className="text-sm text-on-surface-variant">Replacing occupational risk with high-tech robotic solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/5">
              <div className="text-secondary font-bold text-lg mb-2">Empowerment</div>
              <p className="text-sm text-on-surface-variant">Training workers to operate advanced machinery with dignity.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/5">
              <div className="text-secondary font-bold text-lg mb-2">Equality</div>
              <p className="text-sm text-on-surface-variant">Ensuring a safe and respectful work environment for all.</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
    </section>
  );
};
