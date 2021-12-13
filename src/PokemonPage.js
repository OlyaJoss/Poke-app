import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './PokemonPage.css'

const PokemonPage = () => {
    const {pokeId} = useParams();
    const [data, setData] = useState(null );
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then(res => res.json())
            .then(newData => {
                setData(newData)
                console.log(data);
            })
            .catch((err) => console.log(err))
    }, []);

    if (data === null) {
        return (<p>Loading...</p>)
    }

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
                        <li><p>HP:<span>{data.stats[0].base_stat}</span></p></li>
                        <li><p>attack:<span>{data.stats[1].base_stat}</span></p></li>
                        <li><p>deffence:<span>{data.stats[2].base_stat}</span></p></li>
                        <li><p>special attack:<span>{data.stats[3].base_stat}</span></p></li>
                        <li><p>special deffence:<span>{data.stats[4].base_stat}</span></p></li>
                        <li><p>speed:<span>{data.stats[5].base_stat}</span></p></li>
                    </ul>
                </div>
            </div>
            <Link to='/main'></Link>
        </div>
    );
}

export default PokemonPage