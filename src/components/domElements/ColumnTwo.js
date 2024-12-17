import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Cross delete icon
import Text from "./Text";
import Image from "./Image";
import { RxCross2 } from "react-icons/rx";

// Component Mapping
const componentMap = {
  Text: () => <Text />,
  Image: () => <Image />,
  Button: () => (
    <button className="w-full p-2 bg-blue-500 text-white rounded">
      Button
    </button>
  ),
  TextArea: () => (
    <textarea
      className="w-full p-2 border rounded"
      placeholder="Enter text here"
      rows="3"
    />
  ),
};

const ColumnTwo = ({ handleDelete }) => {
  const [columnAElements, setColumnAElements] = useState([]); // Elements in Column A
  const [columnBElements, setColumnBElements] = useState([]); // Elements in Column B


  // Handle Drop for Column A
  const handleDropColumnA = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedComponentName = e.dataTransfer.getData("text/plain");
    if (componentMap[droppedComponentName]) {
      setColumnAElements((prev) => [...prev, droppedComponentName]);
    }
  };

  // Handle Drop for Column B
  const handleDropColumnB = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedComponentName = e.dataTransfer.getData("text/plain");
    if (componentMap[droppedComponentName]) {
      setColumnBElements((prev) => [...prev, droppedComponentName]);
    }
  };

  // Delete Child Node
  const handleDeleteChild = (columnSetter, index) => {
    columnSetter((prev) => prev.filter((_, i) => i !== index));
  };


  return (
    <div className="relative grid grid-cols-2 gap-1 border p-1 rounded-md bg-white shadow-md hover:shadow-lg transition-all duration-300">
      {/* Delete Button for Parent Column */}
      <button
        onClick={handleDelete}
        className="absolute top-2 right-2 text-white p-1 rounded-full transition-all duration-200 z-10"
      >
        <div className="text-black mb-2 ml-2"><RxCross2 size={18} /></div>
      </button>

      {/* Column A */}
      <div
        onDrop={handleDropColumnA}
        onDragOver={(e) => e.preventDefault()}
        className="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200 min-h-[150px]"
      >
        <p className="text-gray-500 font-medium mb-2">Column A</p>
        {columnAElements.map((element, index) => (
          <div
            key={index}
            className="w-full bg-white p-2 border rounded-md mb-2 relative"
          >
            {componentMap[element]()}
            {/* Delete Button for Child */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteChild(setColumnAElements, index);
              }}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-all duration-200"
            >
              <AiOutlineClose size={14} />
            </button>
          </div>
        ))}
        {columnAElements.length === 0 && (
          <p className="text-gray-400">Drop elements here</p>
        )}
      </div>

      {/* Column B */}
      <div
        onDrop={handleDropColumnB}
        onDragOver={(e) => e.preventDefault()}
        className="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200 min-h-[150px]"
      >
        <p className="text-gray-500 font-medium mb-2">Column B</p>
        {columnBElements.map((element, index) => (
          <div
            key={index}
            className="w-full bg-white p-2 border rounded-md mb-2 relative"
          >
            {componentMap[element]()}
            {/* Delete Button for Child */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteChild(setColumnBElements, index);
              }}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-all duration-200"
            >
              <AiOutlineClose size={14} />
            </button>
          </div>
        ))}
        {columnBElements.length === 0 && (
          <p className="text-gray-400">Drop elements here</p>
        )}
      </div>
    </div>
  );
};

export default ColumnTwo;
