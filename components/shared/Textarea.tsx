function Textarea({ props }) {
  return (
    <textarea
      className={`appearance-none border w-full py-2 px-3 mb-2 text-gray-700`}
      id={props.id}
      placeholder={props.placeholder ?? ""}>
      {props.text}
    </textarea>
  );
}

export default Textarea;
