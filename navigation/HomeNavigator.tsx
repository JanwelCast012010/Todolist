import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import TodoAddScreen from '../screens/Home/TodoAddScreen';
import TodoListScreen from '../screens/Home/TodoListScreen';
import { HomeParamList } from '../types';
import TodoUpdateScreen from "../screens/Home/TodoUpdateScreen";
import TabOneScreen from "../screens/TabOneScreen";
import Navigation from ".";

const Stack = createStackNavigator<HomeParamList>();

export default function HomeNavigator() {
    return (

        <Stack.Navigator
            initialRouteName='TodoList'
            screenOptions={({ navigation }) => ({
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("TodoAdd");
                        }}
                    >
                        <Text style={styles.add}>Add</Text>
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
        fontSize: 18,
        color: '#DF4C4C',
        marginRight:20,
    },
});