import { motion } from "framer-motion";
import { mockData } from "../data/mockData";

export const Safety = () => {
  const { safety } = mockData;

  return (
    <section className="py-24 bg-primary overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary opacity-5 transform skew-x-12 translate-x-32"></div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img className="rounded-2xl shadow-2xl" src={safety.image} alt="Safety equipment" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-8 -right-8 bg-secondary-container p-6 rounded-xl text-on-secondary-container max-w-xs shadow-xl"
          >
            <p className="font-headline font-bold text-xl mb-1 italic">"{safety.quote}"</p>
          </motion.div>
        </motion.div>

        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl font-extrabold text-white mb-8"
          >
            Uncompromising <br/> Safety Ecosystem
          </motion.h2>
          <ul className="space-y-6">
            {safety.items.map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="material-symbols-outlined text-secondary-container mt-1">{item.icon}</span>
                <div>
                  <h4 className="text-white font-bold">{item.title}</h4>
                  <p className="text-on-primary-container text-sm">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
