import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [conter, setConter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setConter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  const onShowing = () => setShowing((prev) => !prev);

  useEffect(() => {
    console.log("I run only once");
  }, []);

  useEffect(() => {
    console.log("I run 'keyword' changes");
  }, [keyword]);

  useEffect(() => {
    console.log("I run 'counter' changes");
  }, [conter]);

  useEffect(() => {
    console.log("I run 'keyword & counter' changes");
  }, [keyword, conter]);

  return (
    <>
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="Search here"
      />
      <h1 className={styles.title}>{conter}</h1>
      <Button text={"Continue"} onClick={onClick} />
      <div>
        {showing ? <Hello /> : null}
        <button onClick={onShowing}>{showing ? "Hide" : "Show"}</button>
      </div>
    </>
  );
}

export default App;
