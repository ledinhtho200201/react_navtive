import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Quang", age: 18 },
    { id: 2, name: "Minh", age: 12 },
    { id: 3, name: "Hai", age: 15 },
    { id: 4, name: "Hoa", age: 23 },
    { id: 5, name: "Nam", age: 22 },
    { id: 6, name: "Tien", age: 18 },
    { id: 7, name: "Viet", age: 29 },
  ])
  //jsx
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>Hello world!</Text>
      <ScrollView>
        {students.map(item => {
          return (
            <View
              style={{
                padding: 30,
                backgroundColor: "purple",
                marginBottom: 30,
              }}
            >
              <Text key={item.id}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#ccc',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
