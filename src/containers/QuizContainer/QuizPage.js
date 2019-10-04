import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { loadQuizQuestions, loadImages } from './actions';
import QuizCard from '../../components/QuizCard';
import EvaluationCard from '../../components/EvaluationCard';

function QuizPage(props) {
  const { images, quizQuestions } = useSelector(state => ({
    images: state.images,
    quizQuestions: state.quizQuestions
  }));
  const [counterCorrectAnswers, setCounterCorrectAnswers] = useState(0);
  const [questionCounter, setQuestionCounter] = useState(0);

  useEffect(() => {
    props.fetchImages();
    props.fetchQuizQuestions();
  }, []);

  const onClickContinue = () => {
    setQuestionCounter(questionCounter + 1);
  };

  const onEvaluateRightAnswer = () => {
    setCounterCorrectAnswers(counterCorrectAnswers + 1);
  };

  if (quizQuestions && images) {
    if (questionCounter === quizQuestions.length) {
      return (
        <EvaluationCard
          totalNumberOfQuestions={quizQuestions.length}
          numberOfRightAnswers={counterCorrectAnswers}
        />
      );
    }
    return (
      <div>
        {quizQuestions.map((questionObj, index) => {
          if (index === questionCounter) {
            return (
              <QuizCard
                imageUrl={images[questionCounter].urls.regular}
                quote={questionObj.quote}
                possibleAnswers={['Hitler', 'Höcke']}
                counter={questionCounter}
                rightAnswer={questionObj.rightAnswer}
                onClickContinue={onClickContinue}
                countRightAnswers={onEvaluateRightAnswer}
              />
            );
          }
          return null;
        })}
      </div>
    );
  }
  return null;
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
