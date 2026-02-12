export default function InputStreet() {
  return (
    <div className = "flex gap-x-1">
      <div>
        <label htmlFor="" className = "font-medium  text-white">Street:</label>
      </div>
      <div>
        <input type="text" className="border-2 border-black" />
      </div>
    </div>
  );
}
