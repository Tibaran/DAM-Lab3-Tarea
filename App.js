import React, {Component} from "react";
import AgeValidator from "./app/components/ageValidatos";
import MyList from "./app/components/myList";
import { 
  StyleSheet,
  View,
} from "react-native";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      textValue: '',
      count: 0,
    }
  }
  render(){
    return (
      <View style={styles.container}>

        <AgeValidator/>
        <MyList/>
        
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
});