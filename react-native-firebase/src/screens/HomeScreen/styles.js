import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    text: {
        color: 'white',
        position: 'absolute',
        bottom: 0,
        left: 30,
        fontSize: 17,
    },
    textTitle: {
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        bottom: 30,
        left: 30,
        fontSize: 22,
    },
    box: {  
        height: Dimensions.get('window').width / 2,
        width: Dimensions.get('window').width / 1.1,
        position: 'relative',
        top: 0,
        left: 10,
        flex: 0.3,
        marginTop: 30,
    },
    container: {
        top: 170,
    },
    star: {
        position: 'absolute',
        width: 40,
        height: 50,
        left: 300,
        top: 20,
    },
    logo: {
        height: 40,
        width: 40,
    },
})