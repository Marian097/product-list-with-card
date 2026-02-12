export default function InputCity() {
  return (
    <div className = "flex gap-x-5">
      <div>
        {" "}
        <label htmlFor="" className = "font-medium text-white">City:</label>
      </div>
      <div>
        <input type="text" className="border-2 border-black" />
      </div>
    </div>
  );
}
