import React, { useMemo} from 'react';
import { Link } from 'react-router-dom';
import { FormEvent, useRef, useState } from "react";
import Creatable from 'react-select/creatable'
import {  Note, Tag } from "../App";
import { useNavigate } from "react-router-dom";
import NoteCard from './Note';



  
// const notes: NoteData[] = [
//     { id: '1', text: 'Note 1', tags: ['tag1', 'tag2','tag3', 'tag4', 'tag5']},
//     { id: '2', text: 'Note 2', tags: ['tag3', 'tag4'] },
//     { id: '3', text: 'Note 3', tags: ['tag5', 'tag6', 'tag4', 'tag4'] },
// ];

export type SimplifiedNotes = {
  tags: Tag[],
  title: string,
  id:string  
}

type NoteListProps = {
    avaiableTags: Tag[]
    notes:SimplifiedNotes
}
const NodeList = ({ avaiableTags, notes}:NoteListProps) => {
  const [title, setTitle] = useState("");
  const naviagte = useNavigate();
  const [selectedTag, setSelectedTag] = useState<Tag[]>([]);

    
    const filteredNotes = useMemo(() => {
      return notes.filter(note => {
        return (
          (title === "" ||
            note.title.toLowerCase().includes(title.toLowerCase())) &&
          (selectedTag.length === 0 ||
            selectedTag.every(tag =>
              note.tags.some(noteTag => noteTag.id === tag.id)
            ))
        )
      })
    }, [title, selectedTag, notes])

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // onSubmit({
    //   title: titleRef.current!.value,
    //   markdown: markdownRef.current!.value,
    //   tags: selectedTag,
    // });

    naviagte('..');
  }
    return (
      <>
      <div className="my-4 px-10 md:px-4">
          <div className='flex items-center justify-between'>
      <h2 className="text-xl font-bold">Notes</h2>
              <div className="flex items-center space-x-2 my-2">
                  <Link  to={'/new'}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Create</button>
                      </Link>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Edit</button>
              </div>
              </div>
          {/* Render the list of notes here */}
        </div> 
      <div style={{backgroundImage:"url(https://www.inkdrop.app/static/masthead-bg-f4b0f2b95bae8748ba397d4d5a72a08d.jpg)", objectFit:'contain', backgroundPositionY: 'right 0'}} className="w-full min-h-screen min-w-full bg-white shadow-lg rounded-lg px-8 py-8 md:py-12">
        <form onSubmit={handleSubmit}>
          <div  className="flex flex-wrap justify-between  mb-6">
            <div className="w-full md:w-[35%] px-2">
              <label
                htmlFor="title"
                className="block ml-1 text-gray-800 text-xl font-semibold mb-1"
              >
                Title
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                required
                type="text"
                id="title"
                value={title}
                className="w-full py-2 px-4 mb-4 rounded-md shadow-sm border border-[#8a2be2] focus:border-[#8a2be2] focus:outline-none focus:ring-blue-500"
                placeholder="Enter a title"
              />
            </div>
            <div className="w-full md:w-[35%] px-2">
              <label
                htmlFor="tags"
                className="block text-gray-800 ml-2 text-xl font-semibold mb-1"
              >
                Tags
              </label>
              {/* <input
        type="text"
        id="tags"
        className="w-full py-2 px-4 mb-4 rounded-md shadow-sm border border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-blue-500"
        placeholder="Enter tags"
        value={tags}
        onChange={handleTagsChange}
      /> */}
              <Creatable
                id="tags"
                isMulti
                options={avaiableTags.map(tag => {
                  return {
                    label: tag.label, value: tag.id
                  }
                })}
                className="select-container"
                placeholder="Select tags"
                value={selectedTag.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                // onCreateOption={label => {
                //   const newTag = { id: uuidV4(), label }
                //   onAddTag(newTag)
                //   setSelectedTag(prev =>  [...prev, newTag] )
                // }}
                onChange={(tags) => {
                  setSelectedTag(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    boxShadow: "none",
                    borderColor: state.isFocused ? "#8a2be2" : "#8a2be2",
                    "&:hover": {
                      borderColor: "#4F46E5",
                    },
                    paddingLeft: "8px", // Add left padding
                    paddingRight: "8px", // Add right padding
                    paddingTop: "2px",
                    paddingBottom: "2px",
                  }),
                  multiValue: (provided) => ({
                    ...provided,
                    backgroundColor: "#4F46E5",
                  }),
                  multiValueLabel: (provided) => ({
                    ...provided,
                    color: "white",
                  }),
                  multiValueRemove: (provided) => ({
                    ...provided,
                    color: "white",
                    ":hover": {
                      backgroundColor: "#4F46E5",
                      color: "white",
                    },
                  }),
                }}
              />
            </div>
          </div>
                </form>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  
      {filteredNotes.map((note) => (
        <div  key={note.id}>
          <NoteCard id={note.id}  title={note.title} tags={note.tags} />
        </div>
      ))}
    </div>
      </div>
    </>
  );
};

export default NodeList;
