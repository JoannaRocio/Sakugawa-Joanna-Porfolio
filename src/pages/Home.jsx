import { useTranslation } from 'react-i18next';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { LanguageSelector } from '../components/LanguageSelector';
import { CVDownloadMenu } from '../components/CVDownloadMenu';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Education } from '../components/sections/Education';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            {profileData.shortName}
          </span>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
              <a href="#about" className="hover:text-cyan-400 transition-colors">{t('nav.about')}</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">{t('nav.experience')}</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">{t('nav.skills')}</a>
              <a href="#education" className="hover:text-cyan-400 transition-colors">{t('nav.education')}</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">{t('nav.projects')}</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">{t('nav.contact')}</a>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            {t('hero.visa')}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {profileData.name}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-cyan-400">
            {t('hero.role')}
          </p>
          <p className="text-slate-400 text-base max-w-2xl leading-relaxed">
            {t('about.summary')}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <CVDownloadMenu />
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold rounded-lg transition-colors flex items-center space-x-2"
            >
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Secciones */}
      <About />

      {/* Experiencia */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-900">
        <h2 className="text-3xl font-bold mb-10 text-cyan-400">{t('sections.experience')}</h2>
        <div className="space-y-8">
          {profileData.experience.map((exp) => (
            <div key={exp.id} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                  <p className="text-cyan-400 font-medium">{exp.company} • {exp.location}</p>
                </div>
                <span className="text-sm text-slate-400 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm mb-4">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs bg-slate-800 text-slate-300 rounded-md border border-slate-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Skills />
      <Education />

      {/* Proyectos */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-900">
        <h2 className="text-3xl font-bold mb-10 text-cyan-400">{t('sections.projects')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="rounded-xl bg-slate-900/60 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all flex flex-col">
              <div className="p-6 flex-1 space-y-4">
                <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-cyan-950/60 text-cyan-400 rounded-md border border-cyan-800/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-slate-900/90 border-t border-slate-800/60 flex items-center justify-between">
                <Link
                  to={`/projects/${project.id}`}
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center space-x-1"
                >
                  <span>{t('sections.viewDetails')}</span>
                  <span>→</span>
                </Link>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {t('sections.visitSite')} ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contacto */}
      <footer id="contact" className="border-t border-slate-900 bg-slate-950 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold text-slate-100">{t('sections.contact')}</h2>
          <p className="text-slate-400">{profileData.contact.email} • {profileData.contact.phone}</p>
          <p className="text-xs text-slate-600">© 2026 Sakugawa Joanna Rocio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};