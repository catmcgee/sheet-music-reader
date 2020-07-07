import * as React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Header from '../components/Header'       

const HowToUseCodaScreen = (props) => {
    const { navigation } = props
    return (
        <View style={{flex:1, backgroundColor: '#E4E4E4'}}>
            <Header 
                title='How to use Coda' 
                onBack={navigation.goBack}
            />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ height: '100%'}}
                >
                <View style={styles.container}>

                    <Text style={styles.heading}>
                        CodaView
                    </Text>
                    <Text style={styles.description}>
                        CodaView allows you to view your sheet music as you’re playing. With its automatic scroll & zoom functionality, you will not have to touch the screen and can focus on your piano keys! CodaView’s algorithm will pick up ok the speed that is written at the top of the page. You can change the speed at any time by tapping the left of the screen to slow down, or the right to speed up.
                    </Text>

                    <Text style={[styles.heading, {marginTop: 20}]}>
                        Uploading sheet music
                    </Text>
                    <Text style={styles.description}>
                        To upload your own sheet music, go to the CodaView tab and select ‘Upload.’ Once you upload a piece of music, it will be saved in ‘My Music’ and you can open it in CodaView whenever you like.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}
export default HowToUseCodaScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 30
    },
    heading: {
        fontSize: 20,
        fontFamily: 'Helvetica-Regular',
        color: 'black'
    },
    description :{
        fontSize: 17,
        fontFamily: 'Helvetica-Light',
        color: '#323132',
        lineHeight: 25,
        marginTop: 10
    }
})