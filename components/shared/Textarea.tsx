export interface Props {
  id: string;
  placeholder?: string;
  text?: string;
  name: string;
}
function Textarea(props: Props) {
  return (
    <textarea
      rows={4}
      className={`appearance-none border w-full py-2 px-3 mb-2 text-gray-700`}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder ?? ""}>
      {props.text}
    </textarea>
  );
}

export default Textarea;
