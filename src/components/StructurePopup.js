import React from "react";
import { onWidgetClick } from "../redux/cardToggleSlice";
import { useDispatch } from "react-redux";

const StructurePopup = ({ onClose, onAdd }) => {

  const dispatch = useDispatch();

  const structures = [
    { id: "1-column", label: "1 Column" },
    { id: "2-columns", label: "2 Columns" },
    { id: "3-columns", label: "3 Columns" },
  ];

  const onClickHandle = (structureId, e) =>{
    e.stopPropagation();
    console.log("structureId: ",structureId);
    dispatch(onWidgetClick("sectionEditor"));
    onAdd(structureId);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Select Your Structure</h3>
          <button
            onClick={onClose}
            className="text-red-500 font-bold text-xl hover:text-red-600"
          >
            ×
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {structures.map((structure) => (
            <button
              key={structure.id}
              onClick={(e)=>onClickHandle(structure.id, e)}
              className="p-4 border rounded-lg hover:bg-gray-100 text-center"
            >
              {structure.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StructurePopup;
