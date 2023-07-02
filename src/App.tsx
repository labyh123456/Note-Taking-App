import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import NewNote from './component/NewNote';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useMemo } from 'react';
import { v4 as uuidV4 } from 'uuid';
import NoteList from './component/NoteList';
import Header from './component/Header';
import ApiTest from './component/ApiTest';
import Prac from './component/TypeScript-Prac';


export type Note = {
  id: string
} & NoteData;

export type RowNoteData = {
  title: string,
  markdown: string,
  tagsIds:string[]
}


export type NoteData = {
  title: string,
  markdown: string,
  tags:Tag[]
}

export type RawNote = {
  id: string,
} & RowNoteData

export type Tag = {
  id: string,
  label:string
}

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', []);
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', []);

  const noteWithTags = useMemo(() => {
    return notes.map(note => {
      return {...note, tags: tags.filter(tag => note.tagsIds.includes(tag.id))}
    })
  }, [notes, tags]);


  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes(prevNotes => (
      [...prevNotes, {...data, id:uuidV4(), tagsIds: tags.map(tag => tag.id)}]
    ))
  }

  function AddTag(tag: Tag) {
    setTags(prev => [...prev, tag])
  }



  return (
    <div className='mt-10 px-8'>
      <Header />
    <Routes>
        <Route path='/' element={<NoteList notes={noteWithTags} avaiableTags={tags} />}> </Route>
        <Route path='/prac' element={<Prac />}> </Route>
      <Route path='/new'  element={<NewNote onSubmit={onCreateNote} onAddTag={AddTag} avaiableTag={tags} />}> </Route>
        <Route path='/:id'>
        <Route index  element={<h1>Show</h1>} /> 
        <Route path='edit' element={<h1>Edit</h1>} />
        </Route>
        <Route path='/query' element={<ApiTest />} />
      <Route path='*' element={<Navigate to="/" />}> </Route>
      </Routes>
      </div>
  )
}

export default App
