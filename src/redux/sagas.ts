import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { getNewsSources, getNewsTopHeadlines } from '../api/api';

const INTERVAL_DELAY = 30 * 1000;

function* fetchNewsSources(): Generator<any, void, any> {
  try {
    const data = yield call(getNewsSources);
    yield put({ type: 'SET_NEWS_SOURCES', payload: data });
  } catch (error) {
    console.error('fetching news sources failed', error);
  }
}

function* fetchTopHeadlines(action: any): Generator<any, void, any> {
  try {
    while (true) {
      const data = yield call(getNewsTopHeadlines, action.payload);
      yield put({ type: 'SET_TOP_HEADLINES', payload: data });
      yield delay(INTERVAL_DELAY);
    }
  } catch (error) {
    console.error('fetching news top headlines failed', error);
  }
}


function* newsSaga(): Generator<any, void, any> {
  yield takeLatest('FETCH_NEWS_SOURCES', fetchNewsSources);
  yield takeLatest('FETCH_TOP_HEADLINES', fetchTopHeadlines);
}

export default newsSaga;