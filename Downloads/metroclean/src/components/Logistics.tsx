import { motion } from "framer-motion";
import { mockData } from "../data/mockData";

export const Logistics = () => {
  const { logistics } = mockData;

  const municipalities = [
    { name: "DJB", color: "bg-blue-600" },
    { name: "MCD", color: "bg-orange-600" },
    { name: "NDMC", color: "bg-green-600" },
    { name: "GMC", color: "bg-blue-800" },
  ];

  return (
    <section id="fleet" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-bold tracking-widest uppercase mb-6">
              Official Fleet
            </div>
            
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-8 leading-[1.1]">
              {logistics.title}
            </h2>
            
            <p className="text-on-surface-variant text-base md:text-lg lg:text-xl mb-12 leading-relaxed opacity-90">
              {logistics.description}
            </p>

            <div className="space-y-6">
              <p className="text-sm font-bold text-primary tracking-widest uppercase opacity-60">Verified Partners</p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex -space-x-3">
                  {municipalities.map((m, i) => (
                    <div 
                      key={i} 
                      className={`w-12 h-12 rounded-full border-4 border-white ${m.color} flex items-center justify-center text-white text-[10px] font-bold shadow-lg`}
                      title={m.name}
                    >
                      {m.name}
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-surface-container flex items-center justify-center text-primary text-[10px] font-bold shadow-lg">
                    +8
                  </div>
                </div>
                <div className="h-8 w-px bg-outline-variant/30 hidden sm:block"></div>
                <p className="text-sm font-bold text-primary group-hover:text-secondary transition-colors">
                  Trusted by 12+ Municipalities
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            {/* Main Image Card */}
            <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-outline-variant/10 group">
              <img 
                className="w-full h-full object-cover transition-all duration-700" 
                src={logistics.image} 
                alt="Fleet and Management" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              
              {/* Removed Live Tracking Overlays as requested */}
            </div>

            {/* Decorative background element */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
