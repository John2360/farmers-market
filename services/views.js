import React, { useState, useEffect } from "react";

function postView(uuid, storeList, setIsSaved) {
    // const [error, setError] = useState(null);
    // const [items, setItems] = useState([]);


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({uuid: uuid, storeList: storeList })
    };

    //https://us-central1-react-plane.cloudfunctions.net/api/myviews
    fetch("http://localhost:5001/react-plane/us-central1/api/myviews", requestOptions)
        .then(res => res.json())
        .then(
        (result) => {
            // setIsSaved(true);
            // setItems(result);
            setIsSaved(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            // setIsSaved(true);
            // setError(error);
        }
        )

};

export default postView;