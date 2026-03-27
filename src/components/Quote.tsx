import { motion } from "motion/react";
import { Quote as QuoteIcon } from "lucide-react";

export default function Quote() {
  return (
    <section className="py-24 bg-blue-600 dark:bg-blue-700 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <QuoteIcon className="text-white/20 mx-auto mb-8" size={64} />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight italic">
            "Nursing is not just a profession, it is a commitment to care."
          </h2>
          <div className="w-16 h-1 bg-white/30 mx-auto rounded-full mb-6" />
          <p className="text-white/80 font-bold uppercase tracking-[0.3em] text-sm">Anketse Dereje</p>
        </motion.div>
      </div>
    </section>
  );
}
