import { Link } from 'react-router-dom';
import { SimplifiedNotes } from './NoteList';



const Note = ({ id, title, tags }: SimplifiedNotes) => {
  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  };
  return (
    <Link to={`/${id}`}>
    <div style={{ background: "linear-gradient(90deg,#4ca5ff 2.34%,#b673f8", boxShadow:"3px 10px 30px 6px rgba(121, 157, 230, 0.4)",   transition: "transform 0.2s ease-out 0s, box-shadow 0.2s ease-out"}} className="mt-8 hover:-translate-y-[5px]  p-2 rounded-lg shadow-md min-h-[200px] max-h-[200px] min-w-[50px] max-w-[350px]">
      <p className="text-white text-2xl font-bold text-center">{title}</p>
      <div className="flex flex-wrap  px-2 mt-4">
        {tags.map((tag, index) => (
          <span style={{backgroundColor:`${generateRandomColor()}`}}
            key={index}
            className={`  text-white rounded-full px-2 py-1 text-sm mr-2 mb-2`}
          >
            {tag.label}
          </span>
        ))}
      </div>
      </div>
      </Link>
  );
};

export default Note;
