import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  const FetchData = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/recipes/search?q=" + inputValue
      );
      const data = await response.json();
      setUsers(data?.recipes);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let timer = setTimeout(FetchData, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleOnFocus = () => {
    setShowResults(true);
  };
  const handleOnBlur = () => {
    setShowResults(false);
  };
  return (
    <div className="App">
      <h1>AutoComplete Search bar</h1>
      <div>
        <input
          className="search-input"
          type="text"
          value={inputValue}
          onChange={handleInput}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        <div className="result-container has-results">
          {showResults &&
            users.length > 0 &&
            users.map((ele) => {
              return (
                <span className="result" key={ele.id}>
                  {ele.name}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
