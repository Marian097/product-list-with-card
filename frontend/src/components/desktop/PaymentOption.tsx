export default function PaymentOption() {
  return (
    <div className = "sm:mt-80  text-white">
      <div className = "border-t-2">
        <label htmlFor="">Cash on delivery:</label>
        <input type="checkbox" className = "ml-1" />
      </div>
      <div>
        <label htmlFor="">Payment by card:</label>
        <input type="checkbox" className = "ml-1"  />
      </div>
      <div className = "flex justify-center items-end">
        <button type="submit" className = "border px-10 py-1 rounded-lg bg-blue-100 my-3  text-black font-medium">Place order</button>
      </div>
       <div className = "flex justify-center items-end">
        <button type="submit" className = "border px-10 py-1 rounded-lg bg-blue-100 my-3  text-black font-medium">Cancel order</button>
      </div>
      <div className = "sm:hidden flex justify-center items-end">
        <button type="submit" className = "border px-10 py-1 rounded-lg bg-blue-100 my-3  text-black font-medium">Back to menu</button>
      </div>
    </div>
  );
}
