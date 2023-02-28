import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity,Image, Alert} from 'react-native';
import { DatabaseConnection } from '../../assets/database/databaseConnection';
import { signInStyles } from './signInStyles';
import { FontAwesome5 } from '@expo/vector-icons';



type SignInScreenProps = {
    navigation: any;
};

const db = DatabaseConnection.getConnection();

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [showPassword, setShowPassword] = React.useState(false);


    const handleSignIn = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM users WHERE email = ? AND password = ?',
                [email, password],
                (_, { rows: { _array } }) => {
                    if (_array.length > 0) {
                        alert('Table created successfully!!!');
                    } else {
                        alert('Invalid email or password');
                    }
                },
                // @ts-ignore
                (tx, error) => {
                    console.error(`Error occurred while signing in: ${error.message}`);
                }
            );
        });
    };
    return (
        <View style={signInStyles.container}>
            <Image
                source={require('../../../assets/Logo.png')}
                style={signInStyles.logo}
            />
            <Text style={signInStyles.titleText}>Log in to woorkroom</Text>
            <TextInput
                style={signInStyles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <View style={signInStyles.passwordInputContainer}>
                <TextInput
                    style={signInStyles.passwordInput}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity
                    style={signInStyles.passwordToggleIcon}
                    onPress={() => setShowPassword((prevState) => !prevState)}
                >
                    <FontAwesome5
                        name={showPassword ? 'eye-slash' : 'eye'}
                        size={18}
                        color="#888"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={signInStyles.forgotPasswordText}
                    onPress={() => Alert.alert('Forgot password?')}
                >
                    <Text style={signInStyles.linkTextHighlight}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={signInStyles.signInButton} onPress={handleSignIn}>
                <Text style={signInStyles.signInButtonText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={signInStyles.linkText}>
                    New User?{' '}
                    <Text style={signInStyles.linkTextNext}>Create Account</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignInScreen;


