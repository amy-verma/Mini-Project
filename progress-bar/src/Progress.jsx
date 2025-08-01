import "./App.css";
const Progress = ({ progress = 0 }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ transform: `translateX(${progress - 100}%)` }}
      />
    </div>
  );
};
export default Progress;
