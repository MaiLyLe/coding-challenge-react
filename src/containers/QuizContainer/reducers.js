import {
  LOAD_QUIZ_QUESTIONS_SUCCESS,
  LOAD_QUIZ_QUESTIONS_ERROR,
  LOAD_IMAGES_SUCCESS,
  LOAD_IMAGES_ERROR
} from './constants';

function quizPageReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_QUIZ_QUESTIONS_SUCCESS:
      return { ...state, quizQuestions: action.quiz_questions };
    case LOAD_QUIZ_QUESTIONS_ERROR:
      return state.set('error_message_load_quiz_questions', action.error);
    case LOAD_IMAGES_SUCCESS:
      console.log(action.images);
      return { ...state, images: action.images };
    case LOAD_IMAGES_ERROR:
      return state.set('error_message_load_images', action.error);
    default:
      return state;
  }
}

export default quizPageReducer;
