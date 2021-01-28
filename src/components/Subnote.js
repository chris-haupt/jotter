import React, {useState} from "react";

const Note = ({ setNote }) => {
    const [noteText, setNoteText] = useState("")
  return (
    <div>
      <input value={noteText} onChange={(e)=>setNoteText(e.target.value)} />
      <button onClick={()=>setNote(noteText)}>a</button>
    </div>
  );
};

export default function Subnote({ isEditing, note, setNote }) {
    console.log({note})
  return <div>{isEditing ? <Note setNote={setNote} /> : <p>{note}</p>}</div>;
}
