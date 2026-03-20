import { motion } from "framer-motion";
import { mockData } from "../data/mockData";

export const About = () => {
  const { about } = mockData;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-6">
              Our Story
            </div>
            <h2 className="font-headline text-3xl lg:text-4xl font-extrabold text-primary mb-8 tracking-tight">
              {about.title}
            </h2>
            <div className="space-y-6 text-on-surface-variant text-base lg:text-lg leading-relaxed">
              <p>{about.description}</p>
              <p className="font-medium text-primary/80">{about.subtext}</p>
            </div>
            <div className="mt-10 flex gap-4">
              <div className="h-0.5 w-12 bg-secondary self-center"></div>
              <p className="text-secondary font-bold tracking-widest uppercase text-sm">Pan India Presence</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="aspect-[16/10] sm:aspect-video bg-surface-container rounded-3xl overflow-hidden shadow-xl border border-outline-variant/10">
               <img className="w-full h-full object-cover" src="/images/web-content/municipal-cleaning-operation.png" alt="Municipal Cleaning" />
            </div>
            <div className="aspect-[16/10] sm:aspect-video bg-surface-container rounded-3xl overflow-hidden shadow-xl border border-outline-variant/10">
               <img className="w-full h-full object-cover" src="/images/web-content/sewer-line-rehabilation.png" alt="Sewer Line Rehabilitation" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
