import { motion } from "framer-motion";
import { mockData } from "../data/mockData";
import { cn } from "../lib/utils";

export const Workflow = () => {
  const { workflow } = mockData;

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-extrabold text-primary mb-4">{workflow.title}</h2>
          <p className="text-on-surface-variant">{workflow.description}</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-outline-variant/30 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {workflow.steps.map((step: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn("bg-white p-8 rounded-xl shadow-sm border-t-4", step.color)}
              >
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-6", step.bg)}>
                  {step.num}
                </div>
                <h4 className="font-headline font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-on-surface-variant text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
