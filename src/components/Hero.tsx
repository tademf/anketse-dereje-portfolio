import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Heart, Stethoscope, Activity, Thermometer, Download, ArrowRight } from "lucide-react";
import { toast } from "sonner";

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
                  src="data:image/jpeg;base64,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" 
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
