type Props = {
  name: string | "";
  onSetName: (value:string) => void;
}


export default function InputName({name, onSetName}: Props) {
  return (
    <div className = "flex gap-x-1">
      <div>
        <label htmlFor="name" className = "font-medium text-white ">Name:</label>
      </div>
      <div>
        {" "}
        <input type="text" className="border-2 border-black" name = "name" value = {name} onChange = {(e) => onSetName(e.target.value)}/>
      </div>
    </div>
  );
}
