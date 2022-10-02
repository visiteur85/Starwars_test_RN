import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {api} from "../../API";

export const Actor = ({route}) => {

    const url = route.params.url;
    const [actor, setActor] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        api.getActor(url).then((res) => {
            let data = res.data
            setActor(data)
            setLoading(false)
        })
    }, [])


    return (

        <View style={styles.container}>
            {loading ? <Text>...Loading</Text> :
                <View style={styles.actor}>
                    <Text style={styles.title}>Name: {actor.name}</Text>
                    <Text style={styles.title}>Height: {actor.height}</Text>
                    <Text style={styles.title}>Mass: {actor.mass}</Text>
                    <Text style={styles.title}>Hair color: {actor.hair_color}</Text>
                    <Text style={styles.title}>Eye color: {actor.eye_color}</Text>
                    <Text style={styles.title}>Birth year: {actor.birth_year}</Text>
                    <Text style={styles.title}>Gender: {actor.gender}</Text>
                </View>}
        </View>


    );
};

const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#42f1eb'


        },
        actor: {
            flex: 1,
            width: '80%',
            borderColor: '#4251f1',
            flexDirection: 'column',
            alignItems: "center",
            paddingVertical: 15,
            borderStyle: "solid",
            marginTop: 30,
            marginBottom: 20,
            borderWidth: 1,

            borderRadius: 10
        },
        title: {
            paddingVertical: 34,
            color: "#b44b4b"
        }


    }
);