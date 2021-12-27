import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import bg1 from '../../assets/img/svg/illustrations/bg1.svg';

import ShoppingList from '../../components/ShoppingList.js';
import { LoadScript } from '@react-google-maps/api';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = ({ user }) => {
  return (
    <section className="slice slice-lg">
        <div className="container">
            <div className="py-6">
                <div className="row row-grid justify-content-between">
                    <div className="col-lg-5 order-lg-2">
                        <h5 className="h3">Hi {user.displayName }!</h5>
                        <p className="lead my-4">
                            What can we find for you today?
                        </p>
                        
                        <ShoppingList user={user} />

                    </div>
                    <div className="col-lg-6 order-lg-1">
                    <img alt="Image placeholder" src={bg1} className="img-fluid" height="200px;" />
                    </div>
                </div>
            </div>
        </div>
        <LoadScript googleMapsApiKey='AIzaSyCIaNL3yEiaxMhMhlCjPU162jdQ2MKiBro'/>
    </section>
  );
};

export default HomeScreen;