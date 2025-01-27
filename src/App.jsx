import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  let [Todolist, setTodolist] = useState([]);


  var saveTodolist = (event) => {
    let todoname = event.target.todoname.value;
    // if (!Todolist.includes(todoname)) {
    //   let finalDolist = [...Todolist, todoname]
    //   setTodolist(finalDolist)

    // }
    // else {
    //   alert("ToDo name allready Exists...")
    // }

    event.preventDefault();
  }
  let list = Todolist.map((value, index) => {
    console.log("list")

    return (
      <TodolistItems value={value} key={index} indexNumber={index}
        Todolist={Todolist}
        setTodolist={setTodolist}
      />
    )

  })
  const inputRef = useRef()
  const handleClear = () => {
    let finalDolist = [...Todolist, inputRef.current.value]
    setTodolist(finalDolist)
    inputRef.current.value = '';
  }

  return (
    <>
      <div className="App">
        <center><h1>ToDo List</h1></center>
        <form onSubmit={saveTodolist}>
          <input type="text" name='todoname' ref={inputRef} /> <button onClick={handleClear} > Save</button>
        </form>
        {/* ref={inputRef}  input*/}
        {/* onClick={handleClear} button */}

        <center><div className="box">
          <div className="list">
            <ul>
              {list}
            </ul>
          </div>
        </div></center>
      </div>
    </>
  )
}


function TodolistItems({ value, Todolist, indexNumber, setTodolist }) {
  let [status, setStatus] = useState(false)
  let deleteRow = () => {
    let finalData = Todolist.filter((v, i) => i != indexNumber)
    setTodolist(finalData)
  }
  let checkStatus = () => {
    setStatus(!status)
  }
  return (
    <li className={(status) ? 'completetodo' : ''} onClick={checkStatus} >{indexNumber + 1} : {value} <span onClick={deleteRow}>&times;</span></li>
  )

}


// jnt;ottot;onyonjjjjhjhj




// import { useRef, useState } from "react";
// import "./App.css";

// function App() {
//   const [Todolist, setTodolist] = useState([]);
//   const inputRef = useRef();

//   const saveTodolist = (event) => {
//     event.preventDefault();

//     const todoname = inputRef.current.value.trim();

//     // Check if the input is empty
//     if (!todoname) {
//       alert("ToDo name cannot be empty!");
//       return;
//     }

//     // Check for duplicates (case-insensitive)
//     if (!Todolist.map((item) => item.toLowerCase()).includes(todoname.toLowerCase())) {
//       setTodolist([...Todolist, todoname]);
//       inputRef.current.value = ""; // Clear input after adding
//     } else {
//       alert("ToDo name already exists...");
//     }
//   };

//   const list = Todolist.map((value, index) => (
//     <TodolistItems
//       key={index}
//       value={value}
//       indexNumber={index}
//       Todolist={Todolist}
//       setTodolist={setTodolist}
//     />
//   ));

//   return (
//     <div className="App">
//       <center>
//         <h1>ToDo List</h1>
//       </center>
//       <form onSubmit={saveTodolist}>
//         <input type="text" ref={inputRef} name="todoname" />
//         <button type="submit">Save</button>
//         <button
//           type="button"
//           onClick={() => {
//             inputRef.current.value = "";
//           }}
//         >
//           Clear
//         </button>
//       </form>
//       <center>
//         <div className="box">
//           <div className="list">
//             <ul>{list}</ul>
//           </div>
//         </div>
//       </center>
//     </div>
//   );
// }

// function TodolistItems({ value, Todolist, indexNumber, setTodolist }) {
//   const [status, setStatus] = useState(false);

//   const deleteRow = () => {
//     const finalData = Todolist.filter((_, i) => i !== indexNumber);
//     setTodolist(finalData);
//   };

//   const toggleStatus = () => {
//     setStatus(!status);
//   };

//   return (
//     <li className={status ? "completetodo" : ""}>
//       <span onClick={toggleStatus}>
//         {indexNumber + 1}. {value}
//       </span>
//       <span onClick={deleteRow} style={{ cursor: "pointer", marginLeft: "10px" }}>
//         &times;
//       </span>
//     </li>
//   );
// }

export default App;

