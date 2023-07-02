import { NoteData, Tag } from '../App';
import NoteForm from './NoteForm';

type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  avaiableTag:Tag[]
}

function NewNote({onSubmit, onAddTag, avaiableTag} : NewNoteProps) {
    return (
      <>
            <h1 className='text-xl font-bold text-black mb-5'>NewNote</h1>
            <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} avaiableTag={avaiableTag}  />
            </>
  )
}

export default NewNote