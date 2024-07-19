import { useEffect, useMemo, useState } from "react"

export function useNotes(searchNote, filter) {

   const [notes, setNotes] = useState([])

   useEffect(() => {
      const oldNote = JSON.parse(localStorage.getItem('notes'))
      if (oldNote?.length) setNotes(oldNote)
   }, [])


   useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
   }, [notes])

   const filterType = {
      complete: true,
      incomplete: false,
   }

   const searchNotes = useMemo(() => {
      return searchNote
         ? notes.filter(el => el.title.toLocaleLowerCase().includes(searchNote.toLocaleLowerCase()))
         : notes
   }, [notes, searchNote])

   const filterNotes = useMemo(() => {
      return filter === 'all'
         ? searchNotes
         : searchNotes.filter(note => note.completed === filterType[filter])
   }, [notes, filter, searchNotes])

   return [filterNotes, setNotes]

}
