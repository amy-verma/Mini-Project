import { useState } from "react";

const Accordian = ({ qna, isOpen, setopenId }) => {
  const [toggle, setToggle] = useState(false);

  const toggleAction = () => {
    setopenId(isOpen ? null : qna.id);
  };
  return (
    <div className="accordion" onClick={toggleAction}>
      <p>
        {qna.title}{" "}
        <span onClick={() => setToggle(!toggle)}>{toggle ? "-" : "+"}</span>
      </p>
      {isOpen && (toggle ? <p>{qna.body}</p> : "")}
    </div>
  );
};

export default Accordian;
