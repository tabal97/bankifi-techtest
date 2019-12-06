import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Text, ScrollView, SafeAreaView } from "react-native";
import * as api from "../assets/utils/api"
class TypesScreen extends Component {
    state = {
        types: null, error: false
    }
    render() {
        const { types, error } = this.state;
        return (
            <ImageBackground source={require("../assets/pokemon-bg.jpg")} style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        {error && <Text style={styles.errorMsg}>There seems to be an issue with the servers. Please try again later</Text>}
                        {types && types.map(type => {
                            return <TouchableOpacity onPress={() => this.handlePress(type)} key={type.url} >
                                <Text style={styles.button}>
                                    {type.name}
                                </Text>
                            </TouchableOpacity>
                        })}
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        );
    }
    componentDidMount() {
        api.getTypes().then(data => {
            this.setState({ types: data.results, error: false })
        }).catch(err => this.setState({ error: true }))
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
    },
    errorMsg: {
        color: "white",
        backgroundColor: "red",
        borderRadius: 3,
        padding: 1,
        overflow: "hidden",
        marginTop: 5
    }
})

export default TypesScreen;