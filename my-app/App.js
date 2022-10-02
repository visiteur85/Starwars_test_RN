import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Main} from "./src/Main"
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Main/>
                <StatusBar style="auto"/>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});
