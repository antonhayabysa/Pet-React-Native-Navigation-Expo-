

import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, Image} from 'react-native';
import {profileStyles} from './profileStyles';
import {FontAwesome5} from "@expo/vector-icons";
import { openDatabase } from 'expo-sqlite';
import {signUpStyles} from "../SignUpScreen/signUpStyles";
const db = openDatabase('mydb.db');

interface Props {
    navigation:any,
}

const ProfileScreen = ({ navigation }:Props) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [confirmPassword, setConfirmPassword] = React.useState(false);
    const [position, setPosition] = useState('');
    const [skype, setSkype] = useState('');

    const saveDataToDB = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'ALTER TABLE users ADD COLUMN position TEXT',
                [],
                () => console.log('Position column added successfully'),
                // @ts-ignore
                (_, error) => console.log('Error while adding position column to users table: ', error)
            );

            tx.executeSql(
                'ALTER TABLE users ADD COLUMN skype TEXT',
                [],
                () => console.log('Skype column added successfully'),
                // @ts-ignore
                (_, error) => console.log('Error while adding skype column to users table: ', error)
            );

            tx.executeSql(
                'INSERT INTO users (username, email, position, skype, phone, password) VALUES (?, ?, ?, ?, ?, ?)',
                [username, email, position, skype, phone, password],
                (txObj, resultSet) => {
                    console.log('Data saved successfully!');
                    navigation.navigate('SignIn');
                },
                // @ts-ignore
                (_, error) => {
                    console.log('Error', error);
                }
            );
        });
    };

    function setName(text: string): void {
        throw new Error('Function not implemented.');
    }

    return (
        <View style={profileStyles.container}>
            <View style={profileStyles.containerUser}>
                <Text style={profileStyles.linkText}>
                    Edit profile
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={profileStyles.linkTextNext}>Log Out</Text>
                </TouchableOpacity>
            </View>
            <Image
                source={require('../../../assets/Photo.png')}
                style={profileStyles.logo}
            />
            <Text style={profileStyles.titleTextName}>Mike Tyson</Text>
            <Text style={profileStyles.titleText}>UI/UX Designer</Text>
            <TextInput
                style={profileStyles.inputUp}
                placeholder="Name"
                value={username}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={profileStyles.inputUp}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={profileStyles.inputUp}
                placeholder="Position"
                value={position}
                onChangeText={(text) => setPosition(text)}
            />
            <TextInput
                style={profileStyles.inputUp}
                placeholder="Skype"
                value={skype}
                onChangeText={(text) => setSkype(text)}
            />
            <TextInput
                style={profileStyles.inputUp}
                placeholder="Phone"
                value={phone}
                onChangeText={(text) => setPhone(text)}
            />

            <TouchableOpacity style={profileStyles.signUpButton} onPress={saveDataToDB}>
                <Text style={profileStyles.signUpButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;
