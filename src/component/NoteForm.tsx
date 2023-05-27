import { FormEvent, useRef } from "react";
import Select from 'react-select';
import { NoteData } from "../App";
type NoteFormProps = {
  onSubmit:(data : NoteData) => void
}


function NoteForm({onSubmit} : NoteFormProps) {
  
  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  interface Option {
    value: string;
    label: string;
  }

  
  function handleSubmit(e: FormEvent){
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags:[]
    })
    }
    // Handle form submission logic here
  const options: Option[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-pink-600 flex items-center justify-center px-4">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg px-8 py-8 md:py-12">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap mx-2 mb-6">
            <div className="w-full md:w-1/2 px-2">
              <label
                htmlFor="title"
                className="block ml-1 text-gray-800 text-xl font-semibold mb-1"
              >
                Title
              </label>
              <input
                ref={titleRef}
                required
        type="text"
        id="title"
        className="w-full py-2 px-4 mb-4 rounded-md shadow-sm border border-[#8a2be2] focus:border-[#8a2be2] focus:outline-none focus:ring-blue-500"
        placeholder="Enter a title"
      />

            </div>
            <div className="w-full md:w-1/2 px-2">
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
   <Select
  id="tags"
  isMulti
  options={options}
  className="select-container"
  placeholder="Select tags"
  // value={tags}
  // onChange={handleTagsChange}
  styles={{
    control: (provided, state) => ({
      ...provided,
      boxShadow: 'none',
      borderColor: state.isFocused ? '#8a2be2' : '#8a2be2',
      '&:hover': {
        borderColor: '#4F46E5',
      },
      paddingLeft: '8px', // Add left padding
      paddingRight: '8px', // Add right padding
      paddingTop: '2px',
      paddingBottom:'2px'
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#4F46E5',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'white',
      ':hover': {
        backgroundColor: '#4F46E5',
        color: 'white',
      },
    }),
  }}
/>


            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="markdown"
              className="block text-gray-800 ml-2 text-xl font-semibold mb-1"
            >
              Markdown
            </label>
            <textarea
              required
        id="markdown"
        className="w-full py-2 px-4 mb-6 rounded-md shadow-sm border border-[#8a2be2] focus:outline-none focus:ring-blue-500 focus:border-[#8a2be2]"
        placeholder="Enter markdown"
              rows={6}
              ref={markdownRef}
      ></textarea>
          </div>
          <button
            type="submit"
            className="w-full font-bold py-3 text-white bg-gradient-to-br from-blue-600 to-pink-600 rounded-md hover:from-pink-600 hover:to-blue-600 transition duration-300 shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NoteForm;
