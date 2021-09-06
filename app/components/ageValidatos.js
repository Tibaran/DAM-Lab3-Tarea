import React, {Component} from 'react';

import {View, Text, StyleSheet, TextInput} from 'react-native';

export default class AgeValidator extends Component {
    constructor(props){
        super(props);
        this.state={
          age: '',
        }
    }

    changeTextInput = text =>{
        this.setState({age: text.replace(/[^0-9]/g, '')} );
    };
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.text}>
                    <Text> Ingrese su edad </Text>
                </View>
                <TextInput
                  style={ {height: 40, borderColor: 'gray', borderWidth: 1} }
                  onChangeText={text=> this.changeTextInput(text)}
                  value={this.state.age}
                  keyboardType={"number-pad"}
                  placeholder={"0"}
                />
                <View style={styles.text}>
                    <Text>{(Number(this.state.age)>=18) ? 'Es mayor de edad':'Es menor de edad'}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    text: {
      alignItems: 'center',
      padding: 5,
    },
  });