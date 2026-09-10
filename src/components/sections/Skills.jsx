import { useTranslation } from 'react-i18next';
import { profileData } from '../../data/profile';

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-900">
      <h2 className="text-3xl font-bold mb-10 text-cyan-400">{t('sections.skills')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(profileData.skills).map(([category, items]) => (
          <div key={category} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-slate-100 border-b border-slate-800 pb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-200 rounded-md border border-slate-700/60">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};