import React from 'react';
import { View, Text, Button } from 'react-native';
import { profileStyles } from './profileStyles';

type ProfileScreenProps = {
    navigation: any;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
    return (
        <View style={profileStyles.container}>
            <Text style={profileStyles.titleText}>Profile</Text>
            <Text style={profileStyles.paragraph}>
                This is the profile screen.
            </Text>
        </View>

    );
};

export default ProfileScreen;
