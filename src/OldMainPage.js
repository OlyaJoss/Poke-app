import React, { Component } from "react";
import ItemsGrid from "./ItemsGrid"
import Input from "./Input"



export default class MainPage extends Component {
    state = {
        pokeData: null,
        query: '',
    }

    getData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=9")
            .then(res => res.json())
            .then(data => {
                this.setState({ pokeData: data.results })
            });
    };
    componentDidMount() {
        this.getData()
    }

    onSearchChange = (newQuery) => {
            this.setState({query: newQuery});
    }

    search = (items, query) => {
        if(query === '') {
            return items
        }
        return items.filter((el) => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
    }

    render() {
        const { pokeData, query } = this.state;
        if (pokeData === null) {
            return null;
        };
        const visibleItems = this.search(pokeData, query);
        return (
            <div>
                <Input onSearchChange={this.onSearchChange}/>
                <ItemsGrid itemsData={visibleItems} />
            </div>
        )
    }
}