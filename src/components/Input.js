import { StyleSheet, TextInput, View } from 'react-native'

const CusInput = ({placeholder, type}) => {
    return (
      <View style={styles.container}>
        <TextInput
            placeholder={placeholder}
            style={[
                styles.Input,
                styles[`${type}`],
            ]}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    Input: {
            width: 300,
            borderStyle: 'solid',
            borderColor: '#ddddde',
            paddingLeft: 16,
            fontSize: 16,
    },

    Border_Rds_N: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderWidth: 1,
        height: 46,
    },

    Border_Rds_T1: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        height: 46,
    },

    Border_Rds_T2: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        height: 46,
    },

    Border_Rds_B: {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderWidth: 1,
        height: 45,
    }
});

export default CusInput