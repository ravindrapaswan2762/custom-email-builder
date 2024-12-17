import React, { useState } from "react";
import { setActiveWidgetName } from "../../redux/cardDragableSlice";
import { setActiveEditor } from "../../redux/cardToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { deleteDroppedItemById } from "../../redux/cardDragableSlice";

const Text = ({id}) => {

    const [val, setVal] = useState("Make it easy for everyone to compose emails!");

    const dispatch = useDispatch();


    const onclickHandle = (e) =>{
        e.stopPropagation()
        dispatch(setActiveWidgetName("Text"));
        dispatch(setActiveEditor("Text"));
    }
    const onChangeHandle = (e) =>{
        e.stopPropagation()
        setVal(e.target.value);
    }

    return (
        <div>
           <button
                onClick={()=>dispatch(deleteDroppedItemById(id))}
                className="absolute right-2 text-white p-1 rounded-full transition-all duration-200 z-10"
                >
                <div className="text-black mb-2 ml-2"><RxCross2 size={18} /></div>
            </button>
            
            <input onClick={onclickHandle}
            onChange={onChangeHandle}
            type="text"
            className="border p-2 rounded w-full"
            placeholder="Text Field"
            value={val}
          />
        </div>
    )
}

export default Text;