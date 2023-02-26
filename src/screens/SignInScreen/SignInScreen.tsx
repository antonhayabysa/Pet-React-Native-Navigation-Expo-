import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { signInStyles } from './signInStyles';

type SignInScreenProps = {
    navigation: any;
};

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const handleSignIn = () => {

    };

    return (
        <View style={signInStyles.container}>
            <Text style={signInStyles.titleText}>Sign In</Text>
            <TextInput
                style={signInStyles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={signInStyles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Button title="Sign In" onPress={() => {}} />
            <Button
                title="Go to Sign Up"
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    );
};

export default SignInScreen;
