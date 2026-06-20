import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();





  const handleItemClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div 
      className="relative"
      onClick={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button  className="w-auto h-[55px]   md:w-[190px] md:h-[45px]  md:text-2xl text-xl rounded text-green-700 hover:text-green-400  bg-yellow-500 hover:bg-gray-700 " >
        {title}
      </button>
      
      {isOpen && items && (
        <div className="absolute top-full left-0 bg-black border border-gray-700 rounded shadow-lg  min-w-48 z-50">
          {items.map((item, index) => (
            <div 
              key={index}
              onClick={() => handleItemClick(item.path)}
              className="px-4 py-3 text-white hover:bg-gray-800 cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
