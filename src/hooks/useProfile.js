import { useTranslation } from 'react-i18next';
import { profiles } from '../data';

export const useProfile = () => {
  const { i18n } = useTranslation();
  
  // Obtenemos el idioma actual (extrae 'en', 'es' o 'ja' incluso si i18n devuelve 'en-US')
  const currentLang = i18n.language ? i18n.language.split('-')[0] : 'en';

  // Retorna el objeto profile correspondiente o cae en inglés por defecto
  return profiles[currentLang] || profiles.en;
};