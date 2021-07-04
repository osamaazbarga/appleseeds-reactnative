import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screen/Login'
import {useDispatch} from 'react-redux'

const RootStack=createStackNavigator()

const MyRootStack = ({Navigation}) => {
    return (
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name="login" component={Login}/>
        </RootStack.Navigator>
    )
}

export default MyRootStack
