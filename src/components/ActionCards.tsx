import { motion } from "motion/react";
import { Briefcase, Brain, MapPin, MessageSquare } from "lucide-react";

export default function ActionCards() {
  const cards = [
    {
      title: "Experience",
      description: "Clinical rotations & academic history",
      icon: <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />,
      href: "#experience",
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Skills",
      description: "Core nursing & clinical competencies",
      icon: <Brain className="text-purple-600 dark:text-purple-400" size={24} />,
      href: "#skills",
      color: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      title: "Location",
      description: "Where I study and practice",
      icon: <MapPin className="text-emerald-600 dark:text-emerald-400" size={24} />,
      href: "#location",
      color: "bg-emerald-50 dark:bg-emerald-900/20"
    },
    {
      title: "Contact",
      description: "Get in touch for opportunities",
      icon: <MessageSquare className="text-orange-600 dark:text-orange-400" size={24} />,
      href: "#contact",
      color: "bg-orange-50 dark:bg-orange-900/20"
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-950 relative z-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass dark:glass-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col gap-4 group transition-all"
            >
              <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{card.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{card.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
