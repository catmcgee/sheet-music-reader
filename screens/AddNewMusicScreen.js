import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
import Header from '../components/Header'
import ImagePicker from 'react-native-image-crop-picker';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import ImageSwiper from '../components/ImageSwiper'
const AddNewMusicScreen = (props) => {
    const { navigation } = props
    const [imagesPath, setimagesPath] = useState([])
    const [composerName, setComposerName] = useState('')
    const [musicTitle, setMusicTitle] = useState('')

    const selectImage = () => {
        ImagePicker.openPicker({
            multiple: true,
            width: 300,
            height: 400,
          }).then(images => {
            console.log('image', images)
            const imagesPathArray = images.map((image) => image.path)
            setimagesPath(imagesPathArray)
          });
    }

    const saveInToMusicList = async () => {
        const musicList = await AsyncStorage.getItem('musicList')
        if(!musicList){
            const music = [
                {
                    composerName,
                    musicTitle,
                    imagesPath
                }
            ]
            await AsyncStorage.setItem('musicList', JSON.stringify(music))
        }else {
            const musicListArray = JSON.parse(musicList)
            const newMusicObj  = {
                composerName,
                musicTitle,
                imagesPath
            }
            musicListArray.push(newMusicObj)
            await AsyncStorage.setItem('musicList', JSON.stringify(musicListArray))
        }

        setMusicTitle('')
        setimagesPath('')
        setComposerName('')
        navigation.goBack()
    }

    return (
        <View style={{flex: 1}}>
            <Header
                onBack={navigation.goBack}
                title="My music" 
            />
            <View style={styles.mainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.heading}>
                        Upload New Music
                    </Text>

                    <View style={{marginTop: 20}}>
                        <TextInput
                            placeholder="Composer Name*"
                            style={styles.inputText}
                            value={composerName}
                            onChangeText={text => setComposerName(text)}
                        />
                    </View>
                    <View style={{marginTop: 20}}>
                        <TextInput
                            placeholder="Music Title*"
                            style={styles.inputText}
                            value={musicTitle}
                            onChangeText={text => setMusicTitle(text)}
                        />
                    </View>
                    {imagesPath.length > 0 &&
                        <View style={{marginTop: 20, width: 250, height: 300, alignSelf: 'center'}}>
                            <ImageSwiper images={imagesPath} />
                        </View>
                    }
                    <View style={{marginTop: 20}}>
                        <Button 
                            icon="camera"
                            mode="contained" 
                            onPress={() => selectImage()}
                            color='#614385'
                        >
                            Select Music Image
                        </Button>
                    </View>

                    <View style={{marginTop: 20}}>
                        <Button 
                            mode="contained" 
                            disabled={!imagesPath || !musicTitle || !composerName}
                            onPress={() => saveInToMusicList()}
                            color='#614385'
                        >
                            Save
                        </Button>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default AddNewMusicScreen

const styles = StyleSheet.create({
    mainContainer:  {
        flex: 1,
        padding: 20
    },
    heading: {
        fontSize: 18,
        fontFamily: 'Helvetica-Light',
        textAlign: 'center'
    },
    inputText: {
        width: '100%', 
        borderWidth: 1, 
        borderColor: '#614385',
        paddingHorizontal: 10,
        fontFamily: 'Helvetica-Regular',
        borderRadius: 10,
        fontSize: 16,
        height: 50
    }
})