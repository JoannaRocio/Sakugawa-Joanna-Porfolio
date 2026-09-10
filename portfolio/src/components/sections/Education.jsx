import { useTranslation } from 'react-i18next';
import { profileData } from '../../data/profile';

export const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Educación */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-cyan-400">{t('sections.education')}</h2>
          {profileData.education.map((edu, i) => (
            <div key={i} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
              <p className="text-cyan-400 font-medium text-sm">{edu.institution}</p>
              <div className="flex justify-between text-xs text-slate-400 pt-2">
                <span>{edu.period}</span>
                <span className="text-teal-400 font-semibold">{edu.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Cursos e Idiomas */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">{t('sections.courses')}</h2>
            {profileData.courses.map((course, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 mb-3">
                <h4 className="font-bold text-slate-200 text-sm">{course.title}</h4>
                <p className="text-xs text-slate-400">{course.institution} • {course.year}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{t('sections.languages')}</h2>
            <div className="flex flex-wrap gap-3">
              {profileData.languages.map((lang, i) => (
                <div key={i} className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm">
                  <span className="font-bold text-slate-200">{lang.name}: </span>
                  <span className="text-cyan-400">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};