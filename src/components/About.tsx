import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-950 transition-colors">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-50 dark:bg-blue-900/10 rounded-3xl -z-10" />
              <img 
                src="https://c1.wallpaperflare.com/preview/937/818/491/stethoscope-doctor-md-medical-health-hospital.jpg" 
                alt="Anketse Dereje" 
                className="w-full h-auto rounded-2xl shadow-sm object-cover aspect-square border border-gray-100 dark:border-gray-800" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </motion.div>
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I am a compassionate and dedicated 4th-year Nursing student at Debark University, Ethiopia. My journey is driven by a deep commitment to patient advocacy, evidence-based practice, and improving healthcare access in rural communities.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Throughout my clinical rotations in Medical-Surgical, Pediatrics, and Community Health, I have honed my clinical skills and developed a holistic approach to patient care. I am eager to contribute my skills and enthusiasm to a professional clinical setting.
              </p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-600 rounded-r-2xl italic text-gray-700 dark:text-gray-300 font-medium"
              >
                "Dedicated to compassionate patient care and lifelong learning."
              </motion.div>

              <div className="pt-4 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Education</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">BSc in Nursing (Expected 2026)</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Debark, Ethiopia</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
