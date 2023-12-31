import React from 'react'
import style from '../Style'
import {View, Text, StyleSheet, Image, Button} from 'react-native'

export default class About extends React.Component {

  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source={require('./icons/user.png')}  style={{width:20, height: 20}}/>
    }
  }

  search () {
    this.props.navigation.navigate('Search')
  }

  render () {
    return (
      <View style={style.container}>
        <Text style={style.title}>A propos de l'application</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Consequuntur, est maiores nemo nulla obcaecati odio provident qui quia. Animi architecto aspernatur autem, iste laudantium libero magni nemo neque quas sequi!
        </Text>
        <Button color={style.color} onPress={() => this.search()} title="Rechercher une ville"/>
      </View>
    )
  }

}