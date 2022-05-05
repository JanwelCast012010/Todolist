import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
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
            <TextInput style={styles.title}
                autoComplete={true}
                value={title}
                onChangeText={setTitle}
                placeholder="Title"
            />
            <TextInput style={styles.description}
                autoComplete={true}
                value={description}
                onChangeText={setDescription}
                placeholder ="Description"
                multiline={true}
            />
            <TouchableOpacity
                style={{
                    marginVertical: 10,
                    backgroundColor: '#53DDB1',
                    alignItems: 'center',
                    padding: 20,
                    width: 335,
                    marginLeft: 10,
                    borderRadius:40,
                }}
                onPress={submitTodo}
            >
                <Text style={styles.submit}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        paddingTop: 10,
    },
    title: {
        fontFamily: 'poppins-regular',
        fontSize: 20,
        paddingLeft: 3,
        paddingRight: 7,
        margin: 8,
        backgroundColor: '#ffffff'
    },
    description:{
        fontFamily: 'poppins-regular',
        fontSize: 20,
        paddingLeft: 3,
        paddingRight: 7,
        margin: 8,
        height: 150,
        backgroundColor: '#ffffff'
    },
    submit:{
        fontSize: 20,
        color : '#ffffff',
    }
});
