interface ButtonProps {
  clickEvent: () => void;
}

const Button = ({clickEvent}: ButtonProps) => {
  return (
    <button className="border-2 border-amber-300 p-5 rounded-lg bg-amber-300 text-white" onClick={clickEvent}>
      등록
    </button>
  );
};

export default Button;
