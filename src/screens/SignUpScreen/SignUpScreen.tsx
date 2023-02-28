

import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, Image} from 'react-native';
import { signUpStyles } from './signUpStyles';
import {FontAwesome5} from "@expo/vector-icons";
import { openDatabase } from 'expo-sqlite';
const db = openDatabase('mydb.db');

interface Props {
    navigation:any,
}

const SignUpScreen = ({ navigation }:Props) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [confirmPassword, setConfirmPassword] = React.useState(false);


    const saveDataToDB = () => {
        db.transaction((tx) => {
            tx.executeSql(
                `ALTER TABLE users ADD COLUMN phone TEXT;`, // добавляем столбец phone
                [],
                () => {
                    console.log('Phone column added successfully');
                },
                // @ts-ignore
                (_, error) => {
                    console.log('Error while adding phone column to users table: ', error);
                }
            );

            tx.executeSql(
                'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
                [username, email, password],
                (txObj, resultSet) => {
                    console.log('Data saved successfully!');
                    navigation.navigate('Profile');
                },
                // @ts-ignore
                (_, error) => {
                    console.log('Error', error);
                },
            );
        });
    };

    return (
        <View style={signUpStyles.container}>
            <Image
                source={require('../../../assets/Logo.png')}
                style={signUpStyles.logo}
            />
            <Text style={signUpStyles.titleText}>Sign Up To woorkroom</Text>
            <View style={signUpStyles.phoneInputContainer}>
                <TextInput
                    style={signUpStyles.phoneCountryCodeInput}
                    placeholder="+1"
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={signUpStyles.phoneInput}
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    onChangeText={setPhone}
                    value={phone}
                />
            </View>
            <View style={signUpStyles.codeLabel}>
                <Text style={signUpStyles.codeLabelText}>Code</Text>
            </View>

            <View style={signUpStyles.phoneCodeInputContainer}>
                <View style={signUpStyles.phoneCodeInputs}>
                    <TextInput
                        style={signUpStyles.phoneCodeInput}
                        keyboardType="phone-pad"
                        maxLength={1}
                        placeholder="5"
                    />
                    <TextInput
                        style={signUpStyles.phoneCodeInput}
                        keyboardType="phone-pad"
                        maxLength={1}
                        placeholder="8"
                    />
                    <TextInput
                        style={signUpStyles.phoneCodeInputColor}
                        keyboardType="phone-pad"
                        maxLength={1}
                        placeholder="2"
                    />
                    <TextInput
                        style={signUpStyles.phoneCodeInput}
                        keyboardType="phone-pad"
                        maxLength={1}
                    />
                </View>
            </View>

            <TextInput
                style={signUpStyles.inputUp}
                placeholder="Your name"

            />

            <TextInput
                style={signUpStyles.inputUp}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <View style={signUpStyles.passwordInputContainer}>
                <TextInput
                    style={signUpStyles.passwordInput}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity
                    style={signUpStyles.passwordToggleIcon}
                    onPress={() => setShowPassword((prevState) => !prevState)}
                >
                    <FontAwesome5
                        name={showPassword ? 'eye-slash' : 'eye'}
                        size={18}
                        color="#888"
                    />
                </TouchableOpacity>
            </View>

            <View style={signUpStyles.passwordInputContainer}>
                <TextInput
                    style={signUpStyles.passwordInput}
                    placeholder="Confirm Password"
                    secureTextEntry={!confirmPassword}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity
                    style={signUpStyles.passwordToggleIcon}
                    onPress={() => setConfirmPassword((prevState) => !prevState)}
                >
                    <FontAwesome5
                        name={confirmPassword ? 'eye-slash' : 'eye'}
                        size={18}
                        color="#888"
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={signUpStyles.signUpButton} onPress={saveDataToDB}>
                <Text style={signUpStyles.signUpButtonText}>Next</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={signUpStyles.linkText}>
                    Have Account?{' '}
                    <Text style={signUpStyles.linkTextNext}>Log In</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignUpScreen;


