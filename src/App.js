import React, { useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import Header from './header';
import Footer  from './footer';
import CreateNote  from './Note';
import CreateArea from "./CreateArea";
function App(){
const [notes,setnotes]=useState([])
function addnote(note){
  setnotes(prevnotes=>{
    return [...prevnotes,note]
    
  })
}
function deletenote(id){
setnotes(prevnotes=>{
  return prevnotes.filter((noteitem,index)=>{
    return index!=id
  })
})
}
return (<div><Header />
<CreateArea onAdd={addnote}/>
{notes.map((noteitem,index)=>{
  {
    return <CreateNote key={index} id={index} title={noteitem.title} content={noteitem.content} ondelete={deletenote} />
  }
})}
<Footer />

</div>
);
}
export default App