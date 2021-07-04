import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screen/Profile';
import Home from '../screen/Home';
import Setting from '../screen/Setting';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-navigation';
import { View, Text, Image } from 'react-native'



// const Stack = createStackNavigator();
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#4a90e2',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'left'
    },
}


// const customDrawerComponent=(props)=>{
//     <SafeAreaView style={{flex:1}}>
//         <View style={{height:150,backgroundColor:white,alignItems:"center",justifyContent:'center'}}>
//             <Image source='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/2048px-Volkswagen_logo_2019.svg.png' style={{height:120,width:120,borderRadius:60}}/>
//         </View>

//     </SafeAreaView>
// }
const Stack = createStackNavigator()

// const profileStack = () => {
//     return (
//         <Stack.Navigator headerStyle={{backgroundColor:'#666'}} navigationOptions={'home'} screenOptions={screenOptionStyle}>
//             <Stack.Screen
//                 name="Profile"
//                 component={Profile}
//                 options={({route})=>({
//                     title:route.params.name
//                 })}
//                 hideNavBar={true}

//                 // options={({ route }) => ({
//                 //     headerLeft: () => (
//                 //         <TouchableOpacity
//                 //             style={{ marginLeft: 20 }}
//                 //             onPress={() => navigation.toggleDrawer()}
//                 //         >
//                 //             <Icon name="indent" size={25} />

//                 //         </TouchableOpacity>
//                 //     )
//                 // })}


//             />
//         </Stack.Navigator>
//     )
// }

// const HomeStack = () => {
//     return (
//         <Stack.Navigator screenOptions={screenOptionStyle}>
//             <Stack.Screen
//                 name="Home"
//                 component={Home}
//                 options={({route})=>({
//                     title:route.params.name
//                 })}


//             />
//         </Stack.Navigator>
//     )
// }

// const settingStack = () => {
//     return (
//         <Stack.Navigator screenOptions={screenOptionStyle}>
//             <Stack.Screen
//                 name="setting"
//                 component={Setting}
//                 options={({route})=>({
//                     title:route.params.name
//                 })}


//             />
//         </Stack.Navigator>
//     )
// }


// export default { HomeStack, profileStack, settingStack }
const ProfileStack=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    
                    headerRight:()=>(
                        <Icon.Button 
                            name="ios-menu"
                            size={25}
                            backgroundColor="#4a90e2" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
                    )
                }}
            />


        </Stack.Navigator>
 )
}

const SettingsStack=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            
            <Stack.Screen
                name="Settings"
                component={Setting}
                options={{
                    headerRight:()=>(
                        <Icon.Button 
                            name="ios-menu"
                            size={25}
                            backgroundColor="#4a90e2" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
                    )
                }}
            />


        </Stack.Navigator>
    )
}
const HomeStack = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerRight:()=>(
                        <Icon.Button 
                            name="ios-menu"
                            size={25}
                            backgroundColor="#4a90e2" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
                        
                    )
                }}
            />

        </Stack.Navigator>
    )
}
export {HomeStack,SettingsStack,ProfileStack}