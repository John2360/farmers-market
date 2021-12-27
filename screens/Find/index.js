import React from 'react';
import StoreList from '../../components/StoreList.js';

const FindScreen = ( props ) => {

    const BackButton = () => {
        return(
            
            <a onClick={() => props.navigation.goBack()} className="btn btn-neutral" >Edit Products</a>
        )
    }
    
    return (
        // put section for full screen
        <section className="slice slice-lg" key="test">
            <StoreList user={props.route.params.user} shoppingList={props.route.params.shoppingList} BackButton={< BackButton />} />
      </section>
      );
}

export default FindScreen;