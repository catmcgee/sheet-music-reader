import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Header from '../components/Header'
import { TouchableRipple } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const CodaViewScreen = (props) => {
    const { navigation } = props
    return (
        <View style={styles.mainContainer}>
            <Header title='CodaView' />
            <View style={{flexDirection: 'row', marginTop: 20, paddingVertical: 20}}>
                <View style={{width: '50%', padding: 20}}>
                    <TouchableRipple 
                        style={[styles.buttonView, {width: '100%'}]}
                        rippleColor="rgba(0, 0, 0, .32)" 
                        onPress={() => navigation.navigate('MusicStack', {
                            screen: 'AddNewMusicScreen'
                        })}
                     >
                       <View>
                            <MaterialIcons
                                name={'backup'}
                                size={70}
                                style={styles.buttonIcon}
                            />
                            <Text style={styles.buttonText}
                            >
                                Upload
                            </Text>
                       </View>
                    </TouchableRipple>
                </View>
                <View style={{width: '50%', padding: 20}}>
                    <TouchableRipple 
                        style={[styles.buttonView, {width: '100%'}]}
                        rippleColor="rgba(0, 0, 0, .32)" 
                        onPress={() => navigation.navigate('MusicStack', {
                            screen: 'MusicListScreen'
                        })}
                     >
                       <View>
                        <MaterialIcons
                                name={'home'}
                                size={70}
                                style={styles.buttonIcon}
                            />
                            <Text style={styles.buttonText}
                            >
                                My music
                            </Text>
                       </View>
                    </TouchableRipple>
                </View>
            </View>
            <View style={{paddingLeft: 20}}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('MoreDetailStack', {
                            screen: 'HowToUseCodaScreen'
                        })
                    }}
                >
                    <Text style={styles.instructionText}>
                        {'>'} View Instructions.
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CodaViewScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#E4E4E4',
    },
    buttonView: {
        backgroundColor: 'white', 
        justifyContent: 'center', 
        paddingVertical: 30,
        borderRadius : 20
    },
    buttonIcon: {
        alignSelf: 'center',
        color: '#323132'
    },
    buttonText: {
        textAlign: 'center', 
        fontSize: 22,
        color: '#323132',
        fontFamily: 'Helvetica-Light'
    },
    instructionText: {
        fontSize: 18, 
        fontFamily: 'Helvetica-Light', 
        color: '#323132'
    }
})