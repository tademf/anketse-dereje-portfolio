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
    <section id="home" className="relative min-h-screen pt-24 lg:pt-0 flex items-center bg-white dark:bg-gray-950 transition-colors overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 animate-gradient bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-blue-900/10 dark:via-gray-950 dark:to-blue-900/10 -z-10" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <div className="text-left space-y-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-1"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I’m <span className="text-blue-600">Anketse Dereje</span>
              </h1>
              <div className="flex flex-wrap gap-2 text-[11px] font-semibold tracking-wider uppercase text-blue-500">
                <span>Final Year Student</span>
                <span className="text-gray-300">|</span>
                <span>2026 Graduate</span>
                <span className="text-gray-300">|</span>
                <span>Debark University</span>
              </div>
            </motion.div>

            <div className="h-6">
              <p className="text-sm md:text-lg font-medium text-gray-700 dark:text-gray-300 border-l-2 border-blue-600 pl-3">
                {text}<span className="animate-pulse">|</span>
              </p>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
            >
              Dedicated 4th-year Nursing student at Debark University. Committed to providing compassionate patient care and advancing healthcare through innovation and community service.
            </motion.p>

            <div className="flex flex-wrap gap-4 pt-2">
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
              className="flex flex-wrap gap-3 pt-4"
            >
              <a href="#experience" className="px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all text-sm font-semibold flex items-center gap-2">
                View Experience <ArrowRight size={16} />
              </a>
              <button 
                onClick={handleDownload}
                className="px-5 py-2.5 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 transition-all text-sm font-semibold flex items-center gap-2"
              >
                <Download size={16} /> Download CV
              </button>
            </motion.div>
          </div>

          {/* Right Side: Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-64 h-80 md:w-80 md:h-[400px] overflow-hidden rounded-2xl border-4 border-white dark:border-gray-900 shadow-2xl">
                <img 
                  src={AnketseProfile}
                  alt="Anketse Dereje" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Subtle Floating Card */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-xl border border-gray-100 dark:border-gray-800 hidden md:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Stethoscope size={20} />
                </div>
                <div className="pr-4">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tight">Focus</p>
                  <p className="text-xs font-bold dark:text-white">Healthcare Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
