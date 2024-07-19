import { useEffect, useState } from 'react';
import ButtonWithImg from './UI/ButtonWithImg';
import CheckBox from './UI/CheckBox';

export default function Note({ setNote, setModal, note, removeNote, setNotes }) {
   const [checked, setChecked] = useState(note.completed)

   useEffect(() => {
      setNotes(prev =>
         prev.map(el =>
            el.id === note.id
               ? { ...el, completed: checked }
               : el
         )
      )
   }, [checked])

   return (
      <div className={checked ? "notes__element note note_checked" : "notes__element note"}>
         <CheckBox checked={checked} setChecked={setChecked} />
         <div className="note__text">{note.title}</div>
         <div className="note__controls">
            <ButtonWithImg
               onClick={() => {
                  setModal(({
                     placeholder: 'Edit your note...',
                     open: true,
                     title: 'Edit note',
                     type: 'edit',
                  }))
                  setNote(note)
               }}
               className="note__edit"
            >
               <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.67272 3.49106L1 10.1637V13.5H4.33636L11.0091 6.82736M7.67272 3.49106L10.0654 1.09837L10.0669 1.09695C10.3962 0.767585 10.5612 0.602613 10.7514 0.540824C10.9189 0.486392 11.0993 0.486392 11.2669 0.540824C11.4569 0.602571 11.6217 0.767352 11.9506 1.09625L13.4018 2.54738C13.7321 2.87769 13.8973 3.04292 13.9592 3.23337C14.0136 3.40088 14.0136 3.58133 13.9592 3.74885C13.8974 3.93916 13.7324 4.10414 13.4025 4.43398L13.4018 4.43468L11.0091 6.82736M7.67272 3.49106L11.0091 6.82736" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </ButtonWithImg>
            <ButtonWithImg
               className="note__trash"
               onClick={() => removeNote(note)}
            >
               <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.87426 7.61505C3.80724 6.74386 4.49607 6 5.36983 6H12.6302C13.504 6 14.1928 6.74385 14.1258 7.61505L13.6065 14.365C13.5464 15.1465 12.8948 15.75 12.1109 15.75H5.88907C5.10526 15.75 4.4536 15.1465 4.39348 14.365L3.87426 7.61505Z" stroke="currentColor" />
                  <path d="M14.625 3.75H3.375" stroke="currentColor" strokeLinecap="round" />
                  <path d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z" stroke="currentColor" />
                  <path d="M10.5 9V12.75" stroke="currentColor" strokeLinecap="round" />
                  <path d="M7.5 9V12.75" stroke="currentColor" strokeLinecap="round" />
               </svg>
            </ButtonWithImg>
         </div>
      </div>
   )
}