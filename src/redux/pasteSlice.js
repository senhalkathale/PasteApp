import { createSlice } from '@reduxjs/toolkit';
import  toast, {Toaster } from 'react-hot-toast'


const initialState= {
    pastes: localStorage.getItem("pastes") ?   JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    
    reducers : {
        
        addToPastes:   (state,action) => {
            const paste = action.payload;

            // add a check for paste already paste 
            state.pastes.push(paste)  ;
            //this will give object text there for 2nd line is ans
            // localStorage.setItem("pasets",state.pastes);
            localStorage.setItem("pastes",JSON.stringify(state.pastes));

            toast.success("paste created succesflly")
                     
        },
        updateToPastes:  (state,action) => {
            
            const paste = action.payload;
            console.log(paste)
             const index = state.pastes.findIndex((item) => item._id === paste._id);
             if(index>= 0 ){
                state.pastes[index] = paste;

                localStorage.setItem("pastes",JSON.stringify(state.pastes));
                toast.success("paste updated  succesflly")
             }




           
        },
        resetAllastes:  (state,action) => {
            state.pastes =[];
            //here pastes is  key 
            localStorage.removeItem("pastes")
           
        },
        removeFromPastes:  (state,action) => {

            const pasteId = action.payload;
            console.log(pasteId);
            const index = state.pastes.findIndex((Item) => Item._id === pasteId);
            if(index >= 0 ){
               state.pastes.splice(index,1);

               localStorage.setItem("pastes",JSON.stringify(state.pastes));
               toast.success("paste deleted   succesflly")
            }



           
        },
       
    }
})
export const {addToPastes, updateToPastes, resetAllastes,removeFromPastes} = pasteSlice.actions
export default pasteSlice.reducer