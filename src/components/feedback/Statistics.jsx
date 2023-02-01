import React from 'react';
import { FeedbeckText, FeedbackSpan } from './feedback.styled';
// import PropTypes from 'prop-types';

const Statistics = ({
  Good,
  Neutral,
  Bed,
  total,
  positiveFeedback,
  title,
}) => (
  <>
    {title && <h3>{title}</h3>}
    <FeedbeckText>
      Good: <FeedbackSpan>{Good}</FeedbackSpan>
    </FeedbeckText>
   <FeedbeckText>
      Neutral: <FeedbackSpan>{Neutral}</FeedbackSpan>
    </FeedbeckText>
    <FeedbeckText>
      Bad: <FeedbackSpan>{ Bed}</FeedbackSpan>
    </FeedbeckText>
    <FeedbeckText>
      Total Feedback: <FeedbackSpan>{total} </FeedbackSpan>
    </FeedbeckText>
    <FeedbeckText>
      Positive feedback: <FeedbackSpan>{positiveFeedback} % </FeedbackSpan>
    </FeedbeckText>
  </>
);

export default Statistics;

// Statistics.propTypes = {
//   total: PropTypes.number.isRequired,
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
//   title: PropTypes.string,
// }