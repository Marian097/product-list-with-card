
type Props = {
  address: string | "";
  onSetAddress: (value:string) => string
}


export default function InputStreet({address, onSetAddress}: Props) {

  return (
    <div className = "flex gap-x-1">
      <div>
        <label htmlFor="" className = "font-medium  text-white">Adress:</label>
      </div>
      <div>
        <input type="text" className="border-2 border-black" name = "address" value = {address} onChange = {(e) => onSetAddress(e.target.value)} />
      </div>
    </div>
  );
}
