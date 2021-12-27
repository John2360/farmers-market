import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { signInWithGoogle } from '../../services/firebase.js';
import googlelogo from '../../assets/img/logos/google.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SignInScreen = () => {
  return (
    <section>
    <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center min-vh-100">
            <div className="col-md-6 col-lg-5 col-xl-5 py-6 py-md-0">
                <div className="card shadow zindex-100 mb-0">
                    <div className="card-body px-md-5 py-5">
                        <div className="mb-5">
                            <h6 className="h3">Sign In</h6>
                            <p className="text-muted mb-0">Login or create an account by authenticating with Google.</p>
                        </div>
                        <span className="clearfix"></span>
                        <form>
                            <div className="form-group">
                                <img  onClick={signInWithGoogle} src={googlelogo} height="60px" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default SignInScreen;