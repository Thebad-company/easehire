import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { mockData } from "../data/mockData";

export const Flagship = () => {
  const { highlight } = mockData;

  return (
    <section id="flagship" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 relative overflow-hidden text-white shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 transform skew-x-12 translate-x-20"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-headline font-bold mb-6 tracking-tight">{highlight.title}</h3>
              <p className="text-on-primary-container text-lg mb-8 opacity-90 leading-relaxed font-headline">{highlight.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlight.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="material-symbols-outlined text-secondary-container text-sm">check_circle</span>
                    {feature}
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-10 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-secondary-container hover:text-white transition-all shadow-xl group inline-flex items-center gap-2">
                Rental Options Available
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="relative min-h-[300px] md:min-h-[400px] flex items-center justify-center rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl bg-white/5 border-2 border-white/20 group">
              <img className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" src={highlight.image} alt="Super Sucker Machine" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
