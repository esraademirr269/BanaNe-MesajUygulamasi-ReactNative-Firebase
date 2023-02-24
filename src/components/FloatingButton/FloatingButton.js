import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './FloatingButton.styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({onPress, icon}) =>{
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name={icon} color="white" size={30} />
        </TouchableOpacity>
    );
}

export default Button;