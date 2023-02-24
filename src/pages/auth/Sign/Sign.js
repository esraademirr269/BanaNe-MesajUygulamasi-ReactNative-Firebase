import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import styles from './Sign.styles';

import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';
import { showMessage, hideMessage } from "react-native-flash-message";

const initialFormValues = {
    usermail: '',
    password: '',
    repassword: '',
};
const Sign = ({ navigation }) => {
    function handleLogin() {
        navigation.goBack();
    }


   async function handleSubmit (formValues) {

        if (formValues.password !== formValues.repassword) {
            showMessage({
                message: 'Şifreler uyuşmuyor',
                type: "danger",
            });
            return;//return yazmazsak döngüde kalıyor ve try çalışıyor,
        }

        try {
          await  auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.password,
            );
            showMessage({
                message: 'Kullanıcı oluşturuldu',
                type: "success",
            });
            navigation.navigate('LoginPage');
        } catch (error) {
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
                            isSecure
                        />
                        <Input
                            value={values.repassword}
                            placeholder="şifrenizi tekrar giriniz.."
                            onType={handleChange('repassword')}
                            isSecure
                        />
                        <Button text="Kayıt Ol" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <Button text="Geri" theme="secondary" onPress={handleLogin} />

        </SafeAreaView>
    );
}

export default Sign;