export interface Props {
  buttonText: string;
  customClass?: string;
  isDisabled?: boolean;
}
function Button(props: Props) {
  return (
    <button
      className={`${
        props.isDisabled ? "ring-1 text-red-300 ring-red-300 cursor-not-allowed" : "hover:bg-black-200"
      } w-full font-bold py-2 px-4 mt-4 content-center ${props.customClass}`}
      type="submit"
      onClick={props.onClick}
      disabled={props.isDisabled}>
      {props.buttonText}
    </button>
  );
}

Button.defaultProps = {
  color: "black",
  type: "button",
  isDisabled: false,
};

export default Button;
