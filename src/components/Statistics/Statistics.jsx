import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <div>
        <p>
          Good: <span>{good}</span>{' '}
        </p>
        <p>
          Neutral:
          <span>{neutral}</span>{' '}
        </p>
        <p>
          Bad: <span>{bad}</span>{' '}
        </p>
        <p>
          Total Feedbacks: <span>{total}</span>{' '}
        </p>
      </div>
      <div>
        <p>
          Positive Feedback: <span>{positivePercentage}%</span>
        </p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
