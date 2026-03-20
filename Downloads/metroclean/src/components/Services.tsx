import { motion } from "framer-motion";
import { mockData } from "../data/mockData";

export const Services = () => {
  const { services } = mockData;

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl font-extrabold text-primary mb-4 tracking-tight"
          >
            {services.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant max-w-2xl"
          >
            {services.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-2xl hover:border-secondary/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary-container flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-white text-3xl">{category.icon}</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-primary mb-6 group-hover:text-secondary transition-colors duration-300 font-headline">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-sm text-on-surface-variant leading-relaxed">
                    <span className="text-secondary font-bold group-hover:scale-125 transition-transform duration-300">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
