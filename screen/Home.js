import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native'
import {global} from '../styles/global'

const Home = ({navigation}) => {
    const goToProfile=()=>{
        console.log("osama");
        navigation.navigate("Profile")
    }
    return (
    //     <NavigationContainer>
    //         <MyDrawer/>
    //   </NavigationContainer>
    <View style={global.container}>
        <Text>Home</Text>
        <Button title="Go to profile" onPress={()=>console.log('osama')}/>
    </View>
    )
}

export default Home
