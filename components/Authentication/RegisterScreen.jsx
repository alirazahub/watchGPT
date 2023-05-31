import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { backgroundColor } from '../../colors'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase'
import LogoImage from '../../assets/black-logo.png';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from "@react-native-async-storage/async-storage"

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)



    const auth = getAuth(app);

    const register = () => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                displayName: user.displayName
                setLoading(false)
                alert('User registered successfully!')
                navigation.navigate('Login')
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                alert(error.message)
            });
    }
    return (
        <KeyboardAvoidingView>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={LogoImage} style={styles.logo} resizeMode="contain" />
                    <Text style={styles.title}>watchGPT</Text>
                </View>
                <TextInput
                    style={styles.input}
                    mode='outlined'
                    label="Full Name"
                    autoFocus
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.input}
                    mode='outlined'
                    label="Email"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    mode='outlined'
                    label="Password"
                    type="password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <View style={{ flexDirection: 'row' }}>
                    <Text >Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}> Login</Text>
                    </TouchableOpacity>

                </View>
                <Button
                    loading={loading}
                    mode='contained'
                    containerStyle={styles.button}
                    onPress={register}
                >Register</Button>
                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />

            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
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
        width: '90%',
        margin: 10,
    },
    button: {
        width: '90%',
        marginTop: 10,
    },
    spinnerTextStyle: {
        color: '#FFF',
    },
});


export default RegisterScreen
