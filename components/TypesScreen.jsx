import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Image, TouchableOpacity, Text, TextInput, ScrollView, SafeAreaView } from "react-native";
import axios from "axios";
class TypesScreen extends Component {
    state = {
        types: null
    }
    render() {
        const { types } = this.state;
        // console.log(types, "state")
        return (
            <ImageBackground source={require("../assets/pokemon-bg.jpg")} style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        {types && types.map(type => {
                            return <TouchableOpacity onPress={() => this.handlePress(type)} key={type.url} ><Text style={styles.button}>{type.name}</Text></TouchableOpacity>
                        })}
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        );
    }
    componentDidMount() {
        axios.get("https://pokeapi.co/api/v2/type/").then(({ data }) => {
            this.setState({ types: data.results })
        })
    }
    handlePress = (type) => {
        const { name, url } = type
        this.props.navigation.navigate("PokemonList", { name, url })
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    button: {
        fontSize: 30,
        backgroundColor: "whitesmoke",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 75,
        borderRadius: 10,
        borderWidth: 3,
        overflow: "hidden",
        padding: 30,
        paddingHorizontal: 100
    }
})

export default TypesScreen;