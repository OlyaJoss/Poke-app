import React from "react";
import { Link } from "react-router-dom";
import "./ItemsGrid.css"


export default () => {
    return (
        <div className='grid-item-wrapper'>
            <Link to='/pokemon'>
                <img></img>
                <p>Pokemon name</p>
            </Link>

        </div>
    )
}