import { useTranslation } from 'react-i18next';
import { projects } from '../data';

export const useProjectsData = () => {
  const { i18n } = useTranslation();
  
  const currentLang = i18n.language ? i18n.language.split('-')[0] : 'en';

  return projects[currentLang] || projects.en;
};