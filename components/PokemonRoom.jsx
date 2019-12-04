import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Image, TouchableOpacity, Text, FlatList, SafeAreaView, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
class PokemonRoom extends Component {
    state = { id: null, name: "", height: null, weight: null, abilities: [], moves: [], front_male: "", back_male: "", speed: 0, hp: 0, attack: 0, defense: 0, specAtk: 0, specDef: 0, types: [] }
    render() {
        const { id, name, height, weight, abilities, moves, front_male, back_male, speed, defense, attack, hp, specAtk, specDef, types } = this.state;
        return (
            <ImageBackground source={require("../assets/pokemonRoom-bg.jpeg")} style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.name}>{name} - ID: {id}</Text>
                    <View style={styles.images}>
                        <Image style={styles.img} source={front_male ? { uri: front_male } : require("../assets/loading.jpg")}></Image>
                        <Image style={styles.img} source={back_male ? { uri: back_male } : require("../assets/loading.jpg")}></Image>
                    </View>
                    <Text style={styles.text}>Height: {height} || Weight: {weight}</Text>
                    <Text style={styles.text}>Abilities: {abilities}</Text>
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
        const id = this.props.navigation.getParam("id");
        const pokemon = this.props.navigation.getParam("pokemon");
        const height = this.props.navigation.getParam("height");
        const weight = this.props.navigation.getParam("weight");
        const abilities = this.props.navigation.getParam("abilities").join("  ||  ");
        const moves = this.props.navigation.getParam("moves");
        const front_male = this.props.navigation.getParam("front_male");
        const back_male = this.props.navigation.getParam("back_male");
        const speed = this.props.navigation.getParam("speed");
        const attack = this.props.navigation.getParam("attack");
        const defense = this.props.navigation.getParam("defense");
        const hp = this.props.navigation.getParam("hp");
        const specAtk = this.props.navigation.getParam("specAtk");
        const specDef = this.props.navigation.getParam("specDef");
        const types = this.props.navigation.getParam("types");


        this.setState({ id, name: pokemon, height, weight, abilities, moves, front_male, back_male, speed, attack, defense, hp, specAtk, specDef, types })
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

export default PokemonRoom;