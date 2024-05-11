import "./Single.scss";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import PropTypes from "prop-types";

const SingleQuestion = ({ question, answer, id, activeId, toggleQuestion }) => {
  const isActive = id === activeId;
  return (
    <div
      className="single-question-container"
      onClick={() => toggleQuestion(id)}
    >
      <div className="single-question">
        {question}
        {isActive ? (
          <FiMinus className="down-icon" />
        ) : (
          <FaPlus className="down-icon" />
        )}
      </div>

      <div
        className={
          isActive
            ? "single-question-ans single-question-ans-visible"
            : "single-question-ans "
        }
      >
        {answer}
      </div>
    </div>
  );
};

SingleQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  toggleQuestion: PropTypes.func.isRequired,
  activeId: PropTypes.any,
  icon: PropTypes.object,
};

export default SingleQuestion;
