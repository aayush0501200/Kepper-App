import React from "react";

function CreateNote(props) {
    function handelchange(){
        props.ondelete(props.id)
    }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handelchange}>DELETE</button>
    </div>
  );
}

export default CreateNote;
