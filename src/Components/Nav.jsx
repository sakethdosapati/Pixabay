import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Nav(){
    return(
        <BrowserRouter>
        
           <nav style={{"display":"flex","border":"2px solid",justifyContent:"space-around"}}>
           <div>
            <Link to="/" style={{marginTop:"20px",fontSize:"25px",textDecoration:"none",marginLeft:"-80px"}}>
                 Find Your Search
            </Link>
            </div>
            <div>
            <ul style={{display:"flex", gap:"30px"}}>
                <li>Home</li>
                <li>Login</li>
            </ul>
            </div>
           </nav>
        </BrowserRouter>
    )
}
export default Nav