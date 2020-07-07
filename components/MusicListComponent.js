import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableRipple } from 'react-native-paper';

const MusicListComponent = (props) => {
    const { title, composer, onPress } = props
    return (
        <TouchableRipple
            rippleColor="rgba(0, 0, 0, .32)" 
            style={styles.listView}
            onPress={() => onPress()}
            >
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.listComposerView}>
                        <Text numberOfLines={1} style={styles.listText}>
                            {composer}
                        </Text>
                    </View>
                    <View style={styles.listNameView}>
                        <Text numberOfLines={1} style={[styles.listText, { paddingLeft: 10 }]}>
                            {title}
                        </Text>
                    </View>
                </View>
                <View style={{ width: '10%', justifyContent: 'center'}}>
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
    listComposerView: {
        width: '30%', 
        borderRightWidth:1, 
        alignSelf: 'center',
        paddingRight: 10,

    },
    listText: {
        fontSize: 16,
        fontFamily: 'Helvetica-Regular'
    },
    listNameView: {
        width: '60%', 
        alignSelf: 'center',
        paddingLeft: 10,
    }
})