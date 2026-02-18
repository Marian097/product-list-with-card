type Props = {
  email: string | "";
  onSetEmail: (value:string) => void
}





export default function InputEmail({email, onSetEmail} : Props) {
  return (
    <div className = "flex gap-x-2.5">
      <div>
        {" "}
        <label htmlFor="" className = "font-medium text-white ">Email:</label>
      </div>
      <div>
        <input type="email" name="email" id="" className="border-2 border-black" value = {email} onChange = {(e) => onSetEmail(e.target.value)}/>
      </div>
    </div>
  );
}
