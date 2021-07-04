import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TableTest from './screen/TableTest';
import Home from './screen/Home';
import Profile from './screen/Profile';

import Login from './screen/Login';



// import rootReducer from './components/reducers'
//store
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native';

import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme
} from 'react-native-paper'

import { Table, TableWrapper, Row } from 'react-native-table-component';
import MyDrawer from './routes/MyDrawer';
import MyStack from './routes/MyStack';
import MyRootStack from './routes/MyRootStack';

import { Provider } from 'react-redux';
import store from './components/store/store'
// import {useDispatch} from 'react-redux'



const App=()=> {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  // const dispatch =useDispatch()
  // useEffect(() => {
  //   dispatch({
  //     type:'DARK_TOGGLE',
  //     payload:{
  //       name:'osama'
  //     }
  //   })
    
  // }, [dispatch])
  const toggleTheme = () => {
    // setIsDarkTheme(!isDarkTheme)
    return 'osama'
  }
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <MyRootStack />
          {/* <MyDrawer /> */}
          {/* <Login/> */}
          {/* <MyStack/> */}
          {/* <TableTest/> */}
        </NavigationContainer>
      </PaperProvider>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
});

export default App;