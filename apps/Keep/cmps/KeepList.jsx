import { KeepPreview } from "./KeepPreview.jsx"

export function KeepList({ notes }) {
  console.log('notes in list', notes);
  return notes.map((note, idx) => {
    return < article className="note flex" key={idx} >
      <KeepPreview currCmp={note.type} info={note.info} />
    </article >

  })

}

