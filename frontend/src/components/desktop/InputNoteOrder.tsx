
type Props = {
  note: string | "";
  onSetNote: (value:string) => void
}



export default function InputNoteOrder({note, onSetNote} : Props) {
  return (
    <div className = "flex flex-col">
      <div>
        <label htmlFor="" className = "font-medium  text-white">Note order(optional):
        </label>
      </div>
        <textarea name="note" id="" className = "border-2 border-black w-auto" value = {note} onChange = {(e) => onSetNote(e.target.value) }></textarea>
    </div>
  )
}
