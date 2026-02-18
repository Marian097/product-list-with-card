type Props = {
  phone: string | "";
  onSetPhone: (value:string) => void
}





export default function InputPhone({phone, onSetPhone} : Props) {
  return (
    <div className = "flex gap-x-1">
      <div>
        <label htmlFor="" className = "font-medium  text-white">Phone:</label>
      </div>
      <div>
        <input type="text" name="phone" id="" className="border-2 border-black" value = {phone} onChange= {(e) => onSetPhone(e.target.value)}/>
      </div>
    </div>
  );
}
