import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { mockData } from "../data/mockData";

const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract number and suffix (e.g., "25+" -> 25, "+")
  const numericValue = parseInt(value) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  const displayValue = useTransform(springValue, (latest) => 
    Math.floor(latest).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(numericValue);
    }
  }, [isInView, numericValue, springValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

export const Stats = () => {
  const { stats } = mockData;

  return (
    <section className="bg-surface-container-low py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-4xl font-headline font-extrabold text-primary mb-1 tracking-tighter">
                <Counter value={stat.value} />
              </p>
              <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant line-clamp-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
