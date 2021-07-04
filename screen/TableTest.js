import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator,ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Api from '../components/Api/MainApi'
import _ from 'lodash'
import { StatusBar } from 'expo-status-bar';
// import { Table, Row, Rows } from 'react-native-table-component';

const TableTest = () => {
    const [user, setUSer] = useState(null)
    const [direction, setDirection] = useState(null)
    const [pageReload, setPageReload] = useState(0)
    const [admin, setAdmin] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const [selectedColumn, setSelectedColumn] = useState(null)
    const [columns, setColumns] = useState([
        "UserID",
        "Name",
        "Gender",
        "birthday"
    ])
    useEffect(() => {
        //login()
        getStudentTable()
    }, [])
    const mapStringFromApi = (str) => {
        const partByIndex = str.split(",")[0]
        // console.log(partByIndex);
        const tokenString = partByIndex.split(":")[1]
        const token = tokenString.split("\"")[1]
        console.log("title", token);
        return token

    }
    const getElementFromUserInfo = (userInfo, numOfPart,title) => {
        // console.log(userInfo.split(',')[numOfPart].split(":")[1]);
        // return userInfo.split(',')[numOfPart].split(":")[1].split("\"")[1]
        // console.log(userInfo.split(',')[numOfPart].split(':')[1].split("\"")[1]);
        // const element=`${userInfo.split(',')[numOfPart].split(':')[1].split("\"")[1]}`
        // const stringKey=[],stringValue=[]
        // const obj=userInfo.map((char)=>{

        // })
        // console.log(userInfo)

        // const element=userInfo.indexOf('firstname')
        var result = userInfo.substr(userInfo.indexOf(title) + title.length+2);
        // console.log(result);
        console.log("result",result.substr(0,result.indexOf(',')));
        return result.substr(0,result.indexOf(','))
        // if(numOfPart==1){
        //     return decodeURI(userInfo.split(',')[numOfPart].split(':')[1].split("\"")[1])
        // }
        // return userInfo.split(',')[numOfPart].split(":")[1].split("\"")[1]

    }

    const mapStringFromApiUsers = (str) => {//numberOfUser is the number of the student
        let newStr = []
        const getAllInfo = str.split(":").slice(1)//delete users from the str
        // console.log(getAllInfo);
        //const getThePartFromUserInfo=getAllInfo.join(":").split("{")[numberOfUser].split(",")[objectNum].split(':')[1]
        const getThePartFromUserInfo = getAllInfo.join(":").split("{")
        // console.log(getThePartFromUserInfo);
        for (let i = 1; i < getThePartFromUserInfo.length - 1; i++) {
            // console.log(getThePartFromUserInfo[i]);
            newStr.push({
                userid: getElementFromUserInfo(getThePartFromUserInfo[i], 0,'userid'),
                firstname: getElementFromUserInfo(getThePartFromUserInfo[i], 1,"firstname"),
                lastname: getElementFromUserInfo(getThePartFromUserInfo[i], 2,"lastname"),
                firstnameinarabic: getElementFromUserInfo(getThePartFromUserInfo[i], 3,"firstnameinarabic"),
                lastnameinarabic: getElementFromUserInfo(getThePartFromUserInfo[i], 4,"lastnameinarabic"),
                tznumber: getElementFromUserInfo(getThePartFromUserInfo[i], 5,"tznumber"),
                phone: getElementFromUserInfo(getThePartFromUserInfo[i], 6,"phone"),
                birthday: getElementFromUserInfo(getThePartFromUserInfo[i], 7,"birthday"),
                email: getElementFromUserInfo(getThePartFromUserInfo[i], 8,"email"),
                cityname: getElementFromUserInfo(getThePartFromUserInfo[i], 9,"cityname"),
                gendername: getElementFromUserInfo(getThePartFromUserInfo[i], 10,"gendername"),
                religionname: getElementFromUserInfo(getThePartFromUserInfo[i], 11,"religionname"),
            })


        }
        console.log(newStr);
        return newStr
        // console.log(getThePartFromUserInfo[1].split(","));
        // const obj=({firstname:1234})
        // const obj2=[obj,obj]
        // console.log(obj2);

        // const tokenString=partByIndex.split(":")[1]
        // console.log("part",tokenString);

        //  const token=tokenString.split("\"")[1]
        // console.log("title",token);
        // return token

    }

    const orginalText = (text) => {
        console.log(text);
    }
    const login = async () => {
        // fetch(http://54.93.207.96/server/datagate.php?type=login,{
        //     email:"admin@email.com",
        //     pass:1234
        //  }).then

        // let resp=await fetch('http://54.93.207.96/server/datagate.php?type=login',{
        //     method:'POST',
        //     headers: {
        //         // 'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email:"admin@email.com",
        //         pass:1234
        //       })

        // },)
        // .then((res)=>console.log(res))
        // .then((json)=>setAdmin(json.data))
        //console.log("res",resp);
        // let json = await res.json();
        // console.log(json);


        // try {
        //     const req=Api.post('datagate.php?type=login',{
        //     email:"admin@email.com",
        //     pass:1234
        // }

        // )
        // // setUSer(req.data.token)
        // } catch (error) {
        //     console.log(error);
        // }

        // Api.post('datagate.php?type=login',{
        //     email:"admin@email.com",
        //     pass:1234

        // }).then(res=>{
        //     // console.log("resssss",res);
        //     console.log("res",res.data);
        //     setAdmin(res)
        //     // console.log(JSON.parse(res.data));
        //     // setUSer(obj)
        // }).catch(error=> {
        //     // handle error
        //     console.log(error);
        //   })

        const req = await Api.post('datagate.php?type=login', {
            email: "admin@email.com",
            pass: 1234

        })
        // console.log(req.data);
        const token = mapStringFromApi(req.data)
        console.log("token", token);
        return token

        // await Api.post('datagate.php?type=login',{
        //     email:"admin@email.com",
        //     pass:1234

        // }).then(res=>console.log(res.data))
        // .then((json)=>console.log(json))
        // .catch((error)=>alert(error))



    }
    const getStudentTable = async () => {
        // const admin = await login()
        console.log("here", admin);
        // if (!admin) {
        //     console.log("here", admin);
            setAdmin(await login())
        // }

        const req = await Api.post('datagate.php?type=SearchNewUsers', {
            search: "",
            sorting: "userid",
            desc: true,
            userstatus: 1,
            page: pageReload,
            token: admin

        })

        // console.log(req.data);
        const getdata = mapStringFromApiUsers(req.data)
        console.log(getdata);
        if (!user) {
            setUSer(getdata)
        }
        else setUSer(user.concat(getdata))
        setIsLoading(false)
        // return req.data.users


        // if(req.data.error){
        //     setLoginError(req.data.error)
        // }
        // else {
        //     setLoginError("")
        //     localStorage.setItem("user",JSON.stringify(req.data))
        //     setUser(req.data)
        //     selectUser(user)
        //     // setInputs({username:})
        //     console.log(req.data);


        //     history.push("/reloadlogin")
        //     history.push(<ReloadLogin/>)



        // }
    }
    const tableHeader = () => (
        <View style={styles.tableHeader}>
            {
                columns.map((column, index) => {
                    {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.columnHeader}
                                onPress={() => sortTable(column)}>
                                <Text style={styles.columnHeaderTxt}>{column + " "}
                                    {selectedColumn === column && <MaterialCommunityIcons
                                        name={direction === "desc" ? "arrow-down-drop-circle" : "arrow-up-drop-circle"}
                                    />
                                    }
                                </Text>
                            </TouchableOpacity>
                        )
                    }
                })
            }
        </View>
    )

    const sortTable = (column) => {
        const newDirection = direction === "desc" ? "asc" : "desc"
        const sortedData = _.orderBy(users, [column], [newDirection])
        setSelectedColumn(column)
        setDirection(newDirection)
        setPets(sortedData)
    }


    const handleReloadMore = async () => {

        setPageReload(pageReload + 1)
        setIsLoading(true)
        getStudentTable()

    }
    const footerList = () => {
        return (
            <View>
                <ActivityIndicator loading={isLoading} size={"large"} />
            </View>
        )
    }
    return (

        // <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        //     {!user?<Text>Loading</Text>:<FlatList
        //         style={{flex:1}}
        //         data={user}
        //         renderItem={({item,index})=>{
        //             <TouchableOpacity style={styles.columnHeader}>
        //             <View style={{height:30,width:"100%",backgroundColor:"red",borderWidth:10,justifyContent:"center",alignItems:"center"}}>
        //                 <Text>Hi There</Text>
        //             </View>
        //             </TouchableOpacity>

        //         }}
        //         keyExtractor={(item, index) => index.toString()}

        //     />}
        //     <Text>osama</Text>
        // </View>
        <View style={styles.container}>
            {/* <Text>{user}</Text> */}

            {/* {console.log("user", user)}
            {!user ? <Text>Loading</Text> : */}
            <ScrollView horizontal={true}  style={styles.titleRows}>


                <Text style={{ padding: 10 }}>Userid</Text>
                <Text style={{ padding: 10 }}>First Name</Text>
                <Text style={{ padding: 10 }}>Last Name</Text>
                <Text style={{ padding: 10 }}>Phone</Text>
                <Text style={{ padding: 10 }}>Birthday</Text>
            </ScrollView>

            <FlatList
                renderItem={() => (
                    <ScrollView horizontal={true} style={{ backgroundColor: "gray" }}>

                        {/* <TouchableOpacity style={styles.row}> */}
                        <Text style={{ padding: 10 }}>Userid</Text>
                        <Text style={{ padding: 10 }}>First Name</Text>
                        <Text style={{ padding: 10 }}>Last Name</Text>
                        <Text style={{ padding: 10 }}>Phone</Text>
                        <Text style={{ padding: 10 }}>Birthday</Text>
                        {/* </TouchableOpacity> */}
                    </ScrollView>

                )}
            />
            {
                (<FlatList
                    data={user}
                    // style={{ width: "90%" }}
                    keyExtractor={(item, index) => index.toString()}
                    // ListHeaderComponent={tableHeader}
                    // stickyHeaderIndices={[0]}
                    onEndReached={handleReloadMore}
                    ListFooterComponent={footerList}
                    renderItem={({ item, index }) => (
                        <ScrollView horizontal={true} style={{ backgroundColor: index % 2 == 1 ? "#F0FBFC" : "E3E3E3" }}>

                            <View style={styles.row}>
                                {/* <Text>UserName : {item.firstname}</Text>
                            <Text>Score : {item.lastname}</Text> */}
                                {/* <Text>{toString("05e7")}</Text> */}
                                {/* <Text>{console.log(decodeURI(`${item.firstname}`))}</Text> */}
                                {/* </TouchableOpacity><View style={{ height: 30, width: "100%", backgroundColor: "red", borderWidth: 10, justifyContent: "center", alignItems: "center" }}> */}
                                <Text style={{ padding: 10 }}>{item.userid}</Text>
                                <Text style={{ padding: 10 }}>{decodeURI(item.firstname)}</Text>
                                <Text style={{ padding: 10 }}>Azbarga</Text>
                                <Text style={{ padding: 10 }}>{item.phone}</Text>
                                <Text style={{ padding: 10 }}>{item.birthday}</Text>




                                {/* <Text>{item.lastname}</Text>
                                <Text>{item.lastname}</Text> */}

                                {/* </View> */}

                            </View>
                        </ScrollView>
                        // <View style={{ ...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white" }}>
                        //     <Text style={{ ...styles.columnRowTxt, fontWeight: "bold" }}>{item.userid}</Text>
                        //     <Text style={styles.columnRowTxt}>{item.firstname}</Text>
                        //     <Text style={styles.columnRowTxt}>{item.lastname}</Text>
                        //     <Text style={styles.columnRowTxt}>{item.birthday}</Text>
                        //     <Text style={styles.columnRowTxt}>{item.Age}</Text>
                        // </View>

                    )}
                />

                )}
            <StatusBar style="auto" />
        </View>




        // <View>{
        //     }
        //     {/* <Text>ddd{user?user:"loading"}</Text> */}
        //     <Text>ddd</Text>
        //     <Text>{user[1].birthday}</Text>
        //     {
        //         // console.log(admin.data)
        //     }
        // </View>

        //     <View style={styles.container}>
        //     <ScrollView horizontal={true}>
        //       <View>
        //         <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
        //           <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
        //         </Table>
        //         <ScrollView style={styles.dataWrapper}>
        //           <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
        //             {
        //               tableData.map((rowData, index) => (
        //                 <Row
        //                   key={index}
        //                   data={rowData}
        //                   widthArr={state.widthArr}
        //                   style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
        //                   textStyle={styles.text}
        //                 />
        //               ))
        //             }
        //           </Table>
        //         </ScrollView>
        //       </View>
        //     </ScrollView>
        //   </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         padding: 30
//     },
//     item: {
//         padding: 15,
//         borderColor: 'black',
//         borderRadius: 5,
//         borderWidth: 1,
//         marginTop: 15,
//         borderStyle: 'dashed',
//         flex: 1,
//         justifyContent: 'space-between'
//     }
// })


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: "aliceblue",
    },
    box: {
        width: 50,
        height: 50,
    },
    titleRows: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-between',
        backgroundColor: '#00ccff',
        fontSize: 30
    },
    row: {
        width: 400,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-between',


        // alignItems: 'flex-end',
        // height: 100
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
    },
    selected: {
        backgroundColor: "coral",
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "coral",
    },
    selectedLabel: {
        color: "white",
    },
    label: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
    },
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingTop: 80
//     },
//     tableHeader: {
//         flexDirection: "row",
//         justifyContent: "space-evenly",
//         alignItems: "center",
//         backgroundColor: "#37C2D0",
//         borderTopEndRadius: 10,
//         borderTopStartRadius: 10,
//         height: 50
//     },
//     tableRow: {
//         flexDirection: "row",
//         height: 40,
//         alignItems: "center",
//     },
//     columnHeader: {
//         width: "20%",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     columnHeaderTxt: {
//         color: "white",
//         fontWeight: "bold",
//     },
//     columnRowTxt: {
//         width: "20%",
//         textAlign: "center",
//     }
// });

export default TableTest
