/**
 * CalculatorAI
 * Mangui-ob
 * Mendrico
 * Navarro
 * 
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class App extends Component{

  constructor(){
    super()
    this.state = {
      display: "",
      answer: "0",
      next: false
    }
  }

  calculate = () => {
    const text = this.state.display
    const arr = text.split(', ')
    sum = 0
    equivalent = 0
    for(i = 0; i < arr.length; i++){
      if(arr[i] == 'A'){
        equivalent = 4
      }
      else if(arr[i] == 'B+'){
        equivalent = 3.5
      }
      else if(arr[i] == 'B'){
        equivalent = 3
      }
      else if(arr[i] == 'C+'){
        equivalent = 2.5
      }
      else if(arr[i] == 'C'){
        equivalent = 2
      }
      else if(arr[i] == 'D'){
        equivalent = 1
      }
      else if(arr[i] == 'F/FD'){
        equivalent = 0
      }

      sum = sum + equivalent
      equivalent = 0
    }

    result = sum/(arr.length-1)
    this.setState({
      answer: result.toFixed(2)
    })
    this.state.next = true
  }

  keypressed = (letter) => {
    if(letter == 'E')
    {
      if(this.state.display != "")
      {
        return this.calculate()
      }
      else
      {
        alert('Please enter grades')
      }
    }
    else if (letter == 'R')
    {
      this.refresh_all()
    }
    else
    {
      if(this.state.next == true)
      {
        this.refresh_all()
        this.state.next = false
        this.state.display = ""
      }
        this.setState
        ({
          display: this.state.display + letter + ', '
        })
    }
  }

  refresh_all = () => 
  {
    this.setState
    ({
      display: "",
      answer: "0"
    })
  }

  render() 
  {
    return (
      <View style={styles.container}>
      <View style={styles.view_answer}>
          <Text style={styles.answer}> {this.state.answer} </Text>
        </View>
        <View style={styles.view_display}> 
          <Text style={styles.display}> {this.state.display} </Text> 
        </View>
        <View style={styles.view_keypad}>
          <View style={styles.row}>
          <TouchableOpacity onPress={this.keypressed.bind(this, 'F/FD')} style={styles.btn}>
              <Text style={styles.lettergrades}> F/FD </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.keypressed.bind(this, 'R')} style={styles.btn}>
            <Text style={styles.func}> R </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.keypressed.bind(this, 'E')} style={styles.btn}>
              <Text style={styles.func}> = </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity onPress={this.keypressed.bind(this, 'A')} style={styles.btn}>
              <Text style={styles.lettergrades}> A </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.keypressed.bind(this, 'B+')} style={styles.btn}>
              <Text style={styles.lettergrades}> B+ </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.keypressed.bind(this, 'B')} style={styles.btn}>
              <Text style={styles.lettergrades}> B </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={this.keypressed.bind(this, 'C+')} style={styles.btn}>
                <Text style={styles.lettergrades}> C+ </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.keypressed.bind(this, 'C')} style={styles.btn}>
                <Text style={styles.lettergrades}> C </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.keypressed.bind(this, 'D')} style={styles.btn}>
                <Text style={styles.lettergrades}> D </Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create
({
  container: 
  {
    flex: 1,
    backgroundColor: '#FFD1DC',
  },
  display: 
  {
    fontSize: 30,
    flex: 1,
    textAlign: 'right',
    textAlignVertical: 'top',
  },
  lettergrades: 
  {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#474747',
    fontFamily: 'Verdana',
  },
  func: 
  {
    flex: 1,
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#474747',
  },
  btn: 
  {
    flex: 1,
  },
  answer: 
  {
    fontSize: 80,
    flex: 1,
    textAlign: 'right',
    textAlignVertical: 'bottom',
  },
  view_display: 
  {
    flex: 2,
    backgroundColor: '#FFD1DC',
  },
  view_answer: 
  {
    flex: 3,
    backgroundColor: '#FFD1DC',
  },
  view_keypad: 
  {
    flex: 10,
    backgroundColor: '#fda4ba',
  },
  row: 
  {
    flex: 1,
    flexDirection: 'row',
  },
});
