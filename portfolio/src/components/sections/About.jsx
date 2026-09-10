import { useTranslation } from 'react-i18next';
import { profileData } from '../../data/profile';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-900">
      <h2 className="text-3xl font-bold mb-8 text-cyan-400">{t('about.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4 text-slate-300 leading-relaxed">
          <p>{t('about.summary')}</p>
          <p>{t('about.relocation')}</p>
        </div>
        <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3 text-sm">
          <div>
            <span className="text-slate-500 block text-xs uppercase tracking-wider">Ubicación</span>
            <span className="text-slate-200 font-medium">{profileData.location}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-xs uppercase tracking-wider">Estado de Visa</span>
            <span className="text-cyan-400 font-medium">{profileData.visaStatus}</span>
          </div>
        </div>
      </div>
    </section>
  );
};