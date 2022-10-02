import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {api} from "../../API";
import {useNavigation} from "@react-navigation/native";

export const Films = () => {
    const navigation = useNavigation()

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        api.getAllFilms().then((res) => {
            setFilms(res.data.results)
            setLoading(false)
        })
    }, [])


    return (
        <View style={styles.container}>
            {loading ? <Text>...Loading</Text> :
                <FlatList data={films}
                          numColumns={2}
                          contentContainerStyle={{paddingHorizontal: 30}}
                          columnWrapperStyle={{justifyContent: "space-between"}}
                          renderItem={({item, index}) => {
                              return <TouchableOpacity style={styles.filmsBlock}
                                                       onPress={() => navigation.navigate('Film', {id: index + 1})}
                              >
                                  <Text style={{fontSize: 18,}}>{item.title}</Text>
                              </TouchableOpacity>
                          }}
                          keyExtractor={(item, index) => `${item.title}.${index}`}
                />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#42f1eb'
    },
    filmsBlock: {
        backgroundColor: '#b44b4b',
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginVertical: 10,
        width: '45%',
        borderRadius: 5,
        alignItems: "center",
        borderWidth: 1,
        height: 80


    }
})

