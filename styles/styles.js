import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      paddingTop: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#003f5c',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    genres:{
      fontWeight:"bold",
      fontSize:20,
      color:"white",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    },

    item: {
        flex: 1,
        backgroundColor: '#009000',
        padding: 2,
        marginVertical: 8,
        marginHorizontal: 5,
      },
      titleTop: {
        paddingTop: 15,
        fontSize: 28,
      },
      titleMid: {
        fontSize: 18,
      },
      imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: 220,
      },
      imageThumbnailTitles: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 160,
      },
      navBar: {
        height: 65,
        backgroundColor: 'white',
        elevation: 0,
        padding: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        },
      rightNav: {
        flexDirection: 'row'
      },
      navItem: {
        marginLeft: 25
      },
      body: {
        flex: 1
      },
      tabBar: {
        backgroundColor: 'white',
        height: 50,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      tabItem: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      tabTitle: {
        fontSize: 11,
        color: '#3c003c'
    },
  });