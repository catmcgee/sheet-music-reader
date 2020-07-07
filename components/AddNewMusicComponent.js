import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableRipple } from 'react-native-paper';

const MusicListComponent = (props) => {
    const { onPress } = props
    return (
        <TouchableRipple
            rippleColor="rgba(0, 0, 0, .32)" 
            style={styles.listView}
            onPress={onPress}
            >
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.addButtonView}>
                        <MaterialIcons
                            name={'add-circle'}
                            size={30}
                            style={{
                                alignSelf: 'center',
                                color: '#614385'
                            }}
                        />
                    </View>
                    <View style={styles.listNameView}>
                        <Text numberOfLines={1} style={[styles.listText, { paddingLeft: 10 }]}>
                            Upload New
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableRipple>
    )
}

export default MusicListComponent

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
    listContainer: {
        paddingVertical: 20
    },
    addButtonView: {
        alignSelf: 'center',
    },
    listText: {
        fontSize: 16,
        fontFamily: 'Helvetica-Light'
    },
    listNameView: {
        alignSelf: 'center',
        paddingLeft: 10,
    }
})