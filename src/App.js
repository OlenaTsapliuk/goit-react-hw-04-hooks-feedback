import { useState } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Container from "./components/Container";
import Notification from "./components/Notification";
import s from "./components/Container/Container.module.css";

function App () {
  const [good,setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad,setBad] = useState(0);


  const onAddFeedback = (e) => {
   const stateButton = e.target.name;
    switch (stateButton) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
       case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
       case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
   }
   
  };

  const countTotalFeedback = () => {
    const result = good + neutral + bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const count = countTotalFeedback();
    const positivePercentage = (good * 100) / count;
    return Math.round(positivePercentage);
  };
  const options = ["good", "neutral", "bad"];
 
    return (
      <Container className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onAddFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalCount={countTotalFeedback()}
              percentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }


export default App;
