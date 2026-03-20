import { motion } from "framer-motion";
import { mockData } from "../data/mockData";

export const ServiceDetails = () => {
  const { serviceDetails } = mockData;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {serviceDetails.map((detail, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-low rounded-[2.5rem] border border-outline-variant/10 group overflow-hidden transition-all duration-500 hover:bg-primary hover:shadow-2xl"
            >
              {/* Image Section */}
              <div className="aspect-[16/10] overflow-hidden relative">
                 <img 
                  src={detail.image} 
                  alt={detail.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-6 left-6 p-4 rounded-2xl bg-white shadow-xl text-primary flex items-center justify-center transform group-hover:translate-y-2 transition-transform duration-500">
                   <span className="material-symbols-outlined text-3xl font-bold">{detail.icon}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10 transition-all duration-500">
                <h3 className="text-2xl font-headline font-bold text-primary group-hover:text-white mb-4">{detail.title}</h3>
                <p className="text-on-surface-variant group-hover:text-white/80 transition-colors mb-8 text-lg">
                  {detail.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {detail.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-on-surface-variant group-hover:text-white/70 transition-colors">
                      <span className="material-symbols-outlined text-secondary text-base group-hover:text-secondary-container">check_circle</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
