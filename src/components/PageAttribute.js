import React, { useState } from "react";
import WrapperAttribute from "./WrapperAttributes";
import StructurePopup from "./StructurePopup";
import { FiGrid } from "react-icons/fi"; // Updated Icon

import { onWidgetClick } from "../redux/cardToggleSlice";
import { useDispatch } from "react-redux";

const PageAttribute = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const dispatch = useDispatch();


  const handleAddStructure = (structureType) => {
    // Add the selected structure (1 column, 2 columns, or 3 columns) to droppedItems
    setDroppedItems((prev) => [...prev, { type: structureType }]);
    setShowPopup(false); // Close the popup

  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };


  return (
    <div
      className={`w-full h-full border-2 border-blue-300 rounded-lg bg-gray-100 flex flex-col items-center hover:border-blue-500 transition-all relative`}
      style={{paddingBottom: "10px"}}
      onClick={()=> dispatch(onWidgetClick("pageAttribute"))}
    >

      {/* WrapperAttribute Component */}
      <WrapperAttribute droppedItems={droppedItems} />

      {/* Add Button */}
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition duration-200 flex items-center"
          onClick={togglePopup}
        >
          <FiGrid className="text-2xl" /> {/* Updated Icon */}
        </button>
      </div>

      {/* Structure Popup */}
      {showPopup && (
        <StructurePopup onClose={togglePopup} onAdd={handleAddStructure} />
      )}
    </div>
  );
};

export default PageAttribute;
