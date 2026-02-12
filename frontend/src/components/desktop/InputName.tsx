export default function InputName() {
  return (
    <div className = "flex gap-x-1">
      <div>
        <label htmlFor="name" className = "font-medium text-white ">Name:</label>
      </div>
      <div>
        {" "}
        <input type="text" className="border-2 border-black" />
      </div>
    </div>
  );
}
