import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { View, ImageBackground, Container, Text, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

const LoginMobileView = (props) => {
    const {
        user,
        confirmResult,
        signIn,
        renderVerificationCodeInput,
        renderMessage,
        phoneNumber,
        valueChange,
        codeInput
    } = props;
    const successImageUri = require('../../../assets/logo.png');

    return (
        <View>
            <ImageBackground source={successImageUri}
                style={styles.fullwidthHeight}
                resizeMode='cover'>

                <View>
                    {!user && !confirmResult &&
                        <View style={styles.boxStyle}>
                            <View>
                                <Text style={{ fontSize: 34, textAlign: 'center', color: 'white', marginVertical: 82 }}>Login</Text>
                            </View>
                            <Text style={[styles.textWhite, styles.marginLR]}>Enter phone number :</Text>
                            <View style={[styles.viewCardtype, styles.marginLR]}>
                                <TextInput
                                    autoFocus
                                    style={styles.inputText}
                                    onChangeText={(value) => valueChange(value)}
                                    placeholder={'Enter Phone number ... '}
                                    value={phoneNumber}
                                    keyboardType='number-pad'
                                    maxLength={13}
                                    placeholderTextColor='white'
                                />
                            </View>

                            <TouchableOpacity onPress={signIn} style={[styles.buttonDiv, styles.marginLR]}>
                                <Text style={styles.buttonDivText}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    }

                    {renderMessage()}

                    {!user && confirmResult && renderVerificationCodeInput()}


                    {user &&
                        <View style={styles.buttonDiv}>
                            {props.renderButton()}
                        </View>
                    }
                </View>
            </ImageBackground>
        </View>
    );


}

export default LoginMobileView;