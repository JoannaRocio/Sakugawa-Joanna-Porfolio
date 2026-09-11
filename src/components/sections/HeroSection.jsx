import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useProfile } from '../../hooks/useProfile';
import { CVDownloadMenu } from '../CVDownloadMenu';
import { MapPin, ShieldCheck, Mail, Code2, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useTranslation();
  const profileData = useProfile();

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center pt-12 pb-20 px-6">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Lado Izquierdo: Información principal y Avatar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 space-y-6"
        >
          {/* Avatar + Badge */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <img
                src="/images/avatar.PNG"
                alt={profileData.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/10"
              />
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-950"></span>
              </span>
            </div>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold backdrop-blur-md shadow-lg shadow-cyan-500/5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>{t('hero.visa')}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {profileData.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              {t('hero.role')}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center space-x-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{t('hero.location')}</span>
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center space-x-1.5 text-emerald-400">
              <span>{t('hero.available')}</span>
            </span>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            {t('hero.summary')}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <CVDownloadMenu />
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-200 font-semibold rounded-lg transition-all flex items-center space-x-2 backdrop-blur-md"
            >
              <svg className="w-5 h-5 fill-current text-slate-300" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>{t('hero.github')}</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-300 font-semibold rounded-lg transition-all flex items-center space-x-2"
            >
              <Mail className="w-5 h-5 text-slate-400" />
              <span>{t('hero.contactMe')}</span>
            </a>
          </div>
        </motion.div>

        {/* Lado Derecho: Tech Profile Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4"
        >
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl shadow-2xl relative group hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div className="flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold text-slate-200">Developer Profile</span>
              </div>
              <Sparkles className="w-4 h-4 text-cyan-400 opacity-60" />
            </div>

            <div className="space-y-4 text-xs font-mono text-slate-300">
              <div>
                <span className="text-cyan-400">const</span> <span className="text-teal-300">developer</span> = &#123;
              </div>
              <div className="pl-4 space-y-1 text-slate-400">
                <p>experience: <span className="text-emerald-400">'6+ Years'</span>,</p>
                <p>core: [<span className="text-amber-300">'React'</span>, <span className="text-amber-300">'Angular'</span>, <span className="text-amber-300">'TypeScript'</span>],</p>
                <p>backend: [<span className="text-amber-300">'Java'</span>, <span className="text-amber-300">'.NET'</span>],</p>
                <p>location: <span className="text-emerald-400">'Saitama, Japan'</span>,</p>
                <p>workRights: <span className="text-cyan-400">true</span></p>
              </div>
              <div>&#125;;</div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Primary Tech Stack</span>
              <span className="text-cyan-400 font-semibold">Frontend Specialist</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};