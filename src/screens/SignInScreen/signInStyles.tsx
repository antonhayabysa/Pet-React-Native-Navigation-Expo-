
import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const signInStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 67.5,
        height: 90,
        resizeMode: 'contain',
        marginTop: height * 0.5 * 0.2,
        marginBottom: height * 0.5 * 0.1,
    },
    titleText: {
        marginTop: height * 0.5 * 0.10,
        fontSize: 24,
        marginBottom: height * 0.5 * 0.07,
        fontWeight:'500',
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 0,
        paddingHorizontal: 10,
        marginBottom: height * 0.5 * 0.05,
    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: 40,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 0,
        paddingHorizontal: 10,
        marginBottom: height * 0.5 * 0.03,
    },
    passwordInput: {
        flex: 1,
        height: '100%',
        marginRight: 20,
    },
    passwordToggleIcon: {
        position: 'absolute',
        right: 10,
        bottom: 8,
    },
    linkText: {
        marginTop: height * 0.5 * 0.08,
        color: '#9795A4',
    },
    linkTextHighlight: {
        color: '#9795A4',
        fontSize:14,
        fontWeight:'400',
    },
    linkTextNext: {
        color: '#FFC612',
        fontSize:14,
        fontWeight:'400',
    },
    forgotPasswordText: {
        position: 'absolute',
        right: 0,
        top: 60,
    },
    signInButton: {
        backgroundColor: '#FFC612',
        borderRadius: 20,
        paddingVertical: 0,
        paddingHorizontal: 40,
        width:'80%',
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop:75,
    },
    signInButtonText: {
        fontWeight:'500',
        color: '#1F1D1D',
        fontSize: 18,
    },
});


