import { Component } from 'react';
import css from './App.module.css';
import { FcCancel } from 'react-icons/fc';
import { FcCheckmark } from 'react-icons/fc';
import { FcDisplay } from 'react-icons/fc';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  iconBtn = {
    good: <FcCheckmark />,
    neutral: <FcDisplay />,
    bad: <FcDisplay />,
  };

  onBtnClicked = option =>
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  ц;
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round((total / good) * 100);
    return total ? positivePercentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    return (
      <div>
        <Section title="Please, leave your feedback"></Section>
      </div>
    );
  }
}
