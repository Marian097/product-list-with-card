export default function InputStreet() {
  return (
    <div className = "flex gap-x-1">
      <div>
        <label htmlFor="" className = "font-medium  text-white">Adress:</label>
      </div>
      <div>
        <input type="text" className="border-2 border-black" name = "address" />
      </div>
    </div>
  );
}
