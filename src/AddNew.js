import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Sale from './SaleModel';

class AddNew extends Component {
  static navigationOptions = {
         title: 'AddNew',
       };

  constructor(props) {
    super(props);
    this.state = {
          error: false,
          newValue: ''
        }
  }

   componentDidMount() {
    this.props.navigation.setParams({
      newItem: this.state.newValue
    });
  }


  onPress(event){

        let title = this.state.newValue;
        var patt = new RegExp("[0-9]");
        var res = patt.test(title);
        if(res){
            //diplay red message
            this.setState({
                  error: true
                });
        }else if(title){
             const { navigate } = this.props.navigation;
             navigate('ListView', {newItem: title})
        }


  }

  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={ styles.container }>
      <Text style={ styles.title } >Add new Item</Text>
      <TextInput style={ styles.input }
        placeholder='Add New Item'
        blurOnSubmit={false}
        onChangeText={(text) => this.setState({newValue:text})}
        >
      </TextInput>
       { this.state.error ? <Text style={ styles.error } >Numbers not allowed</Text> : null }

      <Button style={ styles.button } title="Add New" color="#00CCFF" onPress={this.onPress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#F8F8F8',
    marginLeft: 10, marginRight: 10
  },
  button:{
   paddingTop: 9,
   paddingBottom: 15,
   marginLeft:15,
   marginRight:50
  },
  error:{
    marginLeft:15,
    fontSize:18,
    color: '#FF0000'
  },
  input:{
    marginLeft:15,
    marginRight:15,
    height: 36,
    padding: 4,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  title:{
    color: '#1D7281',
    borderBottomWidth:1,
    borderColor: '#eee',
    fontSize:36,
    marginBottom: 50
  }
});

module.exports = AddNew;
