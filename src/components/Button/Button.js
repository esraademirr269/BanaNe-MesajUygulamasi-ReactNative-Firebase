import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Button.styles';
/*
const obj ={
    user:{
        name: 'Ayşe',
    },
};

obj.user.name;
obj['user'].name;
yukarıdaki iki erişimde aynı manaya gelir
*/
const Button = ({ text, onPress, theme="primary" }) => {
    return (//theme="primary" -> yazma sebebimiz theme değer gelmediğinde otomatik birinci(primary) seçilir, burdaki amaç theme primary sürekli login ekraninda yazmamak.
        <TouchableOpacity 
            style={styles[theme].container} 
            onPress={onPress}>
            <View style={styles[theme].button_container}>
            <Text style={styles[theme].title}>{text}</Text>
            </View>
        </TouchableOpacity>

    );
}

export default Button;