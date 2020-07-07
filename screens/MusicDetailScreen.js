import React, {useState} from 'react';
import { View, Text,ScrollView, StyleSheet, Image } from 'react-native'
import Header from '../components/Header'
import { TouchableRipple } from 'react-native-paper';
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-community/async-storage';
import ImageSwiper from '../components/ImageSwiper'

const MusicDetailScreen = (props) => {
    const { route, navigation } = props    
    const [showDeleteAlert, setShowDeleteAlert] = useState(false)
    console.log('route', route)
    const deleteMusicFromList = async () => {
        const musicList = await AsyncStorage.getItem('musicList')
        const musicListArray = JSON.parse(musicList)
        musicListArray.splice(route.params.index, 1)
        const musicListUpdated = JSON.stringify(musicListArray)
        await AsyncStorage.setItem('musicList', musicListUpdated)
        navigation.goBack()
    }

    return (
        <View style={styles.mainContainer}>
            <Header 
                title='My music' 
                onBack={navigation.goBack}
            />
            <ScrollView style={{height: '100%', marginTop: 20}}>
                <Text style={styles.heading}>
                    {route.params.composerName}, {route.params.musicTitle}
                </Text>
                {route.params.imagesPath.length > 0 &&
                    <View style={{marginTop: 20, width: 250, height: 300, alignSelf: 'center'}}>
                        <ImageSwiper images={route.params.imagesPath} />
                    </View>
                }
                {/* <Image 
                    resizeMode='contain'
                    style={{ 
                        height: 230, 
                        width: 200, 
                        alignSelf: 'center',
                        marginTop: 30
                    }} 
                    source={{uri: route.params.imagePath}}
                /> */}
                <TouchableRipple 
                    style={styles.playButton}
                    rippleColor="rgba(0, 0, 0, .32)" 
                >
                    <Text style={styles.playText}>
                        Play
                    </Text>
                </TouchableRipple>
                <Text style={styles.descriptionText}>
                    Open {route.params.musicTitle} by {route.params.composerName} in CodaView
                </Text>

                <TouchableRipple 
                    rippleColor="rgba(0, 0, 0, .32)" 
                    style={styles.deleteButton}
                    onPress={() => setShowDeleteAlert(!showDeleteAlert)}
                >
                    <Text style={styles.deleteText}>
                        x Delete from my music
                    </Text>
                </TouchableRipple>

                <AwesomeAlert
                    show={showDeleteAlert}
                    showProgress={false}
                    title="Delete Music"
                    message="Are you sure to delete this music"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No, cancel"
                    confirmText="Yes, delete it"
                    confirmButtonColor="#DD6B55"
                    onCancelPressed={() => {
                        setShowDeleteAlert(!showDeleteAlert)
                    }}
                    onConfirmPressed={() => {
                        deleteMusicFromList()
                    }}
                    />
            </ScrollView>
        </View>
    )
}
export default MusicDetailScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#E4E4E4'
    },
    heading: {
        fontSize: 22,
        fontFamily: 'Helvetica-Light',
        textAlign: 'center',
        color: '#614385'
    },
    playButton: {
        backgroundColor: '#614385',
        height: 50, 
        width: 120,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    playText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Helvetica-Light'
    },
    descriptionText: {
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Helvetica-Light',
        fontSize: 16,
        color: '#614385'
    },
    deleteButton: {
        backgroundColor: '#C60708',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        paddingHorizontal: 10,
    },
    deleteText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Helvetica-Light'
    }
})