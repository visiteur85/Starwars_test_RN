import React from 'react';
import {View, Button, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";


export const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.homeBlock}>
            <Button title='Фильмы'
                    onPress={() => navigation.navigate('Films')}/>

            <Button title='Персонажи'
                    onPress={() => navigation.navigate('Actors')}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    homeBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: '#42f1eb'


    }
})
