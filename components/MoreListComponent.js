import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableRipple } from 'react-native-paper';

const MoreListComponent = (props) => {
    const { title, onPress } = props
    return (
        <TouchableRipple
            rippleColor="rgba(0, 0, 0, .32)" 
            style={styles.listView}
            onPress={onPress}
            >
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.listComposerView}>
                        <AntDesign
                            name={'question'}
                            size={30}
                            style={{
                                alignSelf: 'center',
                            }}
                        />
                    </View>
                    <View style={styles.listNameView}>
                        <Text numberOfLines={1} style={[styles.listText]}>
                            {title}
                        </Text>
                    </View>
                </View>
                <View style={{ alignSelf: 'flex-end' }}>
                    <MaterialIcons
                        name={'keyboard-arrow-right'}
                        size={30}
                        style={{
                            alignSelf: 'center',
                        }}
                    />
                </View>
            </View>
        </TouchableRipple>
    )
}

export default MoreListComponent

const styles = StyleSheet.create({
    listView: {
        width: '100%', 
        flexDirection: 'row', 
        height: 50, 
        alignContent:'center', 
        padding: 10, 
        backgroundColor: '#ffffff',
        marginBottom: 15
    },
    listComposerView: {
        alignSelf: 'center',
        marginRight: 20
    },
    listText: {
        fontSize: 16,
        fontFamily: 'Helvetica-Regular'
    },
    listNameView: {
        alignSelf: 'center',
    }
})