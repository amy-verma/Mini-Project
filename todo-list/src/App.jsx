import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const addTodoItem = () => {
    if (input.trim() === "") return;
    const item = {
      id: todoList.length + 1,
      text: input.trim(),
      completed: false,
    };
    setTodoList((prev) => [...prev, item]);
    setInput("");
  };
  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  };
  const deleteTodoList = (id) => {
    setTodoList(todoList.filter((t) => t.id !== id));
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Add Todo"
          value={input}
          onChange={handleInput}
        />
        <button onClick={() => addTodoItem()}>Add</button>
        <ul>
          {todoList.map((t) => {
            return (
              <li key={t.id}>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleCompleted(t.id)}
                />
                <span className={t.completed ? "strikeThrough" : ""}>
                  {t.text}
                </span>
                <button onClick={() => deleteTodoList(t.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
