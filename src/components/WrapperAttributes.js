import React, { useEffect } from "react";
import { TbDragDrop2 } from "react-icons/tb";
import DropingArea from "./DropingArea";
import { useSelector, useDispatch } from "react-redux";
import { setDroppedItems } from "../redux/cardDragableSlice";

const WrapperAttribute = () => {
  const { activeWidgetName, droppedItems } = useSelector((state) => state.cardDragable);

  useEffect( ()=>{
    renderWidget(activeWidgetName);
  }, [activeWidgetName])
  
  const { isColumnPopedUp } = useSelector((state) => state.cardToggle);
  
  const dispatch = useDispatch();

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
  
    if (!activeWidgetName) return; // Ensure activeWidgetName is set before adding
  
    // Dispatch to add the new widget/column to the array
    dispatch(
      setDroppedItems({
        id: Date.now(), // Unique ID
        name: activeWidgetName,
        type: activeWidgetName.includes("column") ? activeWidgetName : "widget", // Set type for columns or widgets
      })
    );
  };
  
  

  // Function to render the DOM element based on widget name
  const renderWidget = (name) => {
    switch (name) {
      case "Text Field":
        return (
          <input
            type="text"
            className="border p-2 rounded w-full"
            placeholder="Text Field"
            value="Make it easy for everyone to compose emails!"
          />
        );
      case "Text Area":
        return <textarea className="border p-2 rounded w-full" placeholder="Text Area" />;
      case "Button":
        return <button className="bg-blue-500 text-white p-2 rounded">Button</button>;
      case "Image":
        return <div className="border p-2 rounded text-center w-[300px] h-[300px]">Image Placeholder</div>;
      case "1-column":
        return (
          <div className="grid grid-cols-1 gap-4 border p-4 rounded-md bg-white shadow-sm">
            <div className="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200">
              Column A
            </div>
          </div>
        );
      case "2-columns":
        return (
          <div className="grid grid-cols-2 gap-4 border p-4 rounded-md bg-white shadow-sm">
            <div className="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200">
              Column A
            </div>
            <div className="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200">
              Column B
            </div>
          </div>
        );
      case "3-columns":
        return (
          <div className="grid grid-cols-3 gap-4 border p-4 rounded-md bg-white shadow-sm">
            <div className="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200">
              Column A
            </div>
            <div className="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200">
              Column B
            </div>
            <div className="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200">
              Column C
            </div>
          </div>
        );
      default:
        return <div className="text-gray-500">Unknown Widget</div>;
    }
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()} // Allow drop
      onDrop={handleDrop} // Handle drop event
      className="w-[600px] min-h-[250px] border-2 rounded-lg bg-gray-100 p-4 relative hover:border-blue-500 transition-all"
    >
      {/* Drag-and-Drop Indicator */}
      {droppedItems.map((item, index) => {
        // Check if the item is a column or widget
        // return (
        //   <div
        //     key={index}
        //     className={`border p-4 rounded-md mb-4 bg-white shadow-sm ${
        //       item.type === "1-column"
        //         ? "grid grid-cols-1 gap-4"
        //         : item.type === "2-columns"
        //         ? "grid grid-cols-2 gap-4"
        //         : item.type === "3-columns"
        //         ? "grid grid-cols-3 gap-4"
        //         : ""
        //     }`}
        //   >
        //     {[...Array(item.type === "1-column" ? 1 : item.type === "2-columns" ? 2 : 3)].map(
        //       (_, colIndex) => (
        //         <div
        //           key={colIndex}
        //           className="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200"
        //         >
        //           {colIndex === 0
        //             ? "Column A"
        //             : colIndex === 1
        //             ? "Column B"
        //             : "Column C"}
        //         </div>
        //       )
        //     )}
        //   </div>
        // );
          // Render widgets
          return (
            <div key={index} className="mb-4">
              {renderWidget(item.name)}
            </div>
          );
        
      })}


      {/* DropingArea */}
      <DropingArea />
    </div>
  );
};

export default WrapperAttribute;
