import React  from 'react'

import { Image, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export default function SwitchScreen({navigation}) {
    
    console.ignoredYellowBox = ['Setting a timer'];

    const onLoginPress = () => {
        navigation.navigate('Login')
    }

    const onLoginMobilePress = async () => {
        navigation.navigate('LoginMobile')
      }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <FontAwesome name="envelope" size={30} color={'white'} />
                    <Text style={styles.buttonTitle}>Log in with e-mail</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginMobilePress()}>
                    <FontAwesome name="mobile" size={30} color={'white'} />
                    <Text style={styles.buttonTitle}>Log in with cellphone</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}