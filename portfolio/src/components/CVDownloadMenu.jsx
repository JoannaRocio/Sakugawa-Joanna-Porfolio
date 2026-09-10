import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { profileData } from '../data/profile';

export const CVDownloadMenu = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-200 flex items-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>{t('hero.downloadCV')}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg bg-slate-900 border border-slate-800 shadow-xl z-50 py-2">
          <a
            href={profileData.cvFiles.en}
            download="CV_Joanna_Sakugawa_English.pdf"
            className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
          >
            🇬🇧 CV in English
          </a>
          <a
            href={profileData.cvFiles.ja}
            download="CV_Joanna_Sakugawa_Japanese.pdf"
            className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
          >
            🇯🇵 CV 日本語
          </a>
          <a
            href={profileData.cvFiles.es}
            download="CV_Joanna_Sakugawa_Spanish.pdf"
            className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
          >
            🇪🇸 CV en Español
          </a>
        </div>
      )}
    </div>
  );
};