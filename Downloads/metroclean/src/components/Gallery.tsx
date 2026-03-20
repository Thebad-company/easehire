import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { mockData } from "../data/mockData";

export const Gallery = () => {
  const { gallery } = mockData;

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-headline text-4xl font-extrabold text-primary mb-4">{gallery.title}</h2>
            <p className="text-on-surface-variant max-w-xl">{gallery.description}</p>
          </div>
          <Link 
            to="/gallery" 
            className="group flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors whitespace-nowrap"
          >
            View Full Gallery
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gallery.featured.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[2rem] overflow-hidden shadow-xl group relative aspect-[4/5] bg-white border border-outline-variant/10"
            >
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src={item.url} 
                alt={item.label} 
              />
              <Link to="/gallery" className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <span className="material-symbols-outlined text-white text-5xl">fullscreen</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
