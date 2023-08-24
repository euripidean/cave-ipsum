import CopyButton from "../CopyButton/CopyButton";
// import css
import "./TextBox.css";

interface TextBoxProps {
  text: string;
  onCopy: () => void;
}

export function TextBox(props: TextBoxProps) {
  return (
    <div className="TextBox">
      <p className="Text">{props.text}</p>
      <CopyButton text={props.text} onClick={props.onCopy} />
    </div>
  );
}
