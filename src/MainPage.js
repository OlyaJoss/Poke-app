import React, { useState, useEffect } from "react";
import ItemsGrid from "./ItemsGrid"
import Input from "./Input"



const MainPage = () => {
    const [pokeData, setPokeData] = useState(null);
    const [query, setQuery] = useState('');
    const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=30');
    const [nextUrl, setNextUrl] = useState(null);
    const [previousUrl, setPreviousUrl] = useState(null);


    useEffect(() => {
        fetch(currentUrl)
            .then(res => res.json())
            .then(data => {
                setPokeData(data.results);
                setNextUrl(data.next);
                setPreviousUrl(data.previous);
            });
    }, [currentUrl]);

    const goToNextPage = () => {
        setCurrentUrl(nextUrl)
    }

    const goToPreviousPage = () => {
        setCurrentUrl(previousUrl)
    }

    const onSearchChange = (newQuery) => {
        setQuery(newQuery);
    }

    const search = (items, query) => {
        if (query === '') {
            return items
        }
        return items.filter((el) => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
    }

    if (pokeData === null) {
        return null;
    };
    const visibleItems = search(pokeData, query);
    return (
        <div>
            <Input onSearchChange={onSearchChange} />
            <ItemsGrid itemsData={visibleItems} />
            <p>
                {previousUrl && <button onClick={goToPreviousPage}> &lt; PREVIOUS </button>}
                {nextUrl && <button onClick={goToNextPage}> NEXT &gt; </button>}
            </p>
        </div>
    )
}
export default MainPage