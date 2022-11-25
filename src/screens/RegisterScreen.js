import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import CusButton from '../components/Button';
import CusInput from '../components/Input';
import { useNavigation } from '@react-navigation/native'

export default function RegisterScreen(){
    const navigation = useNavigation();
    return (
      <View style={styles.body}>
        <View style={styles.app}>
            <View style={styles.content}>
                <Image style={styles.img} source={require('../assets/FBLogin.png')} />
                <CusInput placeholder="Tên đăng nhập" type={`Border_Rds_N`} />
                <CusInput placeholder="Số điện thoại hoặc email" type={`Border_Rds_T2`} />
                <CusInput placeholder="Mật khẩu" type={`Border_Rds_B`} />
                <CusButton text={'Đăng kí'} />
                <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
                    <Text style={styles.come_back}>Quay lại</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    app: {
        
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: null,
        aspectRatio: 800 / 500,
        marginBottom: 20,
    },
    come_back: {
        fontSize: 16,
        color: '#196fdf',
        marginTop: 12,
        fontWeight: 'bold',
        marginBottom: 20,
    },
})