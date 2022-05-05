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
        <View style = {styles.container}>
        <ScrollView>
        <View>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#D9BE8E',
        
    },
   title:{
       fontSize: 25,
       backgroundColor: '#11606F',
       marginTop: 1,
       marginBottom:0,
       paddingHorizontal: 120,
       width: 330,
       paddingLeft: 20,
      fontWeight: 'bold',
      color:'#D9BE8E',
      paddingBottom:3,
   },
   description:{
    fontSize: 20,
    backgroundColor: '#ffffff',
    // paddingHorizontal: 120,
    width: '100%',
    paddingLeft: 20,
    alignItems: 'stretch',
    paddingRight:20,
    paddingBottom:3,
    color:'#11606F',
   },
   box:{
       backgroundColor: '#E5E5E5',
       width: 330,
       marginTop:10,
       
       
   },
   boxs:{
    backgroundColor: '#E5E5E5',
    width: 330,
   
},
});
