import React, { useState, useEffect, useRef, useReducer } from 'react';

import getListOfStores from '../services/storelist';
import postView from '../services/views';
import MyLoader from './MyLoader';
import StoreListItem from './StoreListItem';

const StoreList = ({ shoppingList, BackButton, user }) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [doSave, setDoSave] = useState(false);

    const stores = getListOfStores(shoppingList, isLoaded, setIsLoaded, setIsSaved);

    if (doSave){
        postView(user.uid, stores, setIsSaved);
        setDoSave(false);
    }

    

    return (
        <div>
            {isLoaded ? (<span>< StoreListItem stores={stores} /><div className='row' style={{textAlign: "right", paddingBottom: "20px", paddingRight: "20px"}}><div className='col-sm-12'> 
            {isSaved ? (<a  className="btn btn-neutral disabled" >Saved</a>) : (<a onClick={() => {setDoSave(true)}} className="btn btn-neutral"  >Save List</a>)}
            <span style={{paddingRight: "5px"}}></span> {BackButton}</div></div></span>) : ( 
            <center><MyLoader/></center>
            ) }
            </div>
    )
    
};

export default StoreList;