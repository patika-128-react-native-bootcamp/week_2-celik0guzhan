import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    topBtn_contanier:{
      flex:1
    },
    container : {
      backgroundColor:'#eceff1',
      flexDirection : 'row',
      alignItems: 'center',
      justifyContent:'space-around'
    },
    topBtn: {
      flexDirection : 'row',
      alignItems: 'center',
      justifyContent:'space-around',
      flex : 1,
      backgroundColor : '#ccced6',
      margin : 10,
      padding : 5,
      borderRadius : 5,
      borderWidth: 1,
      alignItems:'center'
    
    },
    topBtn_title : {
      
      color: 'gray',
      fontWeight: 'bold',
      fontSize: 10,
    },
    listView_contanier : {
      flex: 3,
      backgroundColor:'#eceff1'
    },
    bottom_contanier : {
      flex :2,
      backgroundColor: '#eceff1',
      borderWidth:0.2,
      paddingBottom:20
    },
    lblProduct : {
      padding: 5,
      color: 'black',
      fontWeight: 'normal',
      fontSize: 15,
    },
    txtProduct : {
      backgroundColor:'#dcdee6',
      marginBottom:15,
    },
    lblPrice:{
      padding: 5,
      color: 'black',
      fontWeight : 'normal',
      fontSize: 15,
    },
    txtPrice :{
      backgroundColor:'#dcdee6',
      marginBottom:15,
    },
    bottomBtn:{
      backgroundColor:'#204158',
      alignItems:'center',
      margin:5,
      borderRadius:5,
      
      
   },
   bottomBtn_title :{
     fontSize:15,
     padding:5,
     color:'white',
     fontWeight:'bold',
     
   }
  });
  
  