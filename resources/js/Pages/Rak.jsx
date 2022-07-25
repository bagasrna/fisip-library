import Navbar from "@/Components/Navbar";
import React from "react";

export default function Rak({name, categories}){
    console.log(categories)
    return(
        <div>
            <Navbar userName={name}/>
        </div>
    );
}