import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Image, TouchableOpacity, Text, TextInput, KeyboardAvoidingView } from "react-native";

class HomeScreen extends Component {
    state = {}
    render() {
        return (
            <ImageBackground source={require("../assets/pokemon-bg.jpg")} style={styles.container}>
                <Image source={require("../assets/pokedex-header.png")} style={styles.header} />
                <TouchableOpacity onPress={this.handleFinder} ><Text style={styles.button}>Pokémon Finder</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.handleTypes} ><Text style={styles.button}>Search By Type</Text></TouchableOpacity>
            </ImageBackground>
        );
    };
    handleFinder = () => {
        this.props.navigation.navigate("SearchScreen")
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    header: {
        width: 350,
        height: 350,
        resizeMode: 'contain'
    },
    button: {
        fontSize: 30,
        backgroundColor: "whitesmoke",
        marginBottom: 150,
        borderRadius: 10,
        borderWidth: 3,
        overflow: "hidden",
        padding: 30
    }
})

export default HomeScreen;