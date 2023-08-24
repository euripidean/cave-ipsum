import "./CopyButton.css";

interface CopyButtonProps {
  text: string;
  onClick: () => void;
}

function CopyButton(props: CopyButtonProps) {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(props.text);
        props.onClick();
      }}
    >
      Copy
    </button>
  );
}

export default CopyButton;
