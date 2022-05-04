import { useFocusEffect, useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { getData } from "../../database/StoreData";
import Todo from "../../models/Todo";

export default function TodoListScreen() {
    const navigation = useNavigation();
    const [todos, setTodos] = useState<Array<Todo> | null>(null);

    const retrieveData = async () => {
        const getTodos = await getData('todos');

        if (getTodos) {
            const json = JSON.parse(getTodos);
            setTodos(json);
        }
        console.log(getTodos);
    }

    useFocusEffect(useCallback(
        () => {
            retrieveData();
        },
        [],
    )
    )

    return (
        <View style={styles.container}>
            {todos ?
                <React.Fragment>
                    {todos.map((data: Todo, index: number) => (
                        <TouchableOpacity key={data.description}
                            onPress={() => {
                                navigation.navigate("TodoUpdate", {
                                    index: index,
                                    todo: data
                                });
                            }}
                        >
                            <Text >{data.title} x {data.description}</Text>
                        </TouchableOpacity>
                    ))}
                </React.Fragment>
                :
                <Text>No data</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
