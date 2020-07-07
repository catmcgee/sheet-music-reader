import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../components/Header'
import MusicListComponent from '../components/MusicListComponent'
import AddNewMusicComponent from '../components/AddNewMusicComponent'
import AsyncStorage from '@react-native-community/async-storage';

const MusicListScreen = (props) => {
    const { navigation } = props
    const [musicList, setMusicList] = useState([])

    const getMusicList = async () => {
        const musicList = await AsyncStorage.getItem('musicList')
        console.log('musicList ====', musicList)
        if(musicList){
            setMusicList(JSON.parse(musicList))
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getMusicList()
        });

        return unsubscribe;
      }, [navigation])

    return (
        <View style={styles.mainContainer}>
            <Header title="My music" />
            <ScrollView style={styles.innerContainer}>
                <Text style={styles.heading}>
                    Previously played pieces
                </Text>
                <View style={styles.listContainer}>
                    {musicList.length > 0 ?
                    musicList.map((music, index) =>  {
                        return (
                            <MusicListComponent 
                                onPress={() => {
                                    console.log('navigations =====', navigation)
                                    navigation.navigate('MusicStack', { 
                                        screen: 'MusicDetailScreen',
                                        params: {
                                            composerName: music.composerName,
                                            musicTitle: music.musicTitle,
                                            imagesPath: music.imagesPath,
                                            index: index
                                        }
                                    })
                                }}
                                key={index} composer={music.composerName} title={music.musicTitle} 
                            />
                        )
                    })
                    :
                    <Text style={styles.emptyListText}>
                        You music list is empty
                    </Text>
                }
                    
                    <AddNewMusicComponent onPress={() => {
                        return navigation.navigate('MusicStack', { 
                            screen: 'AddNewMusicScreen'
                        })
                    }} />
                </View>
            </ScrollView>
        </View>
    )
}

export default MusicListScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#E4E4E4'
    },
    innerContainer: {
        padding: 20,
        flex: 1,
    },
    heading: {
        fontSize: 16,
        fontFamily: 'Helvetica-Light'
    },
    listView: {
        width: '100%', 
        flexDirection: 'row', 
        height: 50, 
        alignContent:'center', 
        padding: 10, 
        backgroundColor: '#ffffff'
    },
    listContainer: {
        paddingVertical: 20
    },
    listTitleView: {
        width: '35%', 
        borderRightWidth:1, 
        alignSelf: 'center',
        paddingRight: 10,

    },
    listText: {
        fontSize: 16,
        fontFamily: 'Helvetica-Regular'
    },
    listNameView: {
        width: '55%', 
        alignSelf: 'center',
        paddingLeft: 10,
    },
    emptyListText: {
        color: 'red', 
        textAlign: 'center', 
        fontFamily:'Helvetica-Regular', 
        marginBottom: 10,
        fontSize: 16
    }
})