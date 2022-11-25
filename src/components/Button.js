import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CusButton = ({text, bgColor, fgColor, onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={[
                styles.btn,
                bgColor ? {backgroundColor: bgColor} : {}, 
                ]}>
                <Text style={[
                    styles.btn_text,
                    fgColor ? {color: fgColor} : {}, 
                    ]}>{text}
                </Text>
            </TouchableOpacity>
        </View>
      
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    btn: {
        width: 300,
        height: 42,
        backgroundColor: '#1977f3',
        borderRadius: 4,
    },
    btn_text: {
        color: '#fff',
        textAlign: 'center',
        lineHeight: 42,
        fontSize: 16,
    },
});

export default CusButton