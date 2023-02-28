import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import { DatabaseConnection } from './src/assets/database/databaseConnection';


const Stack = createNativeStackNavigator();
const db = DatabaseConnection.getConnection();

// Создание таблицы users
db.transaction((tx: { executeSql: (arg0: string) => void; }) => {
    tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT);'
    );
});

// Добавление данных в таблицу users
db.transaction((tx: { executeSql: (arg0: string, arg1: string[]) => void; }) => {
    tx.executeSql(
        'INSERT INTO users (email, password) VALUES (?, ?);',
        ['test@example.com', '123456']
    );
});

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}
                />
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
