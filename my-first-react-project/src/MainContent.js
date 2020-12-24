import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function MainContent() {
    useEffect(() => {
        fetchItems()
    }, [])

    const [final, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
        const items = await data.json();
        const final = items.data;
        setItems(final);
    }

    return (
        <div>
            {
                final.map((item) => (
                    <h1 key={item.itemId}>
                        <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
                    </h1>
                ))
            }
        </div>
    )
}

export default MainContent;