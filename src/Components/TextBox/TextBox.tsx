import CopyButton from "../CopyButton/CopyButton";

interface TextBoxProps {
  text: string;
  onCopy: () => void;
}

export function TextBox(props: TextBoxProps) {
  return (
    <div>
      <p>{props.text}</p>
      <CopyButton text={props.text} onClick={props.onCopy} />
    </div>
  );
}
