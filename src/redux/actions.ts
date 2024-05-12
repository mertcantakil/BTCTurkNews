export const FETCH_NEWS_SOURCES = 'FETCH_NEWS_SOURCES';
export const FETCH_TOP_HEADLINES = 'FETCH_TOP_HEADLINES';

export const SET_NEWS_SOURCES = 'SET_NEWS_SOURCES';
export const SET_TOP_HEADLINES = 'SET_TOP_HEADLINES';

export const SET_SELECTED_TAGS = 'SET_SELECTED_TAGS';

export const setSelectedTags = (tags: string[]) => ({
  type: SET_SELECTED_TAGS,
  data: tags,
});

export const fetchTopHeadlines = (sourceId: string) => ({
  type: FETCH_TOP_HEADLINES,
  payload: sourceId,
});

export const fetchNewsSources = () => ({ type: FETCH_NEWS_SOURCES });
