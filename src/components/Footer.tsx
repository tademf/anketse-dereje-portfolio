import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400 transition-colors border-t border-gray-100 dark:border-gray-900">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Anketse Dereje</h3>
            <p className="text-sm max-w-xs">Dedicated to compassionate patient care and clinical excellence.</p>
          </div>
          
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:anketse@example.com", label: "Email" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all border border-gray-100 dark:border-gray-800"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} Anketse Dereje. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
