import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {api} from "../../API";

export const Film = ({route}) => {

    const id = route.params.id;
    const [film, setFilm] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        api.getFilm(id).then((res) => {
            let data = res.data
            setFilm(data)
            setLoading(false)

        })

    }, [])
    return (
        <View style={styles.container}>
            {loading ? <Text>...Loading</Text> :
                <View style={styles.film}>
                    <Text style={styles.title}>{film.title}</Text>
                    <Text>{film.opening_crawl}</Text>
                    <Text>Режиссер: {film.director}</Text>
                    <Text>Дата выхода: {film.release_date}</Text>
                </View>

            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#42f1eb'
    },
    film: {
        flex: 1,
        width: '80%',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "space-around",

    },
    title: {
        fontSize: 28,
        color: '#e80a0a'
    }

});