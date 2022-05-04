import { useFocusEffect, useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
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
        <ScrollView>
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
                            <View style={styles.box}>
                           <Text style={styles.title} >{data.title} </Text>
                           </View>
                           <View style={styles.boxs}>
                           <Text style={styles.description} >{data.description}</Text>
                           </View>
                        </TouchableOpacity>
                    ))}
                </React.Fragment>
                :
                <Text>No data</Text>
            }
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
marginTop: 10
    },
   title:{
       fontSize: 25,
       backgroundColor: '#A8D8D8',
       marginTop: 1,
       paddingHorizontal: 120,
       width: 330,
       paddingLeft: 20,
      fontWeight: 'bold',
   },
   description:{
    fontSize: 20,
    backgroundColor: '#E1EDE6',
    paddingHorizontal: 120,
    width: 330,
    paddingLeft: 20,
   },
   box:{
       backgroundColor: '#E5E5E5',
       width: 330,
       
   },
   boxs:{
    backgroundColor: '#E5E5E5',
    width: 330,
    marginBottom: 20,
},
});
