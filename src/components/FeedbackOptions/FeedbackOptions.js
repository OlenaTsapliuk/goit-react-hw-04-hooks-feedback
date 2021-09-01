import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";
function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.wrapper}>
      {options.map((option) => (
        <button
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
          className={s.button}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
