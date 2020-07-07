import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const Header = (props) => {
    const { title, onBack } = props
    return (
        <View style={styles.container}>
            <View>
                {onBack && 
                    <TouchableOpacity
                    onPress={onBack}
                    >
                        <MaterialIcons
                            name={'keyboard-backspace'}
                            size={30}
                            color='white'
                        />
                    </TouchableOpacity>
                }
            </View>
            <View>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            <View>
                 {onBack && 
                    <MaterialIcons
                        name={'keyboard-backspace'}
                        size={30}
                        color='transparent'
                    />
                 }
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#614385',
        paddingHorizontal: 20
    },
    title: {
        fontFamily: 'Helvetica-Light',
        fontSize: 22,
        color: '#ffffff',
        textAlign: 'center',
    }
})