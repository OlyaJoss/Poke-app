import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ItemsGrid.css"


export default class ItemsGrid extends Component {
    render() {
        console.log(this.props.itemsData)
        return (
            <div className='grid-item-wrapper'>
            {(this.props.itemsData && this.props.itemsData.map(({ name }) =>
            
                <div className='item-wrapper'>
                    <img></img>
                    <p>{name}</p>
                </div>
           
        ))}
             </div>)
    }
}