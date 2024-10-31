import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
    const [title,setTitle] = useState('');
    const [value,setVale] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    

    const allPastes = useSelector((state) => state.paste.pastes);


    const dispatch = useDispatch();
    function createPaste() {
        const paste ={
            title : title,
            content : value,
            _id: pasteId || Date.now().toString(36),
            cratedAt:new Date().toISOString(),

        }

        if(pasteId){
            //update
            dispatch(updateToPastes(paste));
        }else{
            //crate\
            dispatch(addToPastes(paste));
        }
        //after creattion and undation
        setTitle('');
        setVale('');
        setSearchParams({});

        
    } 
    useEffect(() => {
        if(pasteId){
            const paste = allPastes.find((p) => p._id === pasteId     )

            setTitle(paste.title);
            setVale(paste.content)
        }

    },[pasteId])
    return (
        <>
        <div className="flex flex-row gap-7 place-content-between">
            {/* <h1>this is Home</h1> */}
            <input 
            className="rounded-2xl p-2 mt-2 w-[60%] pl-5"
            type="text" 
            placeholder="Enter title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
            <button
            className="rounded-2xl p-2 mt-2"
            onClick={createPaste}
            >{
            pasteId ? "Update My Paset" : "Create my pASETE"
            }</button>
        </div>
        <div className="mt-6">
            <textarea name="my" id="my" value={value} 
            placeholder="Enter content here"
            onChange={(e) => setVale(e.target.value)}
            rows={20}
            className="rounded-2xl mt-4 min-w-[500px] p-4"
            
            ></textarea>
        </div>
        </>
    )

}

export default Home;