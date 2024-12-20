import React from "react";
import { RxCross2 } from "react-icons/rx";
import Text from "./Text";
import Image from "./Image";
import Button from "./Button";
import TextArea from "./TextArea";
import { useDispatch, useSelector } from "react-redux";
import { setDroppedItems } from "../../redux/cardDragableSlice";

// Component Mapping
const componentMap = {
  Text: () => <Text />,
  Image: () => <Image />,
  Button: () => <Button />,
  TextArea: () => <TextArea />,
};

const ColumnTwo = ({ handleDelete, id }) => {
  const { droppedItems } = useSelector((state) => state.cardDragable);
  const dispatch = useDispatch();

  // Find the current column data by ID
  const columnData = droppedItems.find((item) => item.id === id) || { childrenA: [], childrenB: [] };

  const columnAChildren = columnData.childrenA || [];
  const columnBChildren = columnData.childrenB || [];

  const handleDrop = (column) => (e) => {
    e.preventDefault();
    const droppedComponentName = e.dataTransfer.getData("text/plain");
    if (componentMap[droppedComponentName]) {
      dispatch(
        setDroppedItems(
          droppedItems.map((item) => {
            if (item.id === id) {
              const updatedItem = { ...item };
              if (column === "A") {
                updatedItem.childrenA = [
                  ...updatedItem.childrenA,
                  { name: droppedComponentName, id: Date.now(), children: [] },
                ];
              } else {
                updatedItem.childrenB = [
                  ...updatedItem.childrenB,
                  { name: droppedComponentName, id: Date.now(), children: [] },
                ];
              }
              return updatedItem;
            }
            return item;
          })
        )
      );
    }
  };

  const handleDeleteChild = (column, childId) => {
    dispatch(
      setDroppedItems(
        droppedItems.map((item) => {
          if (item.id === id) {
            const updatedItem = { ...item };
            if (column === "A") {
              updatedItem.childrenA = updatedItem.childrenA.filter((child) => child.id !== childId);
            } else {
              updatedItem.childrenB = updatedItem.childrenB.filter((child) => child.id !== childId);
            }
            return updatedItem;
          }
          return item;
        })
      )
    );
  };

  return (
    <div className="relative grid grid-cols-2 gap-1 border p-1 rounded-md bg-white shadow-md hover:shadow-lg transition-all duration-300">
      {/* Delete Button for Parent Column */}
      <button
        onClick={handleDelete}
        className="absolute top-2 right-2 text-white p-1 rounded-full transition-all duration-200 z-10"
      >
        <div className="text-black mb-2 ml-2">
          <RxCross2 size={18} />
        </div>
      </button>

      {/* Column A */}
      <div
        onDrop={handleDrop("A")}
        onDragOver={(e) => e.preventDefault()}
        className="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200 min-h-[150px]"
      >
        <p className="text-gray-500 font-medium mb-2">Column A</p>
        {columnAChildren.map((child) => (
          <div
            key={child.id}
            className="w-full bg-white p-2 border rounded-md mb-2 relative"
          >
            {componentMap[child.name]()}
            {/* Delete Button for Child */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteChild("A", child.id);
              }}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-all duration-200"
            >
              <RxCross2 size={18} />
            </button>
          </div>
        ))}
        {columnAChildren.length === 0 && <p className="text-gray-400">Drop elements here</p>}
      </div>

      {/* Column B */}
      <div
        onDrop={handleDrop("B")}
        onDragOver={(e) => e.preventDefault()}
        className="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200 min-h-[150px]"
      >
        <p className="text-gray-500 font-medium mb-2">Column B</p>
        {columnBChildren.map((child) => (
          <div
            key={child.id}
            className="w-full bg-white p-2 border rounded-md mb-2 relative"
          >
            {componentMap[child.name]()}
            {/* Delete Button for Child */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteChild("B", child.id);
              }}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-all duration-200"
            >
              <RxCross2 size={18} />
            </button>
          </div>
        ))}
        {columnBChildren.length === 0 && <p className="text-gray-400">Drop elements here</p>}
      </div>
    </div>
  );
};

export default ColumnTwo;
