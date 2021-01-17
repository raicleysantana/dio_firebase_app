import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title, Card, Paragraph, Appbar, Button, Text} from 'react-native-paper';
import firebase from 'firebase';
import {useNavigation} from "@react-navigation/native";
import {routers} from "../../routes";

const Home = (props) => {
    const navigation = useNavigation();

    const logout = () => {
        // fazer logout
        firebase.auth().signOut().then(() => console.log('User signed out'));
    };


    const areaFirebase = () => {
        navigation.navigate(routers.areaFirebase);
    }

    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Home"/>
            </Appbar.Header>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Title>Area logada</Title>
                        <Paragraph>{/*{props._user.email}*/}</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button mode="contained" style={{width: '100%'}} onPress={areaFirebase}>
                            Área firebase
                        </Button>
                    </Card.Actions>
                    <Card.Actions>
                        <Button mode="contained" onPress={logout} style={{backgroundColor: 'red', width: '100%'}}>
                            Sair
                        </Button>
                    </Card.Actions>
                </Card>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    card: {
        padding: 10,
    },
});

export default Home;