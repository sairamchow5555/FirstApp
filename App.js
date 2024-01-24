import { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddToDo';
import SandBox from './components/SandBox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffe', key: '1'},
    { text: 'create an app', key: '2'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {

    if(text.length >= 3){
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos,
        ]
      });
    } else {
      Alert.alert('OOPS!', 'Note should be min 3 Chars', [
        {text: 'OK', onPress: () => console.log('alert closed')}
      ]);
    }
  }

  return (
    // <SandBox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('keyboard dismissed');
    }}>
      <View style={styles.container}>
        { /* header */}
        <Header />
        <View style={styles.content}>
        { /* to form */}
        <AddToDo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding:40,
    backgroundColor: 'pink',
    flex: 1,
  },
  list: {
    marginTop: 20,
    backgroundColor: 'yellow',
    flex: 1,
  },
});
