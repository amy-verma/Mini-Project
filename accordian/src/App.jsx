import { useEffect, useState } from "react";
import "./App.css";
import Accordian from "./Accordion";

function App() {
  const [post, setPost] = useState([]);
  const [openId, setopenId] = useState(null);
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPost(data);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {post.map((ele) => {
          return (
            <Accordian
              key={ele.id}
              qna={ele}
              isOpen={openId === ele.id}
              setopenId={setopenId}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
