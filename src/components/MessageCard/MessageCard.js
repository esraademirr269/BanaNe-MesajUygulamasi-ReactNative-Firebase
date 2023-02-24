import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './MessageCard.styles';
import { ShadowedView } from 'react-native-fast-shadow';

import { formatDistance, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

const MessageCard = ({ message , onBanane}) => {

    const formatedDate = formatDistance(parseISO(message.date), new Date(), {
        addSuffix: true,
        locale: tr,
    });//tarih ayarlaması

    return (

        <ShadowedView style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.user}>{message.username}</Text>
                <Text style={styles.date}>{formatedDate}</Text>
            </View>
            <Text style={styles.message}>{message.text}</Text>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.bttn_dislike} onPress={onBanane} >
                {message.dislike>0 ? <View style={styles.dislike_count_container} ><Text style={styles.dislike_count}> {message.dislike} </Text></View>:null}
                <Text style={styles.dislike_banane}> bana ne?</Text>
                </TouchableOpacity>
            </View>
        </ShadowedView>
    );
}

export default MessageCard;