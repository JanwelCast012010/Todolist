import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { getData, storeData } from "../../database/StoreData";
import Todo from "../../models/Todo";
import { HomeParamList } from "../../types";

type IRoute = {
    "params": HomeParamList['TodoUpdate']
}

export default function TodoUpdateScreen() {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<IRoute, "params">>();
    const index = route.params.index;
    const [title, setTitle] = useState<string>(route.params.todo.title);
    const [description, setDescription] = useState<string>(route.params.todo.description);


    const submitTodo = async () => {
        const getTodos = await getData('todos');
        const data = new Todo(
            title,
            description
        );

        if (getTodos) {
            const json = JSON.parse(getTodos);
            json[index] = data;
            await storeData('todos', JSON.stringify([...json]));
        }
        navigation.goBack();

    }

    const deleteTodo = async () => {
        const getTodos = await getData('todos');

        if (getTodos) {
            const json = JSON.parse(getTodos);
            json.splice(index, 1);
            await storeData('todos', JSON.stringify([...json]));
            navigation.goBack();
        }
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
                    backgroundColor: 'blue',
                    alignItems: 'center',
                    padding: 20
                }}
                onPress={submitTodo}
            >
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    marginVertical: 10,
                    backgroundColor: 'red',
                    alignItems: 'center',
                    padding: 20
                }}
                onPress={deleteTodo}
            >
                <Text>
                    DELETE
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
