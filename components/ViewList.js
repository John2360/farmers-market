import React, { useState, useEffect, useRef, useReducer } from 'react';
import { useIsFocused } from '@react-navigation/native';
import bg2 from '../assets/img/svg/illustrations/bg2.svg';

import getView from '../services/getviews';
import MyLoader from './MyLoader';
import StoreListItem from './StoreListItem';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from 'jquery';


const ListItem = ((props) =>{
    const new_date = new Date(props.data.timestamp);
    return(
        <Accordion.Item eventKey={props.index} key={props.index}>
            <Accordion.Header>{props.data.title} <span className='text-muted'>&nbsp;	({new_date.toDateString()})</span></Accordion.Header>
            <Accordion.Body>
            <StoreListItem stores={props.data.stores}/>
            </Accordion.Body>
        </Accordion.Item>
    );
})

const ViewList = ({ uuid }) => {

    const [isLoaded, setIsLoaded] = useState(false);

    const isFocused = useIsFocused();
    const myViewList = getView(uuid, isLoaded, setIsLoaded, isFocused);

    return (
        <div>{isLoaded ? (<div className='container' style={{paddingTop: "50px"}}>
            <h5 className="h3">My Saved Lists</h5>
         <Accordion>
             { (myViewList.length > 0) ? (myViewList.map((data, index, array) => {
                 return(<ListItem key={index} data={data} index={index}/>);
             })) : (
                 <div className='row'>
                     <div className='col-lg-7'>
                        <img alt="Image placeholder" src={bg2} className="img-fluid" height="200px;" />
                     </div>
                     <div className='col-lg-5'>
                        <span className='vert-center'>
                            <h2>No saved lists :(</h2>
                            <p>Save products to your lists under the locator tool</p>
                        </span>
                     </div>
                 </div>
             )}
        </Accordion>
        </div>) : (<center><MyLoader/></center>)}</div>
    )
    
};

export default ViewList;