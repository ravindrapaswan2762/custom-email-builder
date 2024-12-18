import React, { useState, useEffect } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { updateElementStyles } from "../redux/cardDragableSlice";

const TextEditOption = () => {
  const [isDimensionOpen, setIsDimensionOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [isTypographyOpen, setIsTypographyOpen] = useState(true);
  const [isExtraOpen, setIsExtraOpen] = useState(true);

  const dispatch = useDispatch();
  const { activeWidgetId, droppedItems } = useSelector((state) => state.cardDragable);

  // Find the currently selected element from Redux state
  const selectedElement =
    droppedItems.find((item) => item.id === activeWidgetId) || {};

  const [fields, setFields] = useState({
    height: "",
    paddingTop: "",
    paddingLeft: "",
    paddingBottom: "",
    paddingRight: "",
    color: "#000000",
    backgroundColor: "#ffffff",
    fontFamily: "",
    fontSize: "",
    lineHeight: "",
    letterSpacing: "",
    textDecoration: "none",
    fontWeight: "normal",
    className: "",
  });

  // Update local fields state when the selected element changes
  useEffect(() => {
    if (selectedElement.styles) {
      setFields((prev) => ({
        ...prev,
        ...selectedElement.styles,
      }));
    }

    console.log("activeWidgetId and droppedItems: ",activeWidgetId, droppedItems);
  }, [selectedElement]);

  // Handle input changes dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log("name, value: ", name, value);

    // Dispatch updated styles to Redux
    dispatch(
      updateElementStyles({
        id: activeWidgetId,
        styles: { [name]: value },
      })
    );
  };

  return (
    <div className="w-full max-w-md p-6 bg-white border rounded-lg shadow-lg h-screen overflow-y-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Text Attributes</h2>

      {/* Dimension Section */}
      <div className="p-4 m-1 bg-gray-100 rounded-lg">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsDimensionOpen(!isDimensionOpen)}
        >
          <h3 className="text-md font-bold text-gray-700">Dimension</h3>
          <button className="text-gray-500 focus:outline-none">
            {isDimensionOpen ? <FiChevronDown /> : <FiChevronRight />}
          </button>
        </div>
        {isDimensionOpen && (
          <div className="mt-3 space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Height</label>
              <input
                type="text"
                name="height"
                value={fields.height}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Padding</label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "paddingTop", label: "Top (px)" },
                  { name: "paddingLeft", label: "Left (px)" },
                  { name: "paddingBottom", label: "Bottom (px)" },
                  { name: "paddingRight", label: "Right (px)" },
                ].map(({ name, label }) => (
                  <div key={name}>
                    <label className="block text-xs font-bold text-gray-600 mb-1">{label}</label>
                    <input
                      type="number"
                      name={name}
                      value={fields[name]}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Color Section */}
      <div className="p-4 m-1 bg-gray-100 rounded-lg">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsColorOpen(!isColorOpen)}
        >
          <h3 className="text-md font-bold text-gray-700">Color</h3>
          <button className="text-gray-500 focus:outline-none">
            {isColorOpen ? <FiChevronDown /> : <FiChevronRight />}
          </button>
        </div>
        {isColorOpen && (
          <div className="mt-3 space-y-4">
            {[
              { name: "color", label: "Text Color" },
              { name: "backgroundColor", label: "Background Color" },
            ].map(({ name, label }) => (
              <div key={name}>
                <label className="block text-sm font-bold text-gray-600 mb-1">{label}</label>
                <div className="relative">
                  <input
                    type="text"
                    name={name}
                    value={fields[name]}
                    onChange={handleInputChange}
                    className="w-full pl-12 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <input
                    type="color"
                    name={name}
                    value={fields[name]}
                    onChange={handleInputChange}
                    className="absolute left-2 top-2 w-8 h-8 border rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Typography Section */}
      <div className="p-4 m-1 bg-gray-100 rounded-lg">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsTypographyOpen(!isTypographyOpen)}
        >
          <h3 className="text-md font-bold text-gray-700">Typography</h3>
          <button className="text-gray-500 focus:outline-none">
            {isTypographyOpen ? <FiChevronDown /> : <FiChevronRight />}
          </button>
        </div>
        {isTypographyOpen && (
          <div className="mt-3 space-y-4">
            {[
              { name: "fontFamily", label: "Font Family" },
              { name: "fontSize", label: "Font Size (px)" },
              { name: "lineHeight", label: "Line Height" },
              { name: "letterSpacing", label: "Letter Spacing" },
            ].map(({ name, label }) => (
              <div key={name}>
                <label className="block text-sm font-bold text-gray-600 mb-1">{label}</label>
                <input
                  type="text"
                  name={name}
                  value={fields[name]}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Extra Section */}
      <div className="p-4 m-1 bg-gray-100 rounded-lg">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsExtraOpen(!isExtraOpen)}
        >
          <h3 className="text-md font-bold text-gray-700">Extra</h3>
          <button className="text-gray-500 focus:outline-none">
            {isExtraOpen ? <FiChevronDown /> : <FiChevronRight />}
          </button>
        </div>
        {isExtraOpen && (
          <div className="mt-3">
            <label className="block text-sm font-bold text-gray-600 mb-1">Class Name</label>
            <input
              type="text"
              name="className"
              value={fields.className}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TextEditOption;
