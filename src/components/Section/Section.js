import PropTypes from "prop-types";
import s from "../Section/Section.module.css";
function Section({ title, children }) {
  return (
    <div>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Section;
