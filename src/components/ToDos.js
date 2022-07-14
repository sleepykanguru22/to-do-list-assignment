const ToDos = (props) => {
  return (
    <div className="text-center m-2">
      <input
        onChange={(event) => {
          props.handleCheckBox(props.i);
        }}
        checked={props.toDo.complete}
        type="checkbox"
      />
      <span>{props.toDo.text}</span>
      <button
        className="btn-sm btn-dark rounded-pill"
        onClick={(event) => {
          props.handleToDoDelete(props.i);
        }}
      >
        delete
      </button>
    </div>
  );
};
export default ToDos;
