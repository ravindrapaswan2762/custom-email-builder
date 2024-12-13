import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const ButtonEditOption = () => {
  const [isSettingOpen, setIsSettingOpen] = useState(true);
  const [isDimensionOpen, setIsDimensionOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [isTypographyOpen, setIsTypographyOpen] = useState(true);
  const [isBorderOpen, setIsBorderOpen] = useState(true);
  const [isExtraOpen, setIsExtraOpen] = useState(true);

  const [textColor, setTextColor] = useState("#ffffff");
  const [buttonColor, setButtonColor] = useState("#414141");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleTextColorChange = (e) => setTextColor(e.target.value);
  const handleButtonColorChange = (e) => setButtonColor(e.target.value);
  const handleBackgroundColorChange = (e) => setBackgroundColor(e.target.value);

  return (
    <div className="w-full max-w-md p-6 bg-white border rounded-lg shadow-lg h-screen overflow-y-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Button Attributes</h2>

      {/* Setting Section */}
      <div className="p-4 m-1 bg-gray-100 rounded-lg">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsSettingOpen(!isSettingOpen)}
        >
          <h3 className="text-md font-bold text-gray-700">Setting</h3>
          <button className="text-gray-500 focus:outline-none">
            {isSettingOpen ? <FiChevronDown /> : <FiChevronRight />}
          </button>
        </div>
        {isSettingOpen && (
          <div className="mt-3 space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Content</label>
              <input
                type="text"
                placeholder="Button"
                className="w-full p-2 border rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Href</label>
              <input
                type="text"
                placeholder="#"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Target</label>
              <select
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="_self">_self</option>
                <option value="_blank">_blank</option>
              </select>
            </div>
          </div>
        )}
      </div>

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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">Width</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">Font Weight</label>
                <select
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="normal">Normal</option>
                  <option value="bold">Bold</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Padding</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Top (px)</label>
                  <input
                    type="number"
                    value="10"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Left (px)</label>
                  <input
                    type="number"
                    value="25"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Bottom (px)</label>
                  <input
                    type="number"
                    value="10"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Right (px)</label>
                  <input
                    type="number"
                    value="25"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Inner Padding</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Top (px)</label>
                  <input
                    type="number"
                    value="10"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Left (px)</label>
                  <input
                    type="number"
                    value="25"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Bottom (px)</label>
                  <input
                    type="number"
                    value="10"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Right (px)</label>
                  <input
                    type="number"
                    value="25"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
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
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Text Color</label>
              <div className="relative">
                <input
                  type="text"
                  value={textColor}
                  onChange={handleTextColorChange}
                  className="w-full pl-12 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input
                  type="color"
                  value={textColor}
                  onChange={handleTextColorChange}
                  className="absolute left-2 top-2 w-8 h-8 border rounded-lg cursor-pointer"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Button Color</label>
              <div className="relative">
                <input
                  type="text"
                  value={buttonColor}
                  onChange={handleButtonColorChange}
                  className="w-full pl-12 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input
                  type="color"
                  value={buttonColor}
                  onChange={handleButtonColorChange}
                  className="absolute left-2 top-2 w-8 h-8 border rounded-lg cursor-pointer"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Background Color</label>
              <div className="relative">
                <input
                  type="text"
                  value={backgroundColor}
                  onChange={handleBackgroundColorChange}
                  className="w-full pl-12 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={handleBackgroundColorChange}
                  className="absolute left-2 top-2 w-8 h-8 border rounded-lg cursor-pointer"
                />
              </div>
            </div>
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">Font Family</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">Font Size (px)</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">Font Weight</label>
                <select
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="normal">Normal</option>
                  <option value="bold">Bold</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">Line Height</label>
                <input
                  type="text"
                  placeholder="120%"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Text Decoration</label>
              <select
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="none">None</option>
                <option value="underline">Underline</option>
                <option value="line-through">Line Through</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Letter Spacing</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Align</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="align"
                    value="left"
                    className="mr-2"
                  />
                  Left
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="align"
                    value="center"
                    className="mr-2"
                  />
                  Center
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="align"
                    value="right"
                    className="mr-2"
                  />
                  Right
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Font Style</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="font-style"
                    value="normal"
                    className="mr-2"
                  />
                  Normal
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="font-style"
                    value="italic"
                    className="mr-2"
                  />
                  Italic
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Border Section */}
      <div className="p-4 m-1 bg-gray-100 rounded-lg">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsBorderOpen(!isBorderOpen)}
        >
          <h3 className="text-md font-bold text-gray-700">Border</h3>
          <button className="text-gray-500 focus:outline-none">
            {isBorderOpen ? <FiChevronDown /> : <FiChevronRight />}
          </button>
        </div>
        {isBorderOpen && (
          <div className="mt-3 space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Border</label>
              <input
                type="text"
                placeholder="none"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Border Radius</label>
              <input
                type="text"
                placeholder="3px"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
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
                 <div className="mt-3 space-y-4">
                   <div>
                     <label className="block text-sm font-bold text-gray-600 mb-1">Title</label>
                     <input
                       type="text"
                       className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                     />
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-gray-600 mb-1">Alt</label>
                     <input
                       type="text"
                       className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                     />
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-gray-600 mb-1">Class Name</label>
                     <input
                       type="text"
                       className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                     />
                   </div>
                 </div>
               )}
             </div>
           </div>
         );
       };

       export default ButtonEditOption;