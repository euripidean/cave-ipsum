import React from "react";
import CopyButton from "../CopyButton/CopyButton";
import { Controls } from "../Controls/Controls";

// import css
import "./TextBox.css";

interface TextBoxProps {
  text: string;
  onCopy: () => void;
}

export function TextBox(props: TextBoxProps) {
  return (
    <>
      <Controls />
      <div className="TextBox">
        <p className="Text">{props.text}</p>
        <CopyButton text={props.text} onClick={props.onCopy} />
      </div>
    </>
  );
}
