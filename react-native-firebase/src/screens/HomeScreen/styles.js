import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    titlebox: {
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 1,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: 'grey',
        flex: 0.3,
        backgroundColor: 'white',
        position: 'absolute'
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
        position: 'absolute',
        top: 0,
        left: 30,
        fontSize: 17,
    },
    textTitle: {
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        bottom: 0,
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
        marginTop: 10,
        marginBottom: 15,
    },
    boxtitle: {
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