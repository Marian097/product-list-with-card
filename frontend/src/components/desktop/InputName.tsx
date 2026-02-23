type Props = {
  name: string | " ";
  setName: (value:string) => void;
}


export default function InputName({name, setName}: Props) {
  return (
    <div className = "flex gap-x-1">
      <div>
        <label htmlFor="name" className = "font-medium text-white ">Name:</label>
      </div>
      <div>
        {" "}
        <input type="text" className="border-2 border-black" name = "name" value = {name} onChange = {(e) => setName(e.target.value)}/>
      </div>
    </div>
  );
}
