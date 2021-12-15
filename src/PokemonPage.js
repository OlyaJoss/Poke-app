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
                    <img src={data.sprites && data.sprites.other["official-artwork"].front_default} alt={data.name} width='312px' height='312px'/>
                </div>
                <div className='description-wrapper'>
                    <h1 className='pokemon-name'>{data.name}</h1>
                    <h2 className='stats'>stats</h2>
                    <ul className='description-list'>
                        <li><p className='stats-item'>hp: <span className='stats-item-number'>{data.stats[0].base_stat}</span></p></li>
                        <li><p className='stats-item'>attack: <span className='stats-item-number'>{data.stats[1].base_stat}</span></p></li>
                        <li><p className='stats-item'>deffence: <span className='stats-item-number'>{data.stats[2].base_stat}</span></p></li>
                        <li><p className='stats-item'>special attack: <span className='stats-item-number'>{data.stats[3].base_stat}</span></p></li>
                        <li><p className='stats-item'>special deffence: <span className='stats-item-number'>{data.stats[4].base_stat}</span></p></li>
                        <li><p className='stats-item'>speed: <span className='stats-item-number'>{data.stats[5].base_stat}</span></p></li>
                    </ul>
                </div>
            </div>
            <Link to='/' className='link-back'> &lt; BACK </Link>
        </div>
    );
}

export default PokemonPage