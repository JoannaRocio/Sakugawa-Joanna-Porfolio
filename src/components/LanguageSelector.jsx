import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  const currentLng = i18n.language || 'en';

  return (
    <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-medium bg-slate-900/80 p-1 sm:p-1.5 rounded-lg border border-slate-800 whitespace-nowrap shrink-0">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 sm:px-2.5 py-1 rounded-md transition-colors ${
          currentLng.startsWith('en')
            ? 'bg-cyan-500 text-slate-950 font-bold'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        English
      </button>
      <span className="text-slate-600">|</span>
      <button
        onClick={() => changeLanguage('ja')}
        className={`px-2 sm:px-2.5 py-1 rounded-md transition-colors ${
          currentLng.startsWith('ja')
            ? 'bg-cyan-500 text-slate-950 font-bold'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        日本語
      </button>
      <span className="text-slate-600">|</span>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-2 sm:px-2.5 py-1 rounded-md transition-colors ${
          currentLng.startsWith('es')
            ? 'bg-cyan-500 text-slate-950 font-bold'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        Español
      </button>
    </div>
  );
};