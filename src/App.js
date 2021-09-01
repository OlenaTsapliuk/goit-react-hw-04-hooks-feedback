import React, { Component } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Container from "./components/Container";
import Notification from "./components/Notification";
import s from "./components/Container/Container.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onAddFeedback = (e) => {
    const stateButton = e.target.name;
    this.setState((prevState) => ({
      [stateButton]: prevState[stateButton] + 1,
    }));
    console.log("click");
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const count = this.countTotalFeedback();
    const positivePercentage = (good * 100) / count;
    return Math.round(positivePercentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalCount = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <Container className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onAddFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalCount === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalCount={totalCount}
              percentage={percentage}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
