import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Heart, Stethoscope, Activity, Thermometer, Download, ArrowRight } from "lucide-react";
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
        setTimeout(() => { i = 0; }, 2000); // Pause at the end
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleDownload = () => {
    toast.info("Resume download started!", {
      description: "Fetching the latest version of my CV...",
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 transition-colors overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 animate-gradient bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 -z-10" />
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] text-blue-500/20"
        >
          <Heart size={64} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[15%] text-blue-600/20"
        >
          <Stethoscope size={80} />
        </motion.div>
        <motion.div 
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[20%] text-blue-400/20"
        >
          <Activity size={56} />
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:text-left text-center lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight leading-tight"
            >
              Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-400 animate-gradient-text">Anketse Dereje</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
            >
              {["Final Year Student", "2026 Graduate", "Debark University"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-blue-100 dark:border-blue-800">
                  {tag}
                </span>
              ))}
            </motion.div>

            <div className="h-10 mb-8">
              <p className="text-xl md:text-2xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 via-pink-500 via-orange-500 to-blue-600 animate-gradient-text">
                {text}<span className="text-blue-600 dark:text-blue-400 animate-pulse">|</span>
              </p>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-xl lg:mx-0 mx-auto leading-relaxed"
            >
              Dedicated 4th-year Nursing student at Debark University. Committed to providing compassionate patient care and advancing healthcare through innovation and community service.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
            >
              {["Patient Care", "Emergency Support", "Community Health"].map((specialty) => (
                <div key={specialty} className="flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {specialty}
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <a href="#experience" className="px-8 py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold text-base flex items-center gap-2">
                View Experience <ArrowRight size={18} />
              </a>
              <button 
                onClick={handleDownload}
                className="px-8 py-3.5 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-all font-semibold text-base flex items-center gap-2"
              >
                <Download size={18} /> Download CV
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Premium Image Styling */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-[12px] border-white dark:border-gray-900 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10" />
                <img 
                  src={AnketseProfile}
                  alt="Anketse Dereje" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              {/* Subtle Glow Effect */}
              <div className="absolute -inset-4 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl -z-10 animate-pulse" />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Heart size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">Commitment</p>
                  <p className="text-base font-bold text-gray-900 dark:text-white">Patient Care</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-600">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-gray-200 dark:border-gray-800 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-1 bg-blue-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
