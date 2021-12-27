import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import bg from '../../assets/img/svg/illustrations/bg.svg';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LandingScreen = ({ navigation }) => {
  return (
      <section className="slice py-7">
        <div className="container">
            <div className="row row-grid align-items-center">
                <div className="col-12 col-md-5 col-lg-6 order-md-2 text-center">
                    <figure className="w-100">
                        <img alt="Image placeholder" src={ bg } className="img-fluid mw-md-120" />
                    </figure>
                </div>
                <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
                    <h1 className="display-4 text-center text-md-left mb-3">
                        Let's get something <strong className="text-primary">yummy to eat.</strong>
                    </h1>
                    <p className="lead text-center text-md-left text-muted">
                        We find you the food, produce, and products you want to eat through local farmer's markets.
                    </p>
                    <div className="text-center text-md-left mt-5">
                        <a onClick={() => navigation.navigate('Sign In')} className="btn btn-primary btn-icon" target="_blank">
                            <span className="btn-inner--text">Get Started</span>
                            <span className="btn-inner--icon"><i data-feather="chevron-right"></i></span>
                        </a>
                        {/* <a href="https://webpixels.io/illustrations" className="btn btn-neutral btn-icon d-none d-lg-inline-block" target="_blank">See Illustrations</a> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default LandingScreen;