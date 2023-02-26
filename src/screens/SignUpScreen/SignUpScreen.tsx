import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { signUpStyles } from './signUpStyles';

type SignUpScreenProps = {
    navigation: any;
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const handleSignUp = () => {

    };

    return (
        <View style={signUpStyles.container}>
            <Text style={signUpStyles.titleText}>Sign Up</Text>
            <TextInput
                style={signUpStyles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={signUpStyles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
};

export default SignUpScreen;
