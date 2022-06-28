import React, { useState } from "react";

function CreateArea(props) {
    const [note,set_note]=useState({

        title:"",
        content:""
    })
    function handelChange(event){
        const {name,value}=event.target
        console.log(name,value)
        set_note(prevNote=>{
               return{ ...prevNote,
                [name]:value};

        })
    }
    function submitnote(event){
        props.onAdd(note)
        event.preventDefault()
        set_note(prevNote=>{
               return{
        title:"",
        content:""};

        })

    }
  return (
    <div>
      <form>
        <input name="title" onChange={handelChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handelChange} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
