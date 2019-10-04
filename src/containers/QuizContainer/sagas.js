import { call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_QUIZ_QUESTIONS, LOAD_IMAGES } from './constants';

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
    let resp = yield call(getQuizQuestions);
    console.log(resp.data);
    yield put(loadQuizQuestionsSuccess(resp.data));
  } catch (e) {
    yield put(errorLoadImages(e));
  }
}

function getImages() {
  return axios.get('https://api.unsplash.com/search/photos', {
    params: { query: 'germany' },
    headers: {
      Authorization:
        'Client-ID 8e93ae9ae270fc7974d82633593fcb81b89061eb9aac48975f2d0344d9197999'
    }
  });
}

export function* loadImages() {
  try {
    let resp = yield call(getImages);
    yield console.log("ffnfn");
    yield console.log(resp.data);
    yield put(loadImagesSuccess(resp.data));
  } catch (e) {
    console.error(e);
  }
}

export default function* watcherSagaQuizPage() {
  console.log("watched");
  yield takeLatest(LOAD_QUIZ_QUESTIONS, loadQuizQuestions);
  yield takeLatest(LOAD_IMAGES, loadImages);
}
