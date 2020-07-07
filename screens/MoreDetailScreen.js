import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import Header from '../components/Header'       
import MoreListComponent from '../components/MoreListComponent'
const MoreDetailScreen = (props) => {
    const { navigation } = props
    return (
        <View style={styles.mainContainer}>
            <Header title='More' />
            <View style={{padding: 20}}>
                <MoreListComponent  
                    title='How to use Coda' 
                    onPress={() => navigation.navigate('HowToUseCodaScreen')}
                />
                <Text style={styles.commingSoonText}>
                    Settings and Profile comming soon!
                </Text>
            </View>
        </View>
    )
}
export default MoreDetailScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#E4E4E4'
    },
    commingSoonText: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Helvetica-Light',
        marginTop: 10
    }
})