import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeStack, SettingsStack, ProfileStack } from './MyStack'
import DrawerContent from '../screen/DrawerContent';
import { View, Text } from 'react-native'


// const customDrawerComponent=(props)=>{
//     <SafeAreaView style={{flex:1}}>
//         <View style={{height:150,backgroundColor:white,alignItems:"center",justifyContent:'center'}}>
//             <Image source='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/2048px-Volkswagen_logo_2019.svg.png' style={{height:120,width:120,borderRadius:60}}/>
//         </View>

//     </SafeAreaView>
// }

const MyDrawer = ({toggleTheme}) => {
    const Drawer = createDrawerNavigator()
    return (

        
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen name="Profile" component={ProfileStack} />
                <Drawer.Screen name="Settings" component={SettingsStack} />
                {/* <Drawer.Screen name="home" component={Profile}/> */}

            </Drawer.Navigator>

    )
}

export default MyDrawer
