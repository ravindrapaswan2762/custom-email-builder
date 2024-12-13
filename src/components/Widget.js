// =================================Original=================================-//
import React, { useRef } from "react";

const Widget = ({ type, onDelete, onDoubleClick, style = {} }) => {
  const textareaRef = useRef(null);

  // Auto-adjust height for text-area-like widgets
  const autoAdjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height to auto to calculate the new height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on scrollHeight
    }
  };

  const wrapperStyle = {
    position: "relative",
    marginBottom: "10px",
    width: "100%",
    ...style, // Apply dynamic styles here
  };

  if (type === "Text Field" || type === "Text Area") {
    return (
      <div style={wrapperStyle} onDoubleClick={onDoubleClick}>
        <textarea
          ref={textareaRef}
          placeholder={type === "Text Field" ? "Enter text" : "Enter detailed text"}
          style={{
            width: "100%",
            padding: "8px",
            fontSize: style.fontSize || "14px",
            color: style.color || "#000",
            lineHeight: "1.5",
            border: "1px solid #ccc",
            borderRadius: "4px",
            resize: "none",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
          rows={1}
          onInput={autoAdjustHeight}
        />
        <button
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "24px",
            height: "24px",
            cursor: "pointer",
          }}
          onClick={onDelete}
        >
          X
        </button>
      </div>
    );
  }

  if (type === "Button") {
    return (
      <div style={wrapperStyle} onDoubleClick={onDoubleClick}>
        <button
          style={{
            display: "block",
            width: "100%",
            padding: "8px 16px",
            fontSize: style.fontSize || "14px",
            color: style.color || "#000",
            backgroundColor: style.backgroundColor || "#1976d2",
          }}
        >
          Click Me
        </button>
        <button
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "24px",
            height: "24px",
            cursor: "pointer",
          }}
          onClick={onDelete}
        >
          X
        </button>
      </div>
    );
  }

  return null;
};

export default Widget;


// =================================Original=================================-//








