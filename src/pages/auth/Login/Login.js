import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import styles from './Login.styles';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';

import { showMessage } from "react-native-flash-message";

const initialFormValues = {
    usermail: '',
    password: '',
};
const Login = ({ navigation }) => {
    function handleSignUp() {
        navigation.navigate('SignPage');
    }

    async function handleSubmit(formValues) {
        try {
            await auth().signInWithEmailAndPassword(
                formValues.usermail,
                formValues.password,
            );
            
            
        } catch (error) {
            console.log(error);
            showMessage({
                message: authErrorMessageParser(error.code),//veya error.code yazılır
                type: "danger",
            });
        }
        
    }
    return (
        <SafeAreaView>
            <Text style={styles.header} >bana ne?</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleSubmit} >
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input
                            value={values.usermail}
                            placeholder="e-postanızı giriniz.."
                            onType={handleChange('usermail')}
                        />
                        <Input
                            value={values.password}
                            placeholder="şifrenizi giriniz.."
                            onType={handleChange('password')}
                        />
                        <Button text="Giriş Yap" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} />

        </SafeAreaView>
    );
}

export default Login;