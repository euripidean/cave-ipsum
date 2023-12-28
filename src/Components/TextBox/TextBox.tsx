import React from "react";
import CopyButton from "../CopyButton/CopyButton";
import { Controls } from "../Controls/Controls";
import { markovChainGenerator } from "../../Utilities/MarkovChain";

// import css
import "./TextBox.css";

interface TextBoxProps {
  text: string;
  onCopy: () => void;
}

const markovChain = markovChainGenerator(
  "This is a test of the Markov Chain Generator."
);
console.log(markovChain);

export function TextBox({ text, onCopy }: TextBoxProps) {
  return (
    <>
      <Controls />
      <div className="TextBox">
        <p className="Text">{text}</p>
        <CopyButton text={text} onClick={onCopy} />
      </div>
    </>
  );
}
