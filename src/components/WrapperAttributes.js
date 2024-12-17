import React, { useEffect } from "react";
import { TbDragDrop2 } from "react-icons/tb";
import DropingArea from "./DropingArea";
import { useSelector, useDispatch } from "react-redux";
import { setDroppedItems } from "../redux/cardDragableSlice";
import { setActiveWidgetName } from "../redux/cardDragableSlice";
import { setActiveEditor } from "../redux/cardToggleSlice";

import Text from "./domElements/Text";
import TextArea from "./domElements/TextArea";
import Image from "./domElements/Image";
import ColumnOne from "./domElements/ColumnOne";
import ColumnTwo from "./domElements/ColumnTwo";
import Button from "./domElements/Button";

import { RxCross2 } from "react-icons/rx";

import { deleteDroppedItemById } from "../redux/cardDragableSlice";

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

    dispatch(setActiveEditor(activeWidgetName));


  };

  const onClickHandle = (e) => {
    e.stopPropagation();
    dispatch(setActiveWidgetName("wrapperAttribute"));
    dispatch(setActiveEditor("wrapperAttribute"));
  };

  const handleDelete = (id) => {
    dispatch(deleteDroppedItemById(id)); // Dispatch delete action with id
  };

  
  // Function to render the DOM element based on widget name
  const renderWidget = (id, name) => {
    switch (name) {
      case "Text":
        return (
          <Text id={id}/>
        );
      case "TextArea":
        return <TextArea id={id}/>
      case "Button":
        return <Button id={id}/>;
      case "Image":
        return <Image id={id}/>;
      case "1-column":
        return (
          <ColumnOne handleDelete={()=>handleDelete(id)}/>
        );
      case "2-columns":
        return (
          <ColumnTwo handleDelete={()=>handleDelete(id)}/>
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
      className="w-[600px] min-h-[250px] border-2 rounded-lg bg-gray-100 p-1 relative hover:border-blue-500 transition-all pb-[50px]"
      onClick={onClickHandle}
    >
      {/* Drag-and-Drop Indicator */}
      {droppedItems.map((item, index) => {
       
          // Render widgets
          return (
            <div key={item.id} className="mb-2">
              {renderWidget(item.id, item.name, handleDelete)}
            </div>
          );
        
      })}


      {/* DropingArea */}
      <DropingArea />
    </div>
  );
};

export default WrapperAttribute;
