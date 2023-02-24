import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: colors.green,
        borderRadius: 10,
        margin: 10,
        backgroundColor: colors.green,
        shadowOpacity: 0.45,//17.satıra kadar olan kısım butona gölge verme işlemi
        shadowRadius: 7,
        shadowOffset: {
            width: -3,
            height: 4,
        },
        
    },
    inner_container: {
        padding: 5,
        flexDirection: 'row',
    },
    footer:{
        backgroundColor:'white',
        borderRadius:10,
        padding:3,
        alignSelf: 'flex-end',
        marginBottom:5,
        marginRight:5,
    },
    dislike_count_container:{
        alignSelf:'center',
        borderRadius:7,
        backgroundColor:colors.darkgreen,
    },
    dislike_count:{
        color:'white',
    },
    bttn_dislike:{
        flexDirection:'row',
    },
    dislike_banane:{
        color:colors.darkgreen,
    },
    user: {
        flex: 1,
        color: 'white',
        fontSize: 13,
    },
    date: {
        fontSize: 12,
        color: 'white',
    },
    message: {
        paddingLeft:5,
        color: 'white',
    },   

});