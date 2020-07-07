import * as React from 'react';
import MusicListScreen from '../screens/MusicListScreen'
import MoreDetailScreen from '../screens/MoreDetailScreen'
import MusicDetailScreen from '../screens/MusicDetailScreen'
import CodaViewScreen from '../screens/CodaViewScreen'
import BottomTabBar from './Components/BottomTabBar'
import AddNewMusicScreen from '../screens/AddNewMusicScreen'
import HowToUseCodaScreen from '../screens/HowToUseCodaScreen'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MusicStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='MusicListScreen'>
            <Stack.Screen options={{title: 'My music'}} name="MusicListScreen" component={MusicListScreen} />
            <Stack.Screen options={{title: 'My music'}} name="MusicDetailScreen" component={MusicDetailScreen} />
            <Stack.Screen options={{title: 'My music'}} name="AddNewMusicScreen" component={AddNewMusicScreen} />
        </Stack.Navigator>
    )
}

const MoreDetailStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='MoreDetailScreen'>
            <Stack.Screen options={{title: 'More'}} name="MoreDetailScreen" component={MoreDetailScreen} />
            <Stack.Screen options={{title: 'How To Use Coda'}} name="HowToUseCodaScreen" component={HowToUseCodaScreen} />
        </Stack.Navigator>
    )
}

const MainNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName='MusicStack' tabBar={props => <BottomTabBar {...props} />}>
            <Tab.Screen name="MusicStack" component={MusicStack} />
            <Tab.Screen name="CodaViewScreen" component={CodaViewScreen} />
            <Tab.Screen name="MoreDetailStack" component={MoreDetailStack} />
        </Tab.Navigator>
    )
}

export default MainNavigator