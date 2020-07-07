import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { StackActions } from '@react-navigation/native';

const bottomTabBarDetail = [
    {
        title: 'My mucis',
        icon: 'home',
    },
    {
        title: 'CodeView',
        icon: 'audiotrack'
    },
    {
        title: 'More',
        icon: 'more-horiz'
    }
]

const BottomTabBar = (props) => {
    console.log('props', props)
    return (
        <View style={{width: '100%', flexDirection: 'row', height: 55}}>
            {props.state.routes.map((route, index) => {
                var isActive = props.state.index === index
                return (
                    <TouchableOpacity 
                        style={styles.touchableView}
                        onPress={() => {
                            props.navigation.navigate(route.name)
                        }}
                    >
                        <MaterialIcons
                            name={bottomTabBarDetail[index].icon}
                            size={25}
                            style={{
                                alignSelf: 'center',
                                color: isActive ? '#614385' : '#545454'
                            }}
                        />
                        <Text style={[styles.tabText, {color: isActive ? '#614385' : '#545454'}]}>
                            {bottomTabBarDetail[index].title}
                        </Text>
                    </TouchableOpacity>
                )
            })
            }
        </View>
    )
}

export default BottomTabBar

const styles = StyleSheet.create({
    touchableView: {
        flex:1, 
        justifyContent: 'center', 
        alignContent: 'center'
    },
    tabText: {
        textAlign: 'center',
        fontFamily: 'Helvetica-Light',
        fontSize: 14
    }
})