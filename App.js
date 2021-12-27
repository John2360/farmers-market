import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';


import { useState, useEffect } from 'react';

import firebase, { auth, signOut } from './services/firebase';

import LandingScreen from './screens/Landing';
import SignInScreen from './screens/SignIn';
import HomeScreen from './screens/Home';
import FindScreen from './screens/Find';
import ViewScreen from './screens/View';

import './assets/libs/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/quick-website.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';


import './assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js';

const RootStack = createStackNavigator();

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Sign Out" onPress={() => auth.signOut()} />
      </DrawerContentScrollView>
    );
  }

  const MyHomeScreen = props => (
    <HomeScreen {...props} user={user} />
  );
  const MyViewScreen = props => (
    <ViewScreen {...props} user={user} />
  );

  const MyLocator = props => (
    <FindScreen {...props} />
  );

  const Drawer = createDrawerNavigator();
  function Root() {
    return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}> 
        <Drawer.Screen name="Home" component={MyHomeScreen} />
        <Drawer.Screen name="My Lists" component={MyViewScreen} />
        <Drawer.Screen name="Locator" component={MyLocator} options={{ drawerItemStyle: { height: 0 }}} />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        { user ? (
          <RootStack.Screen 
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
        
        ) : (
        <>
          <RootStack.Screen 
            name="Farmer's Markets" 
            component={ LandingScreen } 
            options={{
              animationTypeForReplace: 'pop',
            }}
          />
          <RootStack.Screen 
            name="Sign In" 
            component={ SignInScreen }
          />
        </>
        ) }
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;