import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ItemsGrid.css"


export default class ItemsGrid extends Component {
    render() {
        console.log(this.props.itemsData)
        return (
            (this.props.itemsData && this.props.itemsData.map(({ name }) =>
                <div className='grid-item-wrapper'>
                    <div className='item-wrapper'>
                        <img></img>
                        <p>{name}</p>
                    </div>
                </div>
            )))
    }
}