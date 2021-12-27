import React, { useState, useEffect } from "react";

function getView(uuid, isLoaded, setIsLoaded, isFocused) {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setIsLoaded(false);
 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ uuid: uuid })
        };

        fetch("https://us-central1-react-plane.cloudfunctions.net/api/getviews", requestOptions)
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
    }, [isFocused])

    return items;

};

export default getView;