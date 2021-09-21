import { useState } from 'react';
import './App.scss';
import { Section } from './Components/Section/Section';
import { FeedbackOptions } from './Components/FeedbackOptions/FeedbackOptions.js';
import { Statistics } from './Components/Statistics/Statistics.js';
import { Notification } from './Components/Notification/Notification.js';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelIncrement = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood((prev) => prev + 1);
        break;
      case 'neutral':
        setNeutral((prev) => prev + 1);
        break;
      case 'bad':
        setBad((prev) => prev + 1);
        break;
      default:
        console.log('smt error');
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  const Percentage = (total = countTotalFeedback()) =>
    Math.round((good / total) * 100);

  const percent = Percentage();

  return (
    <div className="App">
      <Section className="App-header" title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handelIncrement}
        />
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percent={percent}
          />
        )}
      </Section>
    </div>
  );
};
