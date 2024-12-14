import React from "react";
import { TbDragDrop2 } from "react-icons/tb";

import { onWidgetClick } from "../redux/cardToggleSlice";
import { useDispatch } from "react-redux";

const WrapperAttribute = ({ droppedItems }) => {

    const dispatch = useDispatch();

    const onClickHandle = (e) => {
        e.stopPropagation();
        dispatch(onWidgetClick("wrapperAttribute"));
    }
    
  return (
    <div
      className="w-[600px] min-h-[250px] border-2 rounded-lg bg-gray-100 p-4 relative hover:border-blue-500 transition-all"
      style={{ height: "auto" }}
      onClick={onClickHandle}
    >
      {/* Drag-and-Drop Indicator */}
      {droppedItems.length === 0 && (
        <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-500">
          <TbDragDrop2 className="text-4xl mb-2" />
          <p>Drag and drop items here</p>
        </div>
      )}

      {droppedItems.length > 0 ? (
        droppedItems.map((item, index) => (
          <div
            key={index}
            className={`border p-4 rounded-md mb-4 bg-white shadow-sm ${
              item.type === "1-column"
                ? "grid grid-cols-1 gap-4"
                : item.type === "2-columns"
                ? "grid grid-cols-2 gap-4"
                : "grid grid-cols-3 gap-4"
            }`}
          >
            {[...Array(item.type === "1-column" ? 1 : item.type === "2-columns" ? 2 : 3)].map(
              (_, colIndex) => (
                <div
                  key={colIndex}
                  className="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200"
                >
                  {colIndex === 0
                    ? "Column A"
                    : colIndex === 1
                    ? "Column B"
                    : "Column C"}
                </div>
              )
            )}
          </div>
        ))
      ) : null}
    </div>
  );
};

export default WrapperAttribute;
