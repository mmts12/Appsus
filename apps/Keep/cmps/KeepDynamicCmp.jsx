import { NoteText } from "./notes/NoteText.jsx";
import { NoteImg } from "./notes/NoteImg.jsx";
import { NoteTodos } from "./notes/NoteTodos.jsx";
import { NoteVideo } from "./notes/NoteVideo.jsx";

export function KeepDynamicCmp({ currCmp, info }) {
  console.log(currCmp)
  switch (currCmp) {
    case 'NoteText':
      return <NoteText info={info} />
    case 'NoteImg':
      return <NoteImg info={info} />
    case 'NoteTodos':
      return <NoteTodos info={info} />
    case 'NoteVideo':
      return <NoteVideo info={info} />
    case 'NoteAudio':
      return <h1>To Be Implemented</h1>
  }
  return <p>Couldn't Load Note..</p>
}

