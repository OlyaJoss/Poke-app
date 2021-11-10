import React from "react";
import { Link } from "react-router-dom";
import './PokemonPage.css'

export default () => {
    return(
        <div>
<div className='pokemon-item-wrapper'>
    <div className='picture-wrapper'>
        <img></img>
    </div>
    <div className='description-wrapper'>
        <h1>Name</h1>
        <h2>Description header</h2>
            <ul className='description-list'>
                <li><p><span></span></p></li>
                <li><p><span></span></p></li>
                <li><p><span></span></p></li>
                <li><p><span></span></p></li>
                <li><p><span></span></p></li>
            </ul>
    </div>
</div>
<Link to='/main'></Link>
</div>
    );
}