import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './PokemonPage.css'

const PokemonPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1")
            .then(res => res.json())
            .then(newData => {
                setData(newData)
                console.log(data);
            })
    });

    return (

        <div>
            <div className='pokemon-item-wrapper'>
                <div className='picture-wrapper'>
                    <img src={data.sprites && data.sprites.other["official-artwork"].front_default} alt={data.name} />
                </div>
                <div className='description-wrapper'>
                    <h1>{data.name}</h1>
                    <h2>Description header</h2>
                    <ul className='description-list'>
                        <li><p>HP:<span>{data.stats && data.stats[0].base_stat}</span></p></li>
                        {/* <li><p>attack:<span>{data.stats && data.stats[1].stat}</span></p></li> */}
                        <li>deffence:<p><span></span></p></li>
                        <li>special attack:<p><span>{data.stats[3].stat}</span></p></li>
                        <li>special deffence<p><span></span></p></li>
                        <li>speed<p><span></span></p></li>
                    </ul>
                </div>
            </div>
            <Link to='/main'></Link>
        </div>
    );
}

export default PokemonPage