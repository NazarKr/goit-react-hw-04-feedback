import React from 'react';
import { ButtonFeedback } from './feedback.styled';
// import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onClick }) => {
  return options.map(option => (
    <ButtonFeedback
      key={option}
      onClick={() => onClick({ type: option })}
      type="button"
    >
      {option.split('')[0].toUpperCase() +
        option.split('').slice(1).join('')}
    </ButtonFeedback>
  ));
};

export default FeedbackOptions;

// FeedbackOptions.propTypes = {
//   option: PropTypes.arrayOf(PropTypes.shape({
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//   })),
//   onLeaveFeedback: PropTypes.func.isRequired,
// }