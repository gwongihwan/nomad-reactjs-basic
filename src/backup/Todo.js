import { useRef, useState } from "react";

function Todo() {
  const toDoInput = useRef();
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const doAdd = () => {
    if (toDo === "") {
      return;
    }
    setToDos((currentToDos) => [...currentToDos, toDo]); // [p1, p2] -> p1 뒤에 p2를 더한 새로운 배열을 리턴
    setToDo("");
    toDoInput.current.focus();
  };
  const doClear = () => {
    setToDos([]);
    setToDo("");
    toDoInput.current.focus();
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentToDos) => [...currentToDos, toDo]); // [p1, p2] -> p1 뒤에 p2를 더한 새로운 배열을 리턴
    setToDo("");
  };
  console.log(toDos);
  return (
    <>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          ref={toDoInput}
          type="text"
          placeholder="Write your to do..."
        />
        <button onClick={doAdd} type="button">
          Add To Do
        </button>
        <button onClick={doClear} type="button">
          Clear To Do
        </button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
