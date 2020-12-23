import { NoteText } from "./notes/NoteText.jsx";
import { NoteImg } from "./notes/NoteImg.jsx";
import { NoteTodos } from "./notes/NoteTodos.jsx";
import { NoteVideo } from "./notes/NoteVideo.jsx";

export function KeepDynamicCmp({ currCmp, info }) {
  switch (currCmp) {
    case 'NoteText':
      return <NoteText info={info} />
    case 'NoteImg':
      return <NoteImg info={info} />
    case 'NoteTodos':
      return <NoteTodos info={info} />
    case 'NoteVideo':
      return <NoteVideo info={info} />
  }
  return <p>Couldn't Load Note..</p>
}

