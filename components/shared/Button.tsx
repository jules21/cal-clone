export interface Props {
  buttonText: string;
  customClass?: string;
  isDisabled?: boolean;
  buttonType: ButtonTypes;
}

enum ButtonTypes {
  "button",
  "submit",
  "reset",
  undefined,
}

function Button({ buttonText, customClass, isDisabled, ...otherProps }: Props) {
  return (
    <button
      className={`${
        isDisabled ? "ring-1 text-red-300 ring-red-300 cursor-not-allowed" : "hover:bg-black-200"
      } w-full font-bold py-2 px-4 mt-4 content-center ${customClass}`}
      {...otherProps}>
      {buttonText}
    </button>
  );
}

Button.defaultProps = {
  color: "black",
  type: ButtonTypes.button,
  isDisabled: false,
};

export default Button;
