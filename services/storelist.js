import React, { useState, useEffect } from "react";

function getListOfStores(shoppingList, isLoaded, setIsLoaded, setIsSaved) {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setIsLoaded(false);
        setIsSaved(false);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ shoppingList: shoppingList })
        };

        // https://us-central1-react-plane.cloudfunctions.net/api/stores
        fetch("http://localhost:5001/react-plane/us-central1/api/stores", requestOptions)
            .then(res => res.json())
            .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
    }, [shoppingList])

    return items;

};

export default getListOfStores;