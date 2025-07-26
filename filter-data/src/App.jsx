import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([]);

  const FetchData = async () => {
    try {
      const resposne = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await resposne.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  const handleAddCart = (ele) => {
    setCart((prevCart) => {
      if (prevCart.some((users) => users.id === ele.id)) {
        return prevCart;
      } else {
        return [...prevCart, ele];
      }
    });
  };

  return (
    <>
      <div>
        <ul>
          {users.map((ele) => {
            return (
              <li key={ele.id} onClick={() => handleAddCart(ele)}>
                {ele.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <u>
          {cart.map((ele) => {
            return <li key={ele.id}>{ele.name}</li>;
          })}
        </u>
      </div>
    </>
  );
};

export default App;
// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [cart, setCart] = useState([]);

//   const FetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const data = await response.json();
//       console.log(data);
//       setUsers(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     FetchData();
//   }, [inputValue]);
//   const handleOnChange = (e) => {
//     setInputValue(e.target.value);
//   };
//   const FilterData = users.filter((ele) =>
//     ele.name.toLowerCase().includes(inputValue.toLowerCase())
//   );
//   const handlecartClick = (ele) => {
//     setCart((prevCart) => {
//       if (prevCart.some((user) => user.id === ele.id)) {
//         return prevCart;
//       }
//       return [...prevCart, ele];
//     });
//   };

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           placeholder="Search Here"
//           value={inputValue}
//           onChange={handleOnChange}
//         />
//       </div>
//       <ul>
//         {FilterData.map((ele) => {
//           return (
//             <li key={ele.id} onClick={() => handlecartClick(ele)}>
//               {ele.name}
//             </li>
//           );
//         })}
//         <button>Add</button>
//       </ul>
//       <div>
//         <ul>
//           {cart.map((ele, index) => {
//             return <p key={index}>{ele.name}</p>;
//           })}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default App;
