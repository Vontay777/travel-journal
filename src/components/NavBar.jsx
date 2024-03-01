import React from "react"

export default function NavBar(props){
    return(
        <div className="navbar--container">
            <div className="middle--container">
                <img src={props.img} className="nav--image" />
            <span className="nav--p">lavonte's travel journal.</span>



         </div>
        </div> 
    )
} 