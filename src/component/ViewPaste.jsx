import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";


const ViewPaste = () => {
    const [title,setTitle] = useState('');
    const {id} = useParams();
    const allPastes = useSelector((state) => state.paste.pastes);

    const paste = allPastes.filter((p) => p._id=== id)[0];

    return (
        <>
        <div className="flex flex-row gap-7 place-content-between">
            {/* <h1>this is Home</h1> */}
            <input 
            className="rounded-2xl p-2 mt-2 w-[60%] pl-5"
            type="text" 
            placeholder="Enter title here"
            value={paste.title}
            onChange={(e) => setTitle(e.target.value)}/>
            
        </div>
        <div className="mt-6">
            <textarea name="my" id="my" value={paste.content} 
            placeholder="Enter content here"
            onChange={(e) => setVale(e.target.value)}
            rows={20}
            disabled
            className="rounded-2xl mt-4 min-w-[500px] p-4"
            
            ></textarea>
        </div>
        </>
    )

}

export default ViewPaste;