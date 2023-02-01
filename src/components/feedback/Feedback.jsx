import React from 'react';
import { useState } from 'react';
import { FeedbackDiv } from './feedback.styled';
import FeedbackOptions from './ButtonsComponents';
import Statistics from './Statistics';
import Section from './Section'
// import Notification from './Notification'


const Feedback = () => {
  const [Good, setFeedbackGood] = useState(0);
  const [Neutral, setFeedbackNeutral] = useState(0);
  const [Bed, setFeedbackBed] = useState(0);
  const feedbackOptions = { Good, Neutral, Bed };


  const handleClick = ({ Good, Neutral, Bed }) => {
    if (Good) {
      setFeedbackGood(Good => Good +1)
    }

    if (Neutral) {
      setFeedbackNeutral(Neutral => Neutral + 1)
    }

    if (Bed) {
      setFeedbackBed(Bed => Bed + 1)
    }

  }

  const totalFeedback = () => {
    return Good + Neutral + Bed;
  };

  const positiveFeedback = (total, Good) => {
    const positive = Math.round((Good / total) * 100);
    return positive || '';  };
 

  const total = totalFeedback();
    const options = Object.keys(feedbackOptions);

  return (
    <FeedbackDiv>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onClick={() => handleClick()}
        />
      </Section>

      {total !== 0 && (
          <Section title="Statistics">
            <Statistics
            good={Good}
            neutral={Neutral}
            bad={Bed}
            total={total}
            positiveFeedback={positiveFeedback}
            />
          </Section>
       )}
      
    </FeedbackDiv>
  );

}


//=======================

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   optionKey = Object.keys(this.state);

//   onLeaveFeedback = name => {
//     this.setState(prevState => {
//       return { [name]: prevState[name] + 1 }
//     })
//   }

//   totalFeedback = () => {
//     const total = this.state.good + this.state.neutral + this.state.bad;
//     return total;
//   };

//   positiveFeedback = () => {
//     const positive = Math.round(
//       (this.state.good * 100) /
//       (this.state.good + this.state.neutral + this.state.bad)
//     );
//     return positive || '';
//   };

//   render() {
//     return (
//       <FeedbackDiv>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.optionKey}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         {this.totalFeedback() !== 0 && (
//           <Section title="Statistics">
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.totalFeedback()}
//               positivePercentage={this.positiveFeedback()}
//             />
//           </Section>
//         )}

//         {this.totalFeedback() === 0 &&
//           <Notification message="There is no feedback" />}
//       </FeedbackDiv>
//     );
//   }
// }

export default Feedback;
