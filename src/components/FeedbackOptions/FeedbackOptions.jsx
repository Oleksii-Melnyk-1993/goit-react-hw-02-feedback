import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback, iconBtn }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            type="button"
            key={option}
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            <div>
              {option} {iconBtn[option]}
            </div>
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
