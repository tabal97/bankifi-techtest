import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Image, Text, SafeAreaView } from "react-native";
class PokemonCard extends Component {
    state = { id: null, pokemon: "", height: null, weight: null, abilities: [], front_male: "", back_male: "", speed: 0, hp: 0, attack: 0, defense: 0, specAtk: 0, specDef: 0, types: [] }
    render() {
        const { id, pokemon, height, weight, abilities, front_male, back_male, speed, defense, attack, hp, specAtk, specDef, types } = this.state;
        return (
            <ImageBackground source={require("../assets/PokemonCard-bg.jpeg")} style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.name}>{pokemon} - ID: {id}</Text>
                    <View style={styles.images}>
                        <Image style={styles.img} source={front_male ? { uri: front_male } : require("../assets/loading.jpg")}></Image>
                        <Image style={styles.img} source={back_male ? { uri: back_male } : require("../assets/loading.jpg")}></Image>
                    </View>
                    <Text style={styles.text}>Height: {height} || Weight: {weight}</Text>
                    <Text style={styles.stats}>Abilities:</Text>
                    {abilities.map(ability => {
                        return <Text style={styles.text} key={ability}>{ability}</Text>
                    })}
                    <Text style={styles.stats}>Stats:</Text>
                    <Text style={styles.text}>HP: {hp}  ||  ATK: {attack}  || DEF: {defense}  ||  Speed: {speed}</Text>
                    <Text style={styles.text}>Special-ATK: {specAtk}  ||  Special-DEF: {specDef}</Text>
                    <Text style={styles.stats}>Type/Types: </Text>
                    {types.map(type => {
                        return <Text style={styles.text} key={type}>{type}</Text>
                    })}
                </SafeAreaView>
            </ImageBackground>
        );
    }

    componentDidMount() {
        this.setState(this.props.navigation.state.params)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    name: {
        marginTop: 5,
        fontSize: 30,
        padding: 30,
        borderRadius: 20,
        backgroundColor: "whitesmoke",
        overflow: "hidden",
        borderWidth: 5,
        fontWeight: "bold"
    },
    img: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    images: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    row: {
        flexDirection: "row",
        textAlign: "center"
    },
    text: {
        fontSize: 22,
        backgroundColor: "skyblue",
        padding: 5,
        borderRadius: 5,
        overflow: "hidden"
    },
    stats: {
        textDecorationLine: "underline",
        fontSize: 30,
        padding: 10,
        borderRadius: 10,
        overflow: "hidden",
        borderWidth: 2,
        backgroundColor: "whitesmoke",
    }
})

export default PokemonCard;