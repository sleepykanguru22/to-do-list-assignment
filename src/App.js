import React, { useState } from "react";
import "./App.css";

function App() {
  const [newToDo, setNewToDo] = useState("");
  const [toDo, setToDo] = useState([]);

  const handleNewToDoSubmit = (event) => {
    event.preventDefault();

    let toDoItem = {
      text: newToDo,
      complete: false
    };

    setToDo([...toDo, toDoItem]);
    setNewToDo("");
  };

  const handleToDoDelete = (deleteIdx) => {
    const filteredTodo = toDo.filter((toDo, i) => {
      return i !== deleteIdx;
    });
    setToDo(filteredTodo);
  };

  const handleCheckBox = (idx) => {
    const updated = toDo.map((toDo, i) => {
      if (idx === i) {
        toDo.complete = !toDo.complete;
      }
      return toDo;
    });
    setToDo(updated);
  };

  return (
    <div className="">
      <header className="">To Do List</header>
      <form
        onSubmit={(event) => {
          handleNewToDoSubmit(event);
        }}
      >
        <textarea
          onChange={(event) => {
            setNewToDo(event.target.value);
          }}
          value={newToDo}
        ></textarea>
        <div>
          <button>Add</button>
        </div>
      </form>
      {toDo.map((toDo, i) => {
        return (
          <div key={i}>
            <input
              onChange={(event) => {
                handleCheckBox(i);
              }}
              checked={toDo.complete}
              type="checkbox"
            />
            <span>{toDo.text}</span>
            <button
              onClick={(event) => {
                handleToDoDelete(i);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
