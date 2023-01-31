import React from 'react';
import { FeedbeckText, FeedbackSpan } from './feedback.styled';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  title,
}) => (
  <>
    {title && <h3>{title}</h3>}
    <FeedbeckText>
      Good: <FeedbackSpan>{good}</FeedbackSpan>
    </FeedbeckText>
    <FeedbeckText>
      Neutral: <FeedbackSpan>{neutral}</FeedbackSpan>
    </FeedbeckText>
    <FeedbeckText>
      Bad: <FeedbackSpan>{bad}</FeedbackSpan>
    </FeedbeckText>
    <FeedbeckText>
      Total Feedback: <FeedbackSpan>{total} </FeedbackSpan>
    </FeedbeckText>
    <FeedbeckText>
      Positive feedback: <FeedbackSpan>{positivePercentage} % </FeedbackSpan>
    </FeedbeckText>
  </>
);

export default Statistics;

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  title: PropTypes.string,
}