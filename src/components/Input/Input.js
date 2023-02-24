import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './Input.styles';

const Input = ({ value, placeholder, onType, isSecure }) => {
    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize='none'
                onChangeText={onType}
                value={value}
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={isSecure}
            />
        </View>
    );
}

export default Input;