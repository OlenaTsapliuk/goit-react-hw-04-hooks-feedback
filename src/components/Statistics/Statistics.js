import PropTypes from "prop-types";
import s from "../Statistics/Statistics.module.css";
function Statistics({ good, neutral, bad, totalCount, percentage }) {
  return (
    <div className={s.wrapper}>
      <p className={s.statisticsName}>Good: {good}</p>
      <p className={s.statisticsName}>Neutral: {neutral}</p>
      <p className={s.statisticsName}>Bad: {bad}</p>
      <p className={s.statisticsName}>Total: {totalCount}</p>
      <p className={s.statisticsName}>Positive feedback: {percentage}</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Statistics;
