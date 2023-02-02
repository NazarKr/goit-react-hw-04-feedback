import React from 'react';
import { useReducer } from "react";
import { FeedbackDiv } from './feedback.styled';
import FeedbackOptions from './ButtonsComponents';
import Statistics from './Statistics';
import Section from './Section'
import Notification from './Notification'

const initialValue = { good: 0, neutral: 0, bad: 0 };

function countReducer(state, action) {
  console.log(action.type);
  return { ...state, [action.type]: state[action.type] + 1 };
}

const Feedback = () => {
  const [state, dispath] = useReducer(countReducer, initialValue);
  const { good, neutral, bad } = state;


  const onLeaveFeedback = () => {
    const values = Object.keys(state);
    return values.reduce((acc, value) => acc + value, 0);
    }

  const total = onLeaveFeedback();

  const positiveFeedback = () => {
    const positive = Math.round((good * 100) / total());
    return positive;
  };

  const options = Object.keys(state);


  return (
    <FeedbackDiv>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onClick={dispath}
        />
      </Section>

      {total !== 0 && (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        </Section>
      )}

      {total === 0 &&
        <Notification message="There is no feedback" />}
    </FeedbackDiv>
  )
}

export default Feedback;
