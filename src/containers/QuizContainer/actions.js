import {
  LOAD_QUIZ_QUESTIONS,
  LOAD_QUIZ_QUESTIONS_SUCCESS,
  LOAD_QUIZ_QUESTIONS_ERROR,
  LOAD_IMAGES,
  LOAD_IMAGES_SUCCESS,
  LOAD_IMAGES_ERROR
} from './constants';

export function loadQuizQuestions() {
  return {
    type: LOAD_QUIZ_QUESTIONS,
  };
};

export function loadQuizQuestionsSuccess(quizQuestions) {
  return {
    type: LOAD_QUIZ_QUESTIONS_SUCCESS,
    quiz_questions: quizQuestions,
  };
};

export function errorLoadQuizQuestions(error) {
  return {
    type: LOAD_QUIZ_QUESTIONS_ERROR,
    error_message_load_quiz_questions: error
  };
};

export function loadImages() {
  return {
    type: LOAD_IMAGES,
  };
};

export function loadImagesSuccess(images) {
  return {
    type: LOAD_IMAGES_SUCCESS,
    images: images,
  };
};

export function errorLoadImages(error) {
  return {
    type: LOAD_IMAGES_ERROR,
    error_message_load_images: error
  };
};
