import React, {useState, memo} from 'react';
import {SafeAreaView, Text,Button,StyleSheet, View, TouchableOpacity, TextInputBase, TextComponent, TextInput} from 'react-native';

export default function(){
  return (
    <SafeAreaView style={styles.topBtn_contanier}>
      <View style= {styles.container}>
        <TouchableOpacity style = {styles.topBtn}>
          <Text style={styles.topBtn_title}>Artan Fiyat</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.topBtn}>
          <Text style={styles.topBtn_title}>Azalan  Fiyat</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.topBtn}>
          <Text style={styles.topBtn_title}>Tarih</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.listView_contanier}>
      </View>
      <View style = {styles.bottom_contanier}>
        <Text style = {styles.lblProduct}>Name</Text>
        <TextInput style = {styles.txtProduct}></TextInput>
        <Text style = {styles.lblPrice}>Price</Text>
        <TextInput style = {styles.txtPrice}></TextInput>
        <TouchableOpacity style={styles.bottomBtn}>
          <Text style={styles.bottomBtn_title}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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
    flex :1,
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
    height:15,
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
    height:15,
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

