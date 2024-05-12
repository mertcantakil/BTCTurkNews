import { Source } from "./interfaces/interface";

export const filterNewsByTagsAndLang = (news: Source[], selectedTags: string[]) => {
  if (selectedTags.length === 0) return news.filter(source => source.language === 'en');
  return news.filter(source => selectedTags.includes(source.category) && source.language === 'en');
};

export const dateFormatter = (date: string) => {
  return date ? date.split('T')[1].substring(0, 5) : '';
};

export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
