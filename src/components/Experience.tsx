import { motion } from "motion/react";
import { Hospital, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";

const experiences = [
  {
    hospital: "Debark General Hospital",
    role: "Clinical Nursing Student",
    duration: "Jan 2025 – Mar 2025",
    location: "Debark, Ethiopia",
    responsibilities: [
      "Assisted in **patient care** and **monitoring vital signs** accurately.",
      "Supported nurses in **medication administration** and documentation.",
      "Maintained **patient hygiene** and comfort in the surgical ward.",
      "Collaborated with the **multidisciplinary team** for holistic care."
    ],
    achievements: [
      "Assisted in care of 20+ patients daily",
      "Improved patient monitoring efficiency by 15%"
    ],
    tags: ["Patient Care", "Vital Signs", "Medication Support"]
  },
  {
    hospital: "Gondar University Hospital",
    role: "Student Nurse (Clinical Rotation)",
    duration: "Oct 2024 – Dec 2024",
    location: "Gondar, Ethiopia",
    responsibilities: [
      "Performed **basic nursing procedures** under strict supervision.",
      "Educated patients on **post-discharge care** and nutrition.",
      "Managed **patient records** with high attention to detail.",
      "Participated in **intensive care unit** rounds and observations."
    ],
    achievements: [
      "Successfully managed 10+ complex patient records",
      "Commended for clear patient communication"
    ],
    tags: ["ICU Observation", "Patient Education", "Documentation"]
  },
  {
    hospital: "Local Health Center",
    role: "Community Health Volunteer",
    duration: "July 2024 – Sept 2024",
    location: "Rural Debark",
    responsibilities: [
      "Conducted **health screenings** in remote rural communities.",
      "Assisted in **immunization campaigns** for children and mothers.",
      "Provided **health education** on hygiene and disease prevention.",
      "Supported **maternal health** services and prenatal checkups."
    ],
    achievements: [
      "Reached 50+ families in rural outreach programs",
      "Coordinated 3 community health workshops"
    ],
    tags: ["Community Health", "Immunization", "Rural Outreach"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-950 transition-colors overflow-hidden">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">Clinical Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            “Hands-on training in real healthcare environments”
          </p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-blue-400 to-transparent rounded-full" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.hospital + exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative pl-12 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[13px] md:left-[29px] top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-950 shadow-lg z-10" />

                <motion.div 
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl border-l-8 border-blue-600 dark:border-blue-500 transition-all group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors flex items-center gap-2">
                        <Hospital className="text-blue-600" size={24} />
                        {exp.hospital}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">{exp.role}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                        <Calendar size={16} className="text-blue-500" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                        <MapPin size={16} className="text-blue-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 flex items-center gap-2">
                        Responsibilities
                      </h4>
                      <ul className="space-y-4">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span dangerouslySetInnerHTML={{ __html: resp.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white font-bold">$1</strong>') }} />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 flex items-center gap-2">
                          <Award size={16} className="text-blue-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((ach, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm font-medium bg-blue-50/50 dark:bg-blue-900/10 p-3 rounded-xl border border-blue-100/50 dark:border-blue-800/30">
                              <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                              {ach}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-gray-200 dark:border-gray-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
