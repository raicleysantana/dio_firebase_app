import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title, Card, Paragraph, Appbar, Button, Text} from 'react-native-paper';

const Home = (props) => {
    const logout = () => {
        // fazer logout
    };

    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Home" />
            </Appbar.Header>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Title>Area logada</Title>
                        <Paragraph>{/*{props._user.email}*/}</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button mode="contained" onPress={logout}>
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