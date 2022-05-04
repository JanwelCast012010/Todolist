import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { getData, storeData } from "../../database/StoreData";
import Todo from "../../models/Todo";
import Navigation from "../../navigation";

export default function TodoAddScreen() {
    const navigation = useNavigation();
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');


    const submitTodo = async () => {
        const getTodos = await getData('todos');
        const data = new Todo(
            title,
            description
        );

        if (getTodos) {
            const json = JSON.parse(getTodos);
            await storeData('todos', JSON.stringify([data, ...json]));

        } else {
            await storeData('todos', JSON.stringify([data]));
        }

        navigation.goBack();
    }


    return (
        <View style={styles.container}>
            <TextInput
                autoComplete={true}
                value={title}
                onChangeText={setTitle}
                placeholder="Title"
            />
            <TextInput
                autoComplete={true}
                value={description}
                onChangeText={setDescription}
                placeholder="Description"
            />
            <TouchableOpacity
                style={{
                    marginVertical: 10,
                    backgroundColor: 'red',
                    alignItems: 'center',
                    padding: 20
                }}
                onPress={submitTodo}
            >
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
