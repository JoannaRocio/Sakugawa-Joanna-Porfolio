import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ExternalLink, Code2, CheckCircle2 } from 'lucide-react';
import { useProjectsData } from '../hooks/useProjectsData';

export const ProjectDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const projectsData = useProjectsData();
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
      <div className="max-w-5xl mx-auto space-y-10">
        <Link to="/" className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>{t('sections.backToProjects')}</span>
        </Link>

        <header className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">{project.title}</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-mono bg-cyan-950/60 text-cyan-400 rounded-md border border-cyan-800/50">
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Galería de Capturas */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">Project Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((imgUrl, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-slate-800/80 bg-slate-900/50 shadow-lg group">
                <img
                  src={imgUrl}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Detalles Técnicos */}
        <section className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p className="text-slate-300 leading-relaxed">{project.fullDescription}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-2 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">My Role & Engineering Decisions</h3>
            <p className="text-slate-300 leading-relaxed">{project.myRole}</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-colors flex items-center space-x-2"
              >
                <span>{t('sections.visitSite')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg border border-slate-700 transition-colors flex items-center space-x-2"
              >
                <Code2 className="w-4 h-4" />
                <span>{t('sections.viewGithub')}</span>
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};