import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useProfile } from '../../hooks/useProfile';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const ExperienceSection = () => {
  const { t } = useTranslation();
  const profileData = useProfile();

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900 relative">
      <div className="mb-14 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center md:justify-start space-x-3">
          <Briefcase className="w-8 h-8 text-cyan-400" />
          <span>{t('sections.experience')}</span>
        </h2>
        <p className="text-slate-400 text-sm mt-2">6+ years of continuous engineering evolution</p>
      </div>

      <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
        {profileData.experience.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-10 group"
          >
            {/* Punto acentuado de la timeline */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300"></div>

            {/* Card de la experiencia */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 backdrop-blur-md transition-all duration-300 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center space-x-2 text-cyan-400 font-medium text-sm mt-1">
                    <span>{exp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center text-slate-400 text-xs">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 text-xs font-mono border border-slate-700/50 self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.period}</span>
                </span>
              </div>

              {/* Responsabilidades */}
              <ul className="space-y-2 text-slate-300 text-sm leading-relaxed">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-cyan-400 font-bold mt-1">›</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Badges de Tecnologías */}
              <div className="pt-2 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-slate-950 text-slate-300 rounded-md border border-slate-800/80 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};