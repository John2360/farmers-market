import React, { useState, useEffect } from "react";

function getFireStoreProducts(isLoadedBar, setIsLoadedBar) {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://us-central1-react-plane.cloudfunctions.net/api/products")
            .then(res => res.json())
            .then(
            (result) => {
                setIsLoadedBar(true);
                setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoadedBar(true);
                setError(error);
            }
            )
    }, [])

    return items;
};

export default getFireStoreProducts;