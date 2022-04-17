function TextInput({ props }) {
  return (
    <input
      className={`appearance-none border w-full py-2 px-3 mb-2 text-gray-700`}
      name={props.name}
      type={props.type}
      id={props.id}
      placeholder={props.placeholder ?? ""}
    />
  );
}

TextInput.defaultProps = {
  type: "text",
};
export default TextInput;
