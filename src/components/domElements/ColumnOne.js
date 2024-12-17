import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Text from "./Text";
import Image from "./Image";

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

const ColumnOne = ({handleDelete}) => {
  const [droppedElements, setDroppedElements] = useState([]); // Array to store dropped elements

  // Handle Drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedComponentName = e.dataTransfer.getData("text/plain"); // Get component name
    if (componentMap[droppedComponentName]) {
      setDroppedElements((prev) => [...prev, droppedComponentName]); // Add to array
      console.log("Dropped Element:", droppedComponentName); // Log the added component
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    e.stopPropagation();
    console.log("ColumnOne clicked!");
  };

  // Handle Delete Entire Column
  const handleDeleteColumn = (e) => {
    e.stopPropagation();
    handleDelete();
    console.log("Column deleted!");
  };

  return (
    <div
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200 min-h-[150px]"
    >
      {/* Delete Button for the Column */}
      <button
          onClick={handleDeleteColumn}
          className="absolute right-2 text-white p-1 rounded-full transition-all duration-200 z-10"
        >
          <div className="text-black"><RxCross2 size={18} /></div>
      </button>

      {/* Render Dropped Components */}
      {droppedElements.length > 0 ? (
        droppedElements.map((componentName, index) => (
          <div
            key={index}
            className="w-full bg-white p-2 border rounded-md mb-2 relative"
          >
            {componentMap[componentName]()} {/* Render dynamically */}
          </div>
        ))
      ) : (
        <div className="border-dashed border-2 rounded-md text-center text-gray-600 font-semibold">
          Drop an element here
        </div>
      )}
    </div>
  );
};

export default ColumnOne;
