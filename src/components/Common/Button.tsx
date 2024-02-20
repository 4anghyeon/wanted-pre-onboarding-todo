interface ButtonProps {
  clickEvent: () => void;
  text: string;
}

const Button = ({clickEvent, text}: ButtonProps) => {
  return (
    <button className="border-2 border-amber-300 p-5 rounded-lg bg-amber-300 text-white" onClick={clickEvent}>
      {text}
    </button>
  );
};

export default Button;
