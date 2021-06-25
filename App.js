import * as React from 'react';
import { Text, View, StyleSheet , Button} from 'react-native';

class DJ extends React.Component {
  djalert=()=>{
    alert("DJ")}
    render(){
      return(
        <Button title = {this.props.title} color = {this.props.color} onPress = {()=>               {this.djalert}} />
      )
    }
  }
export default class App extends React.Component {
  render(){
    return(
      <View>
      <DJ title = "sound1" color = "red" />
      </View>
    )
  }
}