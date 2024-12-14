import React from "react";
import { useDrag } from "react-dnd";

import { CiText } from "react-icons/ci";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { RxButton } from "react-icons/rx";
import { IoShareSocialOutline } from "react-icons/io5";
import { BsTextareaResize } from "react-icons/bs";
import { MdSpaceBar } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";

import { onWidgetClick } from "../redux/cardToggleSlice";
import { useDispatch } from "react-redux";

const Sidebar = () => {

  const dispatch = useDispatch();

  const Widget = ({ name, icon: Icon }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "widget",
      item: { name },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));

    return (
      <div
        ref={drag}
        className={`
          flex flex-col items-center justify-center p-5 m-2 border rounded-lg shadow-md cursor-move w-[115px] h-[90px] transition-all 
          ${isDragging ? "bg-blue-100" : "bg-white"}
        `}
        onMouseEnter={(e) =>
          e.currentTarget.classList.add("shadow-lg", "scale-105")
        }
        onMouseLeave={(e) =>
          e.currentTarget.classList.remove("shadow-lg", "scale-105")
        }
        
        onClick={() => dispatch(onWidgetClick(name))}
      >
        <div className="text-black text-2xl">
          <Icon />
        </div>
        <span className="text-sm font-medium text-gray-800 text-center">
          {name}
        </span>
      </div>
    );
  };

  return (
    <div
      className="w-full max-w-xs border rounded-lg p-4 bg-gray-50 shadow-lg grid grid-cols-2 gap-4 h-screen overflow-y-auto" style={{ height: "100vh" }}
    >
      <h3 className="col-span-2 mb-4 text-lg font-semibold text-gray-800 text-center">Widgets</h3>

      <Widget name="Text Field" icon={CiText} />
      <Widget name="Button" icon={RxButton} />
      <Widget name="Image" icon={CiImageOn} />
      <Widget name="Text Area" icon={BsTextareaResize} />
      <Widget name="Divider" icon={MdOutlineHorizontalRule} />
      <Widget name="Spacebar" icon={MdSpaceBar} />
      <Widget name="Social Buttons" icon={IoShareSocialOutline} />
      <Widget name="Social Buttons" icon={IoShareSocialOutline} />
      <Widget name="Social Buttons" icon={IoShareSocialOutline} />
      <Widget name="Social Buttons" icon={IoShareSocialOutline} />
      <Widget name="Social Buttons" icon={IoShareSocialOutline} />
      <Widget name="Social Buttons" icon={IoShareSocialOutline} />
      <Widget name="Social Buttons" icon={IoShareSocialOutline} />
      <Widget name="Social Buttons" icon={IoShareSocialOutline} />
    </div>
  );
};

export default Sidebar;
