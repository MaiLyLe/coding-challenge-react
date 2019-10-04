import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { loadQuizQuestions, loadImages } from './actions';

function QuizPage(props) {
  const { images, quizQuestions } = useSelector(state => ({
    images: state.images,
    quizQuestions: state.quizQuestions
  }));
  useEffect(() => {
    props.fetchImages();
    props.fetchQuizQuestions();
  }, []);

  console.log(images);
  console.log(quizQuestions);
  return <div></div>;
}

const mapDispatchToProps = dispatch => {
  return {
    fetchImages: () => dispatch(loadImages()),
    fetchQuizQuestions: () => dispatch(loadQuizQuestions())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(QuizPage);
