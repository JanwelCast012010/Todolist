import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import TodoAddScreen from '../screens/Home/TodoAddScreen';
import TodoListScreen from '../screens/Home/TodoListScreen';
import { HomeParamList } from '../types';
import TodoUpdateScreen from "../screens/Home/TodoUpdateScreen";
import TabOneScreen from "../screens/TabOneScreen";
import Navigation from ".";
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator<HomeParamList>();

export default function HomeNavigator() {
    return (

        <Stack.Navigator 
            initialRouteName='TodoList'
            screenOptions={({ navigation }) => ({
                headerStyle:{
                    backgroundColor:'#11606F',
                    
                },
                headerTitleStyle:{
                        color:'#D9BE8E',
                        fontWeight: 'bold',
                },
    
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("TodoAdd");
                        }}
                    >
                        <Text style={styles.add}>+</Text>
                    </TouchableOpacity>
                )
            })}
        >
            
            <Stack.Screen name="TodoList" component={TodoListScreen} />
            <Stack.Screen name="TodoAdd" component={TodoAddScreen}
                options={{
                    headerRight: () => null
                }}
            />
            <Stack.Screen name="TodoUpdate" component={TodoUpdateScreen} />
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({
    add: {
        fontSize: 40,
        color: '#D9BE8E',
        marginRight:20,
        fontWeight: 'bold',
    },
});