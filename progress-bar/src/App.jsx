import { useEffect, useRef, useState } from "react";
import Progress from "./Progress";

const totalMs = 15 * 1000;
const interval = 1 * 1000;
const totaCycle = totalMs / interval;
const progressMade = (interval / totalMs) * 100;

function App() {
  const [progress, setProgress] = useState(0);
  const timer = useRef();
  const cyclesCompleted = useRef(0);
  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((prevProgress) => prevProgress + progressMade);
      console.log("cycles");
      cyclesCompleted.current += 1;
      if (cyclesCompleted.current === totaCycle) clearInterval(timer.current);
    }, interval);

    return () => {
      clearInterval(timer.current);
    };
  }, []);
  return (
    <>
      <Progress progress={progress} />
    </>
  );
}

export default App;
