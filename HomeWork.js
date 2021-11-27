import { thisExpression } from '@babel/types';
import React, { useState, memo, Component } from 'react';
import { SafeAreaView, Text, Button, StyleSheet, View, TouchableOpacity, TextInputBase, TextComponent, TextInput, Tab } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import styles from './styles';


class HomeWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      name: '',
      price: 0,
      tableHead: ['Name', 'Price'],


    };
    this.productAdd = this.productAdd.bind(this);
    this.azalanSort = this.azalanSort.bind(this);
    this.artanSort = this.artanSort.bind(this);
    this.dateSort = this.dateSort.bind(this);
  }

  artanSort() {
    let arr = this.state.product
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < (arr.length - i - 1); j++) {
        if (arr[j].price > arr[j + 1].price) {
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
    this.setState({ product: arr })
  }

  azalanSort() {
    let arr = this.state.product
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < (arr.length - i - 1); j++) {
        if (arr[j].price < arr[j + 1].price) {
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
    this.setState({ product: arr })
  }
  productAdd() {
    let newProduct = { name: this.state.name, price: this.state.price, date: Date.now() };
    let product = this.state.product;
    product.push(newProduct);
    this.setState({ product });
  }


  dateSort() {
    let arr = this.state.product
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < (arr.length - i - 1); j++) {
        if (arr[j].date > arr[j + 1].date) {
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
    this.setState({ product: arr })
  }
  render() {
    let { modules, activeTab, customerRoleNames, roleName, canSave, saving } = this.state;
    return (
      <SafeAreaView style={styles.topBtn_contanier}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.artanSort()}
            style={styles.topBtn}>
            <Text style={styles.topBtn_title}>Artan Fiyat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.azalanSort}
            style={styles.topBtn}>
            <Text style={styles.topBtn_title}>Azalan Fiyat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.topBtn}>
            <Text style={styles.topBtn_title}>Tarih</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listView_contanier}>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
            <TableWrapper style={styles.wrapper}>
              <Col
                data={this.state.product.name}
                style={styles.title}
                heightArr={[28, 28]}
                textStyle={styles.text}
              />
              <Col
                data={this.state.product.price}
                style={styles.title}
                heightArr={[28, 28]}
                textStyle={styles.text}
              />
            </TableWrapper>

          </Table>
        </View>
        <View style={styles.bottom_contanier}>
          <Text style={styles.lblProduct}>Name</Text>
          <TextInput id='productName' placeholder='ÜrünAdı' value={this.state.name} style={styles.txtProduct}></TextInput>
          <Text style={styles.lblPrice}>Price</Text>
          <TextInput id='productPrice' placeholder='Fiyat' value={this.state.price} style={styles.txtPrice}></TextInput>
          <TouchableOpacity
            onPress={this.productAdd()}
            style={styles.bottomBtn}>
            <Text style={styles.bottomBtn_title}>Add</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
export default AuthRoles;



