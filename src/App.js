import React, { useState } from "react";
import "./App.css";
import ToDos from "./components/ToDos";

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
    <div className="container-fluid my-5">
      <header className="display-1 text-center">To Do List</header>
      <form
        className="border rounded-pill m-5 shadow-lg"
        onSubmit={(event) => {
          handleNewToDoSubmit(event);
        }}
      >
        <div className="m-5 text-center">
          <textarea
            className="rounded-pill px-5"
            onChange={(event) => {
              setNewToDo(event.target.value);
            }}
            value={newToDo}
          ></textarea>
          <div>
            <button className="btn btn-outline-dark rounded-pill">Add</button>
          </div>
        </div>
      </form>
      {toDo.map((toDo, i) => {
        return (
          <ToDos
            key={i}
            i={i}
            toDo={toDo}
            handleCheckBox={handleCheckBox}
            handleToDoDelete={handleToDoDelete}
          />
        );
      })}
    </div>
  );
}

export default App;
