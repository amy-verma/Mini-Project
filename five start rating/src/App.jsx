import { useState } from "react";
import "./App.css";

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Star Rating</h2>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            style={{
              fontSize: "2rem",
              cursor: "pointer",
              color: star <= (hover || rating) ? "#ffc107" : "#e4e5e9",
            }}
          >
            {"☆"}
          </span>
        ))}
        <p>
          You rated:{rating} star{rating > 1 ? "s" : ""}
        </p>
      </div>
    </>
  );
}

export default App;
