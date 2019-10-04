import { call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_QUIZ_QUESTIONS, LOAD_IMAGES } from './constants';
import unsplashID from '../../cred';
import {
  loadQuizQuestionsSuccess,
  loadImagesSuccess,
  errorLoadQuizQuestions,
  errorLoadImages
} from './actions';

function getQuizQuestions() {
  return axios.get('http://localhost:5000/quizQuestions');
}
export function* loadQuizQuestions() {
  try {
    const resp = yield call(getQuizQuestions);
    yield put(loadQuizQuestionsSuccess(resp.data));
  } catch (e) {
    yield put(errorLoadQuizQuestions(e));
  }
}

function getImages() {
  return axios.get('https://api.unsplash.com/search/photos', {
    params: { query: 'germany' },
    headers: {
      Authorization: `Client-ID ${unsplashID}`
    }
  });
}

export function* loadImages() {
  try {
    const resp = yield call(getImages);
    yield put(loadImagesSuccess(resp.data.results));
  } catch (e) {
    yield put(errorLoadImages(e));
  }
}

export default function* watcherSagaQuizPage() {
  yield takeLatest(LOAD_QUIZ_QUESTIONS, loadQuizQuestions);
  yield takeLatest(LOAD_IMAGES, loadImages);
}
