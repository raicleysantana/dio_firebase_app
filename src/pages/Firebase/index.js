import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Button} from 'react-native-paper';


const Firebase = () => {
    var i = 0;
    var departamento = [
        {nome: 'Financeiro'},
        {nome: 'TI'},
        {nome: 'RH'},
        {nome: 'Atendimento'},
        {nome: 'Protocolo'},
    ];

    const [item, setItem] = useState({
        name: '',
        lastname: ''
    });

    useEffect(() => {

        firebase.database().ref('/item/1')
            .on('value', snap => {
                setItem(snap.val());
                console.log(snap.val());
            });

    }, []);

    const Inserir = () => {
        i++

        firebase.database()
            .ref(`/item/${i}`)
            .set({
                name: 'Raicley' + i,
                lastname: 'Santana' + i
            })
            .then(() => {
                console.log(i);
            });
    }

    const InserirDepartamento = () => {
        i++

        firebase.database()
            .ref(`/departamento`)
            .set(departamento)
            .then(() => {
                console.log(i);
            });
    }


    return (<View>
        <View>
            <Text>{`Nome: ${item.name}`}</Text>
            <Text>{`Ultimo nome: ${item.lastname}`}</Text>
        </View>
        <View style={{ marginBottom : 5}}>
            <Button onPress={Inserir} mode="contained">Novo</Button>
        </View>
        <View>
            <Button onPress={InserirDepartamento} mode="contained">Departamento</Button>
        </View>

    </View>);
}


export default Firebase;

