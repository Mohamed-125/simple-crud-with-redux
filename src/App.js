import "./App.css";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
function App() {
  const [markdownText, setMarkdownText] = useState("");
  const markdownChangeHandler = (e) => {
    setMarkdownText(e.target.value);
  };

  useEffect(() => {
    console.log(markdownText);
  }, [markdownText]);
  return (
    <div className="text-editor-div">
      <textarea onChange={markdownChangeHandler}></textarea>
      <ReactMarkdown children={markdownText} />
    </div>
  );
}

export default App;
