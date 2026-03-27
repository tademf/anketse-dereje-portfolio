import { motion } from "motion/react";
import { MapPin, Building2, GraduationCap } from "lucide-react";

const locations = [
  {
    name: "Debark University",
    type: "Academic",
    location: "Debark, Ethiopia",
    description: "Current studies in the Nursing Department, focusing on clinical excellence and research.",
    icon: GraduationCap
  },
  {
    name: "Debark General Hospital",
    type: "Clinical",
    location: "Debark, Ethiopia",
    description: "Clinical internship providing hands-on patient care and medical procedures.",
    icon: Building2
  },
  {
    name: "Gondar University Hospital",
    type: "Clinical",
    location: "Gondar, Ethiopia",
    description: "Specialized clinical rotations in various hospital departments.",
    icon: Building2
  }
];

export default function Location() {
  return (
    <section id="location" className="section-padding bg-white dark:bg-gray-950 transition-colors">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Professional Locations</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Where I have studied and worked to gain my professional experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-600/20">
                <loc.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{loc.name}</h3>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-4">
                <MapPin size={14} />
                {loc.location}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {loc.description}
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md text-xs font-bold uppercase tracking-widest">
                  {loc.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
