import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MyLoader from './MyLoader.js';
import Select from 'react-select';

import getFireStoreProducts from '../services/shoppinglist.js';

const ShoppingList = ( props ) => {

    const [isLoadedBar, setIsLoadedBar] = useState(false);
    const products = getFireStoreProducts(isLoadedBar, setIsLoadedBar);

    const styles = {
        container: base => ({
          ...base,
          flex: 1
        }),
      };

    const [selectedOption, setSelectedOption] = useState(null);
    const [shoppingItems, setShoppingItems] = useState([]);

    const updateShoppingList = shoppingItems.map((item)=>{
            return (
                <div key={item}>{isLoadedBar ? (<li className="py-2" key={ item }>
                <div className="d-flex align-items-center">
                    <div>
                        <div className="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3">
                            <i className="fas fa-shopping-bag"></i>
                        </div>
                    </div>
                    <div>
                        <span className="h6 mb-0 mr-3">{item}</span>
                    </div>
                    <div style={{position: "absolute", right: "20px"}} onClick={() => {
                        const newList = shoppingItems.filter((i) => i !== item);
                        setShoppingItems(newList);
                        }}>
                        <i className="fas fa-ban"></i>
                    </div>
                </div>
            </li>) : <MyLoader/> }</div>
            );
    });

    const selectChange = (new_vlaue) => {
        const value = new_vlaue;
        setSelectedOption(value);
        const label = value['label'];
        if (shoppingItems.includes(label) === false) {
            setShoppingItems(shoppingItems.concat( label ));
        }
    };

    const showContinue = () => {
        const navigation = useNavigation();

        if (Array.isArray(shoppingItems) && shoppingItems.length) {
            return (
                <div style={{paddingTop: "2rem"}}>
                    <button type="button" onClick={() => {
                        navigation.navigate('Locator', {
                            shoppingList: shoppingItems,
                            user: props.user
                        });
                        }
                    } className="btn btn-block btn-primary">Find</button>
                </div>
            );
        } else {
            return;
        }
    }

    return (
        <div>
            <div className="form-group">
                <div className="input-group" >
                <Select
                    defaultValue={selectedOption}
                    onChange={selectChange}
                    options={products}
                    placeholder={ "cheese" }
                    styles={styles}
                    components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
                />            
                </div>
            </div>

            <ul className="list-unstyled mb-0">
                { updateShoppingList }
            </ul>

            { showContinue() }
        </div>
    );
};

export default ShoppingList;