import { combineReducers } from 'redux';
import { SET_NEWS_SOURCES, SET_TOP_HEADLINES, SET_SELECTED_TAGS } from './actions';

export interface NewsState {
  sources: any[];
  topHeadlines: any[];
  selectedTags: string[];
}

const initialNewsState: NewsState = {
  sources: [],
  topHeadlines: [],
  selectedTags: [],
};

const newsReducer = (state = initialNewsState, action: any) => {
  switch (action.type) {
    case SET_NEWS_SOURCES:
      return { ...state, sources: action.payload };
    case SET_TOP_HEADLINES:
      return { ...state, topHeadlines: action.payload };
    case SET_SELECTED_TAGS:
      return { ...state, selectedTags: action.data };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  news: newsReducer
});