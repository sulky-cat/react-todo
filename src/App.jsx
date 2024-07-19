import { useState } from "react";
import Heading from './components/Heading.jsx'
import { Theme } from './context/Theme.js'
import { useTheme } from "./hooks/useTheme.js";
import NotesList from "./components/NotesList.jsx";
import { useNotes } from "./hooks/useNotes.js";
import Modal from "./components/Modal.jsx";
import Empty from "./components/Empty.jsx";

export default function App() {
   const [theme, changeTheme] = useTheme()

   const [searchNote, setSearchNote] = useState('')
   const [filter, setFilter] = useState('all')
   const [notes, setNotes] = useNotes(searchNote, filter)

   const [modal, setModal] = useState({
      open: false, title: '', placeholder: '', type: ''
   })

   const [note, setNote] = useState({ title: "" })
   const removeNote = ({ id }) => {
      setNotes(notes.filter((note) => note.id !== id))
   }
   const addNote = note => {
      if (!note.title.length) return
      const newNote = {
         userId: 1,
         id: Date.now(),
         title: note.title,
         completed: false
      }
      setNote({ title: "" })
      setNotes(prev => [...prev, newNote])
      setModal(prev => ({ ...prev, open: false }))
   }
   const editNote = note => {
      if (!note.title.length)
         removeNote(note)

      setNote({ title: "" })
      setNotes(prev =>
         prev.map(el =>
            el.id === note.id
               ? { ...el, title: note.title }
               : el
         )
      )
      setModal(prev => ({ ...prev, open: false }))
   }

   return (
      <Theme.Provider value={{ theme, changeTheme }}>
         <div className="wrapper">
            <h1 className="title">Todo List</h1>
            <Heading filter={filter} setFilter={setFilter} setSearchNote={setSearchNote} />

            {
               notes.length
                  ? <NotesList setNote={setNote} setModal={setModal} notes={notes} setNotes={setNotes} removeNote={removeNote} />
                  : <Empty />
            }

            <button
               onClick={() => setModal(() => ({ open: true, title: 'New Note', placeholder: 'Input your note...', type: 'add' }))}
               className="add-post"
            >
            </button>

            <Modal note={note} setNote={setNote} modal={modal} setModal={setModal} addNote={addNote} editNote={editNote} />
         </div>
      </Theme.Provider>
   )
}
