import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ItemsGrid.css"

export default function ItemsGrid({ itemsData }) {
    const extractId = (string) => {
        const idRegExp = /([0-9]*)\/$/;
        return string.match(idRegExp)[1];
    }

    return (
        
        <div className='grid-item-wrapper'>
            {(itemsData && itemsData.map(({ name, url }) => {
                const id = extractId(url)
                return (
                    <div className='item-wrapper' key={id}>
                         <Link to={`/pokemon/${id}`}>
                        <img className='picture'
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                            alt={name}></img>
                        <p className='name'>{name}</p>
                        </Link>
                    </div>
                )
            }
            ))}
            <p>
            <Link to='/'> &lt; PREVIOUS </Link>
            <Link to='/'> NEXT &gt; </Link>
            </p>
        </div>
    )
}


// export default class ItemsGrid extends Component {
//      _extractId(string) {
//         const idRegExp = /([0-9]*)\/$/;
//         return string.match(idRegExp)[1];
//     }

//     render() {
//         console.log(this.props.itemsData)
//         return (
//             <div className='grid-item-wrapper'>
//                 {(this.props.itemsData && this.props.itemsData.map(({ name, url }) =>

//                     <div className='item-wrapper' key={url}>
//                         <img className='picture'
//                             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this._extractId(url)}.png`}
//                             alt={name}></img>
//                         <p className='name'>{name}</p>
//                     </div>

//                 ))}
//             </div>)
//     }
// }

