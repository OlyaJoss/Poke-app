import React, { Component } from "react";
import ItemsGrid from "./ItemsGrid"
import Input from "./Input"



export default class MainPage extends Component {
    state = {
        pokeData: null,
    }

    getData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
            .then(res => res.json())
            .then(data => {
                this.setState({ pokeData: data.results })
            });
    };
    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <div>
                <Input />
                <ItemsGrid itemsData={this.state.pokeData} />
            </div>
        )
    }
}