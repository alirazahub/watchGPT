import React,{useState,useEffect} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import LogoImage from '../../assets/black-logo.png';
import { backgroundColor } from '../../colors';
import {AsyncStorage} from "@react-native-async-storage/async-storage"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase'
import Spinner from 'react-native-loading-spinner-overlay';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false)
    const auth = getAuth(app);


    const handleLogin = () => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                _storeData = async () => {
                    try {
                      await AsyncStorage.setItem('user', JSON.stringify(user));
                    } catch (error) {
                        console.log(error)
                    }
                    };
                setLoading(false)
                alert('User logged in successfully!')
                navigation.navigate('Navigation', { screen: 'HomeScreen' })
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                alert(error.message)
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={LogoImage} style={styles.logo} resizeMode="contain" />
                <Text style={styles.title}>watchGPT</Text>
            </View>

            <TextInput
            mode='outlined'
            label="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            />

            <TextInput
            mode='outlined'
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
            <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor:backgroundColor
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
        backgroundColor:backgroundColor,
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
