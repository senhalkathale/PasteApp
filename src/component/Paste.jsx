import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
// this component give list of all pastes 
// for that we have to fetch the all data 

const Paste = () => {

// now for searching we are taking whole dara for tha useSelector hook is used 
// state.slice_name.value_from_initial
//paset=slice name, pastes = value
const pastes = useSelector((state) => state.paste.pastes);

const [searchTerm , setSearchTerm] = useState('');


// console.log(pastes);
const dispatch = useDispatch();

const filteredData = pastes.filter(
    (paste ) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
);
function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));

}

    return (
        <div>
           <input 
           className="p-2 rounded-2xl min-w-[600px] mt-8"
           type="search"
           placeholder="Enter to search"
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)} 
           />

           <div className="flex flex-col gap-5" >
            {
                filteredData.length > 0 && filteredData.map(
                    (paste) => {
                        return(
                            <div className="border " key={paste?._id}>
                                <div>
                                {paste.title}
                                </div>
                                <div>
                                {paste.content}
                                </div>
                                <div>
                                <button>
                                <a href={`/?pasteId=${paste?._id}`}>
                                    
                                    edit
                                    </a>
                                </button>
                                <button>
                                    <a href={`/pastes/${paste?._id}`}>
                                    View
                                    </a>
                                </button>
                                <button
                                 onClick={
                                    () => {navigator.clipboard.writeText(paste?.content) 
                                        toast.success("copy successfull")
                                 }}>
                                    copy
                                </button>
                                {/* home work */}
                                <button>
                                    share
                                </button>
                                <button 
                                onClick={() => handleDelete(paste?._id)}>

                                delete
                                </button>
                                </div>
                                <div>{paste.cratedAt}</div>
                            </div>
                        )
                    }
                )
            }
helll
           </div>
        </div>
    )

}

export default Paste;