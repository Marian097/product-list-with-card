type Props = {
  country: string | "";
  onSetCountry: (value:string) => void
}



export default function InputCountry({country, onSetCountry} : Props) {
  return (
    <div className = "flex gap-x-2">
      <div>
        {" "}
        <label htmlFor="" className = "font-medium  text-white">Country:</label>
      </div>
      <div>
        <select name="country" id="" className="border-2 border-black" value = {country} onChange = {(e) => onSetCountry(e.target.value)}>
          <option value="Romania">Romania</option>
        </select>
      </div>
    </div>
  );
}
