import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import LogoImage from '../../assets/icon.png';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        navigation.navigate('Navigation', { screen: 'HomeScreen' })
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={LogoImage} style={styles.logo} resizeMode="contain" />
                <Text style={styles.title}>watchGPT</Text>
            </View>

            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />

            <TextInput
                label="Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
                style={styles.input}
            />

            <Text style={styles.link}>Forgot password?</Text>

            <Button mode="contained" onPress={handleLogin} style={styles.button}>
                Login
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.link}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    logo: {
        width: 200,
        height: 100,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8,
    },
    input: {
        marginBottom: 16,
        width: '100%',
    },
    button: {
        marginTop: 16,
        width: '100%',
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 8,
    },
});

export default LoginScreen;
