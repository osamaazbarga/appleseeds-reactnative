import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Ant from 'react-native-vector-icons/AntDesign';

import {useSelector,useDispatch} from 'react-redux'
import { darkMode, login } from '../components/store/userAction';

const DrawerContent = (props) => {
    const dispatch =useDispatch()
    // const dark = useSelector(state => state.state)
    const paperTheme = useTheme();
    const ff=()=>{
        console.log(dispatch(darkMode()))
        
    }
    useEffect(() => {
        ff()
    }, [dispatch])
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }
    
    return (

        <View style={{ flex: 1 }}>
            
            <View style={{ width: '100%', height: '30%', backgroundColor: '#4A90E2', justifyContent: 'center', alignItems: 'center', padding: '5%', position: 'relative' }}>
                <Image
                    style={{ width: 350, height: 200 }}
                    source={require('../images/bg_logo.png')}
                // size={50}

                // size={10}
                />

                <Button title="osamaaa" onPress={() => console.log(props)} />
            </View>

            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>

                        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                            <Avatar.Image
                                // source={{
                                //     uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                // }}
                                source={require('../images/profile.png')}
                                size={50}
                            />
                            <Text style={{ fontSize: 20, fontWeight: '100', marginLeft: 15, marginTop: 13 }}>USerNAME</Text>
                        </View>

                        {/* <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph,styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>

                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph,styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                        </View> */}


                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            {...props}
                            icon={({ color, size }) => (
                                <Icon name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => { props.navigation.navigate('Home') }}
                            label="Home"
                        />
                        <Button title="osamaaa" onPress={() => props.navigation.navigate('Profile')} />
                        <Text>osama</Text>
                        <Button title="osamaaa" onPress={() => console.log('osama')} />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ant name="book"
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => { props.navigation.navigate('Courses') }}
                            label="Courses"
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ant name="setting"
                                    color={color}
                                    size={size}
                                    onPress={() => { }}
                                />
                            )}
                            label="Settings"
                            onPress={() => { props.navigation.navigate('Settings') }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="preference">
                        <TouchableRipple onPress={() => {  }}>
                            <View style={styles.preference}>
                                <Text>
                                    Dark Theme
                                </Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                </View>

                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app"
                            color={color}
                            size={size}
                            onPress={() => { }}
                        />
                    )}
                    label="SignOut"
                />
            </Drawer.Section>


        </View>

    )

    // return (
    //     <View style={{flex:1}}>
    //         {/* <DrawerContentScrollView > */}
    //             <View style={styles.drawerContent}>
    //                 <View style={styles.userInfoSection}>
    //                     <View style={{flexDirection:'row',marginTop: 15}}>
    //                         <Avatar.Image 
    //                             source={{
    //                                 uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
    //                             }}
    //                             size={50}
    //                         />
    //                         <View style={{marginLeft:15, flexDirection:'column'}}>
    //                             <Title style={styles.title}>John Doe</Title>
    //                             <Caption style={styles.caption}>@j_doe</Caption>
    //                         </View>
    //                     </View>

    //                     <View style={styles.row}>
    //                         <View style={styles.section}>
    //                             <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
    //                             <Caption style={styles.caption}>Following</Caption>
    //                         </View>
    //                         <View style={styles.section}>
    //                             <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
    //                             <Caption style={styles.caption}>Followers</Caption>
    //                         </View>
    //                     </View>
    //                 </View>

    //                 {/* <Drawer.Section style={styles.drawerSection}>
    //                     <DrawerItem 
    //                         icon={({color, size}) => (
    //                             <Icon 
    //                             name="home-outline" 
    //                             color={color}
    //                             size={size}
    //                             />
    //                         )}
    //                         label="Home"
    //                         onPress={() => {props.navigation.navigate('Home')}}
    //                     />
    //                     <DrawerItem 
    //                         icon={({color, size}) => (
    //                             <Icon 
    //                             name="account-outline" 
    //                             color={color}
    //                             size={size}
    //                             />
    //                         )}
    //                         label="Profile"
    //                         onPress={() => {props.navigation.navigate('Profile')}}
    //                     />
    //                     <DrawerItem 
    //                         icon={({color, size}) => (
    //                             <Icon 
    //                             name="bookmark-outline" 
    //                             color={color}
    //                             size={size}
    //                             />
    //                         )}
    //                         label="Bookmarks"
    //                         onPress={() => {props.navigation.navigate('BookmarkScreen')}}
    //                     />
    //                     <DrawerItem 
    //                         icon={({color, size}) => (
    //                             <Icon 
    //                             name="settings-outline" 
    //                             color={color}
    //                             size={size}
    //                             />
    //                         )}
    //                         label="Settings"
    //                         onPress={() => {props.navigation.navigate('SettingsScreen')}}
    //                     />
    //                     <DrawerItem 
    //                         icon={({color, size}) => (
    //                             <Icon 
    //                             name="account-check-outline" 
    //                             color={color}
    //                             size={size}
    //                             />
    //                         )}
    //                         label="Support"
    //                         onPress={() => {props.navigation.navigate('SupportScreen')}}
    //                     />
    //                 </Drawer.Section> */}
    //                 {/* <Drawer.Section title="Preferences">
    //                     <TouchableRipple onPress={() => {toggleTheme()}}>
    //                         <View style={styles.preference}>
    //                             <Text>Dark Theme</Text>
    //                             <View pointerEvents="none">
    //                                 <Switch value={paperTheme.dark}/>
    //                             </View>
    //                         </View>
    //                     </TouchableRipple>
    //                 </Drawer.Section> */}
    //             </View>
    //         {/* </DrawerContentScrollView> */}
    //         {/* <Drawer.Section style={styles.bottomDrawerSection}>
    //             <DrawerItem 
    //                 icon={({color, size}) => (
    //                     <Icon 
    //                     name="exit-to-app" 
    //                     color={color}
    //                     size={size}
    //                     />
    //                 )}
    //                 label="Sign Out"
    //                 onPress={() => {signOut()}}
    //             />
    //         </Drawer.Section> */}
    //     </View>
    // )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        position: 'relative',
        top: -15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderStyle: 'solid'

    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});


export default DrawerContent
