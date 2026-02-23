type Props = {
  city: string | "";
  onSetCity: (value:string) => void
}

export default function InputCity({city, onSetCity} : Props) {
  return (
    <div className = "flex gap-x-5">
      <div>
        {""}
        <label htmlFor="" className = "font-medium text-white">City:</label>
      </div>
      <div>
        <input type="text" className="border-2 border-black" name = "city" value = {city} onChange = {(e) => onSetCity(e.target.value)}/>
      </div>
    </div>
  );
}
