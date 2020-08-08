import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    titlebox: {
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        position: 'absolute',
        borderRadius: 25,
        borderColor: 'grey',
        flex: 0.3,
        backgroundColor: 'white'
    },
    titleb: {
        color: 'grey',
        textAlign: "center",
        marginTop: 50,
        fontSize: 25,
        fontWeight: 'bold',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    flat: {
        marginTop: Dimensions.get('window').width / 4,
    },
    text: {
        color: 'white',
        fontSize: 17,
        marginTop: Dimensions.get('window').width / 80,
        marginLeft: Dimensions.get('window').width / 20,
        borderColor: 'black',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
    },
    textTitle: {
        fontWeight: 'bold',
        color: 'white',
        marginTop: Dimensions.get('window').width / 6,
        marginLeft: Dimensions.get('window').width / 20,
        fontSize: 22,
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
    },
    box: {  
        height: Dimensions.get('window').width / 2,
        width: Dimensions.get('window').width / 1.1,
        position: 'relative',
        top: 0,
        left: 10,
        flex: 0.3,
        marginTop: 10,
        marginBottom: 15,
    },
    boxtitle: {
    },
    star: {
        width: 40,
        height: 50,
        marginLeft: Dimensions.get('window').width / 1.3,
        marginTop: Dimensions.get('window').width / 30,
    },
    logo: {
        height: 40,
        width: 40,
    },
})