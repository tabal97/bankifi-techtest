import React, { Component } from 'react';
import Home from "./components/Home";
import PokemonRoom from "./components/PokemonRoom"
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const RootStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  PokemonRoom: {
    screen: PokemonRoom,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "skyblue"
      },
      title: "Pokemon Info"
    }
  }
});
const AppContainer = createAppContainer(RootStack);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}


export default App