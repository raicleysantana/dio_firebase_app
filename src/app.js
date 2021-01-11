import React, {useEffect, useState} from 'react';
import {StatusBar} from "expo-status-bar";
import selectRouters, {routers} from "./routes";
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DefaultTheme, Provider as PaperProvider, Text} from 'react-native-paper';
import firebase from 'firebase';

const Stack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        accent: 'yellow',
    },
};

const App = function App() {
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
    }

    useEffect(() => {
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDeYyvYO5IeK-NQCYsh_ZAPqhfShzUy9XA",
            authDomain: "dio-firebase-7a33d.firebaseapp.com",
            projectId: "dio-firebase-7a33d",
            storageBucket: "dio-firebase-7a33d.appspot.com",
            messagingSenderId: "1079064115738",
            appId: "1:1079064115738:web:20b9774808e34c5caeefa3"
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        console.log(user);
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    //if (initializing) return null;

    return (<PaperProvider theme={theme}>
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <>
                        <Stack.Screen
                            name={routers.home}
                            component={() => selectRouters(routers.home, user)}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name={routers.login}
                            component={() => selectRouters(routers.login)}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name={routers.createUser}
                            component={() => selectRouters(routers.createUser)}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    </PaperProvider>);
}
export default App;


