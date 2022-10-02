import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./Screens/Home/HomeScreen";
import {Films} from "./Screens/Films/Films";
import {Film} from "./Screens/Film/Film";
import {Actors} from "./Screens/Actors/Actors";
import {Actor} from "./Screens/Actor/Actor";


const Stack = createNativeStackNavigator()

export const Main = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={HomeScreen}/>
            <Stack.Screen name={'Films'} component={Films}/>
            <Stack.Screen name={'Film'} component={Film}/>
            <Stack.Screen name={'Actors'} component={Actors}/>
            <Stack.Screen name={'Actor'} component={Actor}/>
        </Stack.Navigator>
    );
};

