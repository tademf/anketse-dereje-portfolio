import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Heart, Stethoscope, Activity, Download, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import AnketseProfile from "../assets/photo_2026-03-27_16-23-43.jpg";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Patient Care | Compassion | Clinical Skills";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        setTimeout(() => { i = 0; }, 2000);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleDownload = () => {
    toast.info("Resume download started!");
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-20 lg:pt-0 flex items-center bg-white dark:bg-gray-950 transition-colors overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* 'flex-row' ensures they stay side-by-side even on small phones */}
        <div className="flex flex-row items-center justify-between gap-2 md:gap-12">
          
          {/* Left Side: Text Content (60% width on mobile) */}
          <div className="w-[65%] lg:w-1/2 text-left space-y-3 md:space-y-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I’m <span className="text-blue-600 block md:inline">Anketse Dereje</span>
              </h1>
              <div className="flex flex-wrap gap-1 text-[8px] md:text-[11px] font-semibold tracking-wider uppercase text-blue-500 mt-1">
                <span>Final Year</span>
                <span className="text-gray-300">|</span>
                <span>2026 Grad</span>
              </div>
            </motion.div>

            <div className="h-4 md:h-6">
              <p className="text-[10px] md:text-lg font-medium text-gray-700 dark:text-gray-300 border-l-2 border-blue-600 pl-2 md:pl-3">
                {text}<span className="animate-pulse">|</span>
              </p>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[10px] md:text-base text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed line-clamp-3 md:line-clamp-none"
            >
              Dedicated 4th-year Nursing student at Debark University. Committed to compassionate patient care and healthcare innovation.
            </motion.p>

            {/* Hidden on very small screens to save space, shown on medium+ */}
            <div className="hidden md:flex flex-wrap gap-4 pt-2">
              {["Patient Care", "Emergency Support", "Community Health"].map((s) => (
                <span key={s} className="flex items-center gap-1.5 text-[11px] font-medium text-gray-500">
                  <div className="w-1 h-1 rounded-full bg-blue-500" /> {s}
                </span>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-2 pt-2"
            >
              <a href="#experience" className="px-3 py-2 md:px-5 md:py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all text-[10px] md:text-sm font-semibold flex items-center justify-center gap-1">
                Experience <ArrowRight size={12} className="md:w-4 md:h-4" />
              </a>
              <button 
                onClick={handleDownload}
                className="px-3 py-2 md:px-5 md:py-2.5 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 transition-all text-[10px] md:text-sm font-semibold flex items-center justify-center gap-1"
              >
                <Download size={12} className="md:w-4 md:h-4" /> CV
              </button>
            </motion.div>
          </div>

          {/* Right Side: Image Content (35% width on mobile) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-[35%] lg:w-1/2 flex justify-end"
          >
            <div className="relative group w-full max-w-[120px] md:max-w-xs">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border-2 md:border-4 border-white dark:border-gray-900 shadow-xl">
                <img 
                  src={AnketseProfile}
                  alt="Anketse Dereje" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
