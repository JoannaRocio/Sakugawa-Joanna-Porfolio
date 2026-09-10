import { useTranslation } from 'react-i18next';
import { useProfile } from '../hooks/useProfile';
import { LanguageSelector } from '../components/LanguageSelector';
import { HeroSection } from '../components/sections/HeroSection';
import { About } from '../components/sections/About';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { Skills } from '../components/sections/Skills';
import { Education } from '../components/sections/Education';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { PhoneIcon, MailIcon } from 'lucide-react';

export const Home = () => {
  const { t } = useTranslation();
  const profileData = useProfile();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Navbar con efecto Glassmorphism */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
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

      {/* Hero Rediseñado */}
      <HeroSection />

      {/* Resto de Secciones */}
      <About />
      <ExperienceSection />
      <Skills />
      <Education />
      <ProjectsSection />

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-900 bg-slate-950 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">{t('sections.contact')}</h2>
          <p className="text-slate-400 text-sm flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <MailIcon className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{profileData.contact.email}</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <PhoneIcon className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{profileData.contact.phone}</span>
            </span>
          </p>
          <p className="text-xs text-slate-600">© 2026 Sakugawa Joanna Rocio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};