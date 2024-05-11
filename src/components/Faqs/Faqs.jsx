import "./Faqs.scss";
import { questions } from "../../assets/Data";
import { useState } from "react";
import SingleQuestion from "../SingleQuestion/SingleQuestion";

const Faqs = () => {
  const [activeId, setActiveId] = useState(null);

  // This below function is to toggle FAQ quetions to either show answer or to hide answer.
  const toggleQuestion = (id) => {
    if (!activeId) {
      // if id is null (user is first time opening any question)
      setActiveId(id);
    } else if (id != activeId) {
      //  any question is already open and another question is opened by user
      setActiveId(id);
    } else {
      // User is trying to close any question
      setActiveId(null);
    }
  };

  return (
    <div id="FAQ" className="faq-container">
      <span>
        <h1 className="faqs-main-heading">Frequently asked questions</h1>
        <p className="faqs-sub-heading">All your questions answered below</p>
      </span>

      <div className="faqs-questions-container">
        {questions.map((ques) => {
          return (
            <SingleQuestion
              activeId={activeId}
              toggleQuestion={toggleQuestion}
              key={ques.id}
              id={ques.id}
              question={ques.question}
              answer={ques.answer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
