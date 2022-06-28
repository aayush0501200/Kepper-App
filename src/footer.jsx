import React from "react";
import ReactDOM  from "react-dom/client";

function Footer() {
    let v= new Date().getFullYear()
    return (
    <footer><p>Copyright © {v}</p></footer>)

    
}
export default Footer