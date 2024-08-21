import { useState } from 'react';
import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface ITodo {
  id: number;
  name: string;
}

export default function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  const randomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!todo) return;
    setListTodo([...listTodo, { id: randomInteger(2, 100000), name: todo }]);
    setTodo("");
  }

  const deleteTodo = (id: number) => {
    const newTodo = listTodo.filter(item => item.id !== id);
    setListTodo(newTodo);
  }

  // { id: 1, name: "thang" }
  return (
    <View style={styles.container}>
      {/* header */}
      <Text style={styles.header}>Todo App</Text>

      {/* form */}
      <View style={styles.body}>
        <TextInput
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => setTodo(value)}
        />
        <Button
          title='Add todo'
          onPress={() => handleAddTodo()}
        />
      </View>

      {/* list todo  */}
      <View style={styles.body}>
        <FlatList
          keyExtractor={(item) => item.id + ""}
          data={listTodo}
          renderItem={({ item }) => {
            return (
              <Pressable
                style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                onPress={() => deleteTodo(item.id)}
              >
                <Text style={styles.todoItem}>{item.name}</Text>
              </Pressable>
            )
          }}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "yellow",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 40,
  },
  container: {
    paddingTop: 50,
    // paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#ccc',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 5,
    margin: 15,
  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  todoItem: {
    fontSize: 30,
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 20,
    padding: 10,
  }
});
