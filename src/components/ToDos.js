const ToDos = (props) => {
  return (
    <div className="text-center my-5">
      <input
        onChange={(event) => {
          props.handleCheckBox(props.i);
        }}
        checked={props.toDo.complete}
        type="checkbox"
      />
      <span>{props.toDo.text}</span>
      <button
        className="btn btn-dark rounded-pill"
        onClick={(event) => {
          props.handleToDoDelete(props.i);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default ToDos;
