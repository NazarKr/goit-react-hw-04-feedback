import React from 'react';
import { useState } from "react";
import { FeedbackDiv } from './feedback.styled';
import FeedbackOptions from './ButtonsComponents';
import Statistics from './Statistics';
import Section from './Section'
import Notification from './Notification'

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const optionKey = Object.keys(feedback);

  const onLeaveFeedback = feedback => {
    setFeedback(prevState => {
      const value = prevState[feedback];
      return { ...prevState, [feedback]: value + 1 }
    })
  }

  const total = () => feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = () => {
    if (!total) {
      return 0;
    }
    const positive = Math.round((feedback.good * 100) / total());
    return positive;
  };

  return (
    <FeedbackDiv>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionKey}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {total() !== 0 && (
        <Section title="Statistics">
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total()}
            positivePercentage={positiveFeedback()}
          />
        </Section>
      )}

      {total() === 0 &&
        <Notification message="There is no feedback" />}
    </FeedbackDiv>
  )
}

export default Feedback;
