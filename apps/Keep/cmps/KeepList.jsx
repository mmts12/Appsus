import { KeepPreview } from "./KeepPreview.jsx"
import { KeepEdit } from "./KeepEdit.jsx"

export function KeepList({ notes, onDeleteNote, onPinnNote, onEditNote, onChangeBgcNote, onCloneNote, onDone }) {
  console.log('notes in list', notes);

  return notes.map((note, idx) => {
    return < article className="note flex col" key={idx} style={{ backgroundColor: `${note.style.bgColor}` }}>
      <KeepPreview currCmp={note.type} info={note.info} onDone={onDone} />
      <KeepEdit note={note} onDeleteNote={onDeleteNote}
        onPinnNote={onPinnNote} onEditNote={onEditNote}
        onChangeBgcNote={onChangeBgcNote} onCloneNote={onCloneNote} />
    </article >

  })

}

