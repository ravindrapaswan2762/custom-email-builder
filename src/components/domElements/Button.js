import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { deleteDroppedItemById } from "../../redux/cardDragableSlice";

const Button = ({ id }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Submit");

  const handleClick = () => {
    setIsEditing(true); // Enable edit mode
  };

  const handleBlur = () => {
    setIsEditing(false); // Exit edit mode when input loses focus
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false); // Exit edit mode on Enter key press
    }
  };

  return (
    <div className="flex justify-center w-full">
      {/* Outer Container with Dashed Border */}
      <div className="relative w-full h-[50px] border-dashed border-2 border-gray-300 flex items-center justify-center">
        {/* Editable Text Button */}
        {isEditing ? (
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            className="bg-blue-500 text-black px-4 py-2 rounded-md focus:outline-none text-center"
          />
        ) : (
          <button
            onClick={handleClick}
            className="relative bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 text-center"
          >
            {/* Delete Button Inside the Button */}
            <span
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deleteDroppedItemById(id));
              }}
              className="absolute -top-3 -right-3 bg-grey-500 text-black p-1 rounded-full hover:bg-grey-600 cursor-pointer"
            >
              <RxCross2 size={14} />
            </span>
            {text}
          </button>
        )}
      </div>
    </div>
  );
};

export default Button;
