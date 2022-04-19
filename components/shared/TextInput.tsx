export interface Props {
  name: string;
  type: string;
  id: string;
  placeholder?: string;
  onInput: (event: any) => void;
}
function TextInput(props: Props) {
  return (
    <input
      className={`appearance-none border w-full py-2 px-3 mb-2 text-gray-700`}
      name={props.name}
      type={props.type}
      id={props.id}
      onInput={props.onInput}
      placeholder={props.placeholder ?? ""}
    />
  );
}

TextInput.defaultProps = {
  type: "text",
};
export default TextInput;
