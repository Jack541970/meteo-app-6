import React from 'react'
import About from './components/About'
import Search from './components/Search'
import { View, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'

const Tabs = TabNavigator({
  Search: { screen: Search },
  About: { screen: About }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    indicatorStyle: {
      height: 2,
      backgroundColor: '#FFF'
    },
    style: {
      backgroundColor: "#a2273C",
      borderTopWidth: 1,
      borderColor: "#3f101c"
    }
  },
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true}/>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
