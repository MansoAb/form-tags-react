import { useState } from "react";

const arr = ["mans", "naj"];

function App() {
  const [tags, setTags] = useState(arr);
  const [text, setText] = useState("");
  const [bl, setBl] = useState(true);

  function blChange() {
    setBl(!bl);
  }

  function textAdd(e) {
    setText(e.target.value);
  }

  function addTag() {
    setTags([...tags, text]);
    setText("");
  }

  function deleteTag(i) {
    setTags(
      tags.filter((item, index) => {
        return index != i ? item : null;
      })
    );
  }

  return (
    <div className="container">
      <div className="block">
        <div className="form">
          <input
            type="text"
            onChange={textAdd}
            onBlur={() => (text.length < 1 ? setBl(true) : setBl(false))}
            value={text}
            className="inputText"
          />
          <input
            type="button"
            onClick={text.length > 0 ? addTag : () => setBl(true)}
            className="inputButton"
            value="Отправить"
          />
        </div>
        {bl ? <p className="p">Поле ввода не должно быть пустым.</p> : null}
      </div>

      <div className="tags">
        {tags.map((item, index) => {
          return (
            <div className="tag">
              <h1>{item}</h1>
              <button className="deleteButton" onClick={() => deleteTag(index)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
