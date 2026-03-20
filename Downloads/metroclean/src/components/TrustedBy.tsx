import { motion } from "framer-motion";
import { mockData } from "../data/mockData";

export const TrustedBy = () => {
  const { clients } = mockData;
  
  // Duplicate the client list for seamless infinite scroll
  const scrollClients = [...clients, ...clients];

  return (
    <section className="py-24 bg-surface-container-low border-y border-outline-variant/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-primary/40 font-bold uppercase tracking-widest text-xs inline-block">
          Trusted By Industry Leaders & Municipalities
        </span>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex whitespace-nowrap gap-12 py-4"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          // Pause on hover
          whileHover={{ animationPlayState: "paused" }}
        >
          {scrollClients.map((client, i) => (
            <div 
              key={i}
              className="inline-flex items-center justify-center p-8 bg-white border border-outline-variant/5 rounded-[2.5rem] min-w-[280px] h-40 shadow-sm hover:shadow-2xl hover:border-secondary/20 hover:-translate-y-2 transition-all duration-500 group/card"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-20 md:h-24 w-auto object-contain opacity-80 group-hover/card:opacity-100 transition-all duration-700"
              />
              
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fade Gradients at the ends */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-surface-container-low to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-surface-container-low to-transparent pointer-events-none z-10"></div>
    </section>
  );
};
