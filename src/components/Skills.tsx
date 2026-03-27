import { motion } from "motion/react";
import { 
  Heart, Activity, Droplets, Thermometer, 
  FileText, FlaskConical, ShieldCheck, Zap,
  Brain, Users, MessageSquareHeart, Clock,
  Star
} from "lucide-react";

const skillCategories = [
  {
    title: "Clinical Skills",
    description: "Core medical competencies developed through hands-on hospital rotations.",
    skills: [
      { name: "Patient Care", level: 95, icon: Heart, top: true },
      { name: "Vital Signs Monitoring", level: 98, icon: Activity, top: true },
      { name: "IV Administration", level: 85, icon: Droplets },
      { name: "Wound Care", level: 90, icon: Thermometer }
    ]
  },
  {
    title: "Technical Skills",
    description: "Proficiency in medical systems, documentation, and safety protocols.",
    skills: [
      { name: "Medical Documentation", level: 92, icon: FileText },
      { name: "Infection Control", level: 95, icon: ShieldCheck, top: true },
      { name: "Emergency Response", level: 88, icon: Zap },
      { name: "Lab Support", level: 80, icon: FlaskConical }
    ]
  },
  {
    title: "Soft Skills",
    description: "Interpersonal strengths essential for compassionate and effective nursing.",
    skills: [
      { name: "Critical Thinking", level: 95, icon: Brain, top: true },
      { name: "Team Collaboration", level: 98, icon: Users },
      { name: "Empathetic Communication", level: 96, icon: MessageSquareHeart, top: true },
      { name: "Time Management", level: 90, icon: Clock }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-950 transition-colors overflow-hidden">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">Professional Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
            “A combination of clinical expertise, technical knowledge, and strong interpersonal skills developed through academic and practical experience.”
          </p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: catIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all group"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                  <span className="w-2 h-8 bg-blue-600 rounded-full" />
                  {category.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {category.description}
                </p>
              </div>

              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                          <skill.icon size={18} />
                        </div>
                        <span className="text-sm font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                          {skill.name}
                          {skill.top && (
                            <Star size={12} className="text-yellow-500 fill-yellow-500" />
                          )}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                    </div>

                    <div className="relative h-2.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + (skillIndex * 0.1) }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-400 dark:text-gray-500 font-medium flex items-center justify-center gap-2">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            Indicates core strengths and top-rated clinical skills
          </p>
        </motion.div>
      </div>
    </section>
  );
}
