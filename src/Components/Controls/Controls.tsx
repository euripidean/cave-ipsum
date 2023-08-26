import { useEffect, useState } from "react";
import "./Controls.css";

export function Controls() {
  const [length, setLength] = useState("short");
  const [paragraphs, setParagraphs] = useState(1);

  function handleLengthChange(event: any) {
    setLength(event.target.value);
  }

  function handleParagraphsChange(event: any) {
    setParagraphs(event.target.value);
  }

  useEffect(() => {
    console.log(length);
    console.log(paragraphs);
  }, [length, paragraphs]);

  return (
    <div className="controls">
      <div className="controls-length">
        <p>Length of paragragh</p>
        <label htmlFor="short">Short</label>
        <input
          onChange={handleLengthChange}
          type="radio"
          name="length"
          value="short"
          id="short"
          defaultChecked
        />
        <label htmlFor="medium">Medium</label>
        <input
          onChange={handleLengthChange}
          type="radio"
          name="length"
          value="medium"
          id="medium"
        />
        <label htmlFor="long">Long</label>
        <input
          onChange={handleLengthChange}
          type="radio"
          name="length"
          value="long"
          id="long"
        />
      </div>
      <div className="controls-paragraphs">
        <p>Number of paragraphs</p>
        <select onChange={handleParagraphsChange} name="paragraphs">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
}
