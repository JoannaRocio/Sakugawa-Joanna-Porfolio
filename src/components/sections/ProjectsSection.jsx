import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../../data/projects';
import { Link } from 'react-router-dom';
import { FolderGit2, ExternalLink, ArrowRight } from 'lucide-react';

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
      <div className="mb-14 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center md:justify-start space-x-3">
          <FolderGit2 className="w-8 h-8 text-cyan-400" />
          <span>{t('sections.projects')}</span>
        </h2>
        <p className="text-slate-400 text-sm mt-2">Selection of real production applications and design systems</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col group hover:shadow-xl hover:shadow-cyan-500/5 backdrop-blur-md"
          >
            <div className="p-8 flex-1 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-cyan-500 hover:text-slate-950 text-slate-400 transition-all"
                    title={t('sections.visitSite')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-cyan-950/40 text-cyan-400 rounded-md border border-cyan-800/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between">
              <Link
                to={`/projects/${project.id}`}
                className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center space-x-1 group/link"
              >
                <span>{t('sections.viewDetails')}</span>
                <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};