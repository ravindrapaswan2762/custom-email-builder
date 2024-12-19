import React, { useEffect } from "react";
import { TbDragDrop2 } from "react-icons/tb";
import DropingArea from "./DropingArea";
import { useSelector, useDispatch} from "react-redux";
import {  } from "../redux/cardDragableSlice";
import {  } from "../redux/cardDragableSlice";
import { setActiveEditor } from "../redux/cardToggleSlice";

import { useState } from "react";

import Text from "./domElements/Text";
import TextArea from "./domElements/TextArea";
import Image from "./domElements/Image";
import ColumnOne from "./domElements/ColumnOne";
import ColumnTwo from "./domElements/ColumnTwo";
import Button from "./domElements/Button";
import { setActiveWidgetId, setDroppedItems, setActiveWidgetName} from "../redux/cardDragableSlice";

import { RxCross2 } from "react-icons/rx";

import { deleteDroppedItemById } from "../redux/cardDragableSlice";

import { generateSourceCode, generateInlineStyles} from "./generateSourceCode";

const WrapperAttribute = () => {
  const { activeWidgetName, droppedItems, activeWidgetId } = useSelector((state) => state.cardDragable);
  const [sourceCode, setSourceCode] = useState("");


  useEffect( ()=>{
    renderWidget(activeWidgetName);
  }, [activeWidgetName])
  
  const { isColumnPopedUp } = useSelector((state) => state.cardToggle);
  
  const dispatch = useDispatch();

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
  
    if (!activeWidgetName) return; // Ensure activeWidgetName is set before adding
  
    // Dispatch to add the new widget/column to the array
    dispatch(
      setDroppedItems({
        id: Date.now(), // Unique ID
        name: activeWidgetName,
        type: activeWidgetName.includes("column") ? activeWidgetName : "widget", // Set type for columns or widgets
        parentId: null,
        styles: {}
      })

    );

    await dispatch(setActiveEditor(activeWidgetName));
    await dispatch(setActiveWidgetName(activeWidgetName));
    dispatch(setActiveWidgetId(activeWidgetId));


  };

  const onClickHandle = (e) => {
    e.stopPropagation();
    dispatch(setActiveWidgetName("wrapperAttribute"));
    dispatch(setActiveEditor("wrapperAttribute"));
  };

  const handleDelete = (id) => {
    dispatch(deleteDroppedItemById(id)); // Dispatch delete action with id
  };

  const handleShowSourceCode = () => {
    const generatedCode = generateSourceCode(droppedItems);
    setSourceCode(generatedCode);
    // console.log("Generated Source Code:\n", generatedCode);
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
          <ColumnOne handleDelete={()=>handleDelete(id)} id={id}/>
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



      {/* Generate Source Code Button */}
      <button
        onClick={handleShowSourceCode}
        className="bg-blue-500 text-white p-2 rounded-md mb-4"
      >
        Show Source Code
      </button>

      {/* Render Generated Source Code */}
      {sourceCode && (
        // <pre className="mt-4 bg-gray-800 text-white p-4 rounded overflow-x-auto">
        //   {sourceCode}
        // </pre>

        <div className="w-[600px] min-h-[250px] border-2 rounded-lg bg-gray-100 p-1 relative hover:border-blue-500 transition-all pb-[50px] mt-4 bg-gray-800 text-white p-4 rounded overflow-x-auto">
        <div className="mb-2">
            ${sourceCode}
        </div>
        </div>
      )}


      {/* DropingArea */}
      <DropingArea />
    </div>
  );
};

export default WrapperAttribute;


// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setDroppedItems,
//   deleteDroppedItemById,
//   setActiveWidgetName,
// } from "../redux/cardDragableSlice";
// import { setActiveEditor } from "../redux/cardToggleSlice";
// import DropingArea from "./DropingArea";

// import Text from "./domElements/Text";
// import TextArea from "./domElements/TextArea";
// import Image from "./domElements/Image";
// import Button from "./domElements/Button";

// const WrapperAttribute = () => {
//   const { activeWidgetName, droppedItems } = useSelector((state) => state.cardDragable);
//   const dispatch = useDispatch();

//   const [showSourceCode, setShowSourceCode] = useState(false); // Source code modal toggle
//   const [sourceCode, setSourceCode] = useState(""); // Generated source code

//   // Handle Drop
//   const handleDrop = (e, parentId = null) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!activeWidgetName) return;

//     dispatch(
//       setDroppedItems({
//         id: Date.now(),
//         name: activeWidgetName,
//         type: activeWidgetName.includes("column") ? activeWidgetName : "widget",
//         parentId, // Associate with parent if applicable
//       })
//     );

//     dispatch(setActiveEditor(activeWidgetName));
//   };

//   // Delete Element
//   const handleDelete = (id) => {
//     dispatch(deleteDroppedItemById(id));
//   };

//   // Generate Source Code
//   const generateSourceCode = () => {
//     const code = droppedItems
//       .filter((item) => !item.parentId) // Only top-level items
//       .map((item) => renderWidgetSource(item, droppedItems))
//       .join("\n");
//     setSourceCode(code);
//   };

//   // Update Source Code When Items Change
//   useEffect(() => {
//     generateSourceCode();
//   }, [droppedItems]);

//   // Render Source Code Recursively
//   const renderWidgetSource = (item, allItems) => {
//     switch (item.name) {
//       case "Text":
//         return `<input type="text" class="border p-2 rounded w-full" placeholder="Text Field"/>`;
//       case "TextArea":
//         return `<textarea class="border p-2 rounded w-full" placeholder="Text Area"></textarea>`;
//       case "Button":
//         return `<button class="bg-blue-500 text-white p-2 rounded">Button</button>`;
//       case "Image":
//         return `<div class="border p-2 rounded text-center w-[300px] h-[300px]">Image Placeholder</div>`;
//       case "1-column": {

//       }
//       case "2-columns": {
//         const columnAChildren = allItems.filter((child) => child.parentId === `${item.id}-columnA`);
//         const columnBChildren = allItems.filter((child) => child.parentId === `${item.id}-columnB`);

//         const columnASource = columnAChildren.map((child) => renderWidgetSource(child, allItems)).join("\n");
//         const columnBSource = columnBChildren.map((child) => renderWidgetSource(child, allItems)).join("\n");

//         return `<div class="grid grid-cols-2 gap-4 border p-4 rounded-md bg-white shadow-sm">
//           <div class="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200">
//             ${columnASource}
//           </div>
//           <div class="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200">
//             ${columnBSource}
//           </div>
//         </div>`;
//       }
//       case "3-column": {

//       }
//       default:
//         return "<div>Unknown Widget</div>";
//     }
//   };

//   // Render Widgets Dynamically
//   const renderWidget = (id, name) => {
//     switch (name) {
//       case "Text":
//         return <Text />;
//       case "TextArea":
//         return <TextArea />;
//       case "Button":
//         return <Button />;
//       case "Image":
//         return <Image />;
//       case "2-columns":
//         return (
//           <div className="grid grid-cols-2 gap-4 border p-4 rounded-md bg-white shadow-sm">
//             <div
//               onDrop={(e) => handleDrop(e, `${id}-columnA`)}
//               onDragOver={(e) => e.preventDefault()}
//               className="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200 min-h-[150px]"
//             >
//               <p className="text-gray-500 font-medium mb-2">Column A</p>
//               {droppedItems
//                 .filter((child) => child.parentId === `${id}-columnA`)
//                 .map((child) => (
//                   <div key={child.id} className="w-full bg-white p-2 border rounded-md mb-2">
//                     {renderWidget(child.id, child.name)}
//                   </div>
//                 ))}
//             </div>
//             <div
//               onDrop={(e) => handleDrop(e, `${id}-columnB`)}
//               onDragOver={(e) => e.preventDefault()}
//               className="border border-dashed p-4 bg-gray-50 rounded-md text-center hover:bg-gray-200 min-h-[150px]"
//             >
//               <p className="text-gray-500 font-medium mb-2">Column B</p>
//               {droppedItems
//                 .filter((child) => child.parentId === `${id}-columnB`)
//                 .map((child) => (
//                   <div key={child.id} className="w-full bg-white p-2 border rounded-md mb-2">
//                     {renderWidget(child.id, child.name)}
//                   </div>
//                 ))}
//             </div>
//           </div>
//         );
//       default:
//         return <div className="text-gray-500">Unknown Widget</div>;
//     }
//   };

//   return (
//     <div
//       onDragOver={(e) => e.preventDefault()}
//       onDrop={(e) => handleDrop(e)}
//       className="w-[600px] min-h-[250px] border-2 rounded-lg bg-gray-100 p-1 relative hover:border-blue-500 transition-all pb-[50px]"
//     >
//       {/* Render Dropped Items */}
//       {droppedItems.map((item) => (
//         <div key={item.id} className="relative mb-2">
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               handleDelete(item.id);
//             }}
//             className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
//           >
//             ×
//           </button>
//           {renderWidget(item.id, item.name)}
//         </div>
//       ))}

//       {/* Show Source Code Button */}
//       <button
//         onClick={() => setShowSourceCode(!showSourceCode)}
//         className="absolute bottom-2 right-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//       >
//         Show Source Code
//       </button>

//       {/* Source Code Modal */}
//       {showSourceCode && (
//         <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 p-4 flex flex-col items-center">
//           <h3 className="text-lg font-bold mb-2">Source Code</h3>
//           <pre className="bg-gray-100 p-4 rounded w-full max-h-[400px] overflow-auto">
//             {sourceCode}
//           </pre>
//           <button
//             onClick={() => setShowSourceCode(false)}
//             className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//           >
//             Close
//           </button>
//         </div>
//       )}

//       {/* DropingArea */}
//       <DropingArea />
//     </div>
//   );
// };

// export default WrapperAttribute;


