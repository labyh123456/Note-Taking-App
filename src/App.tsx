import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import NewNote from './component/NewNote';


export type Note = {
  id: string
} & NoteData;


export type NoteData = {
  title: string,
  markdown: string,
  tags:Tag[]
}

export type Tag = {
  id: string,
  label:string
}

function App() {

  return (
    <div className='mt-10 px-8'>
    <Routes>
      <Route path='/' element={<h1>New</h1>}> </Route>
      <Route path='/new'  element={<NewNote />}> </Route>
      <Route path='/:id'>
        <Route index  element={<h1>Show</h1>} /> 
        <Route path='edit' element={<h1>Edit</h1>} />
      </Route>
      <Route path='*' element={<Navigate to="/" />}> </Route>
      </Routes>
      </div>
  )
}

export default App
