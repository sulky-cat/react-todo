import Note from "./Note"

export default function NotesList({ setNote, setModal, notes, setNotes, removeNote }) {

   return (
      <div className="notes">
         {notes.map(note =>
            <Note
               key={note.id}
               setNote={setNote}
               setModal={setModal}
               note={note}
               setNotes={setNotes}
               removeNote={removeNote}
            />
         )}
      </div>
   )
}