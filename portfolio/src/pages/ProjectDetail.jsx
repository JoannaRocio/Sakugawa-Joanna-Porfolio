import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../data/projects';

export const ProjectDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Project Not Found</h1>
          <Link to="/" className="text-cyan-400 hover:underline">{t('sections.backToProjects')}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link to="/" className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold text-sm">
          {t('sections.backToProjects')}
        </Link>

        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold">{project.title}</h1>
          <p className="text-lg text-slate-400">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs bg-cyan-950/60 text-cyan-400 rounded-md border border-cyan-800/50 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </header>

        <section className="p-8 rounded-xl bg-slate-900/60 border border-slate-800 space-y-6">
          <h2 className="text-2xl font-bold text-slate-100">Overview</h2>
          <p className="text-slate-300 leading-relaxed">{project.fullDescription}</p>

          <h3 className="text-xl font-bold text-slate-100 pt-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-slate-100 pt-4">My Participation & Role</h3>
          <p className="text-slate-300 leading-relaxed">{project.myRole}</p>

          <div className="flex flex-wrap gap-4 pt-6">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-colors"
              >
                {t('sections.visitSite')} ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg border border-slate-700 transition-colors"
              >
                {t('sections.viewGithub')}
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};