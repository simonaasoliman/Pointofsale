import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import AddNew from './AddNew';
import Sale from './SaleModel';

let dataList = [

];

function getOrder(list) {
  return Object.keys(list);
}


class ListView extends Component {
   static navigationOptions = {
       title: 'ListView',
     };
  constructor(props) {
    super(props);
    this.state = {
        dataList: dataList
    }

  }

  render() {
    const {navigate} = this.props.navigation;
    let newItem = (this.props.navigation.getParam('newItem'))
    if(newItem){
        dataList.push(new Sale(this.props.navigation.getParam('newItem')))
    }

    let listView = (<View></View>);
    if (this.state.dataList.length) {
      listView = (
         <Card style={ styles.card }>
                      {
                            dataList.map((u, i) => {
                              return (
                                <View style={ styles.viewItem } key={i} >
                                  <Text style={ styles.viewText } >{u.title}</Text>
                                </View>
                              );
                            })
                      }
                    </Card>
      );
    }

    return (
        <View style={ styles.container }>
            <Text style={styles.title } >Items</Text>
            {listView}
            <Button   style={ styles.button }
                      title="Add New"
                      color="#00CCFF"
                      onPress={() => navigate('AddNew', {dataList: this.dataList})}
                    />
        </View>
    )
  }
};

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
  card: {
    paddingBottom: 15
  },
  viewItem: {
    borderColor: '#eee',
    paddingTop: 9,
    paddingBottom: 9
  },
  viewText: {
    fontSize:18
  },
  title: {
    color: '#1D7281',
    borderBottomWidth:1,
    borderColor: '#eee',
    fontSize:36,
    marginBottom: 50
   },
  button: {
    paddingTop: 9,
    paddingBottom: 15
   }

});
module.exports = ListView;