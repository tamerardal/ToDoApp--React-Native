import React, {useState} from 'react';
import {FlatList, SafeAreaView, View, Text, Alert} from 'react-native';
import ToDoCard from './ToDoCard';
import styles from './ToDoCard.styles';
import AddToDo from '../ToDoAdd/ToDoInput';

const ToDoCardFlatList = todo => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Test',
      isCompleted: true,
    },
  ]);

  const [input, setInput] = useState('');
  // const [todos, setTodos] = useState(tododata);

  const handleAddToDo = () => {
    if (input === '') {
      return Alert.alert('Boş ekleme yapamazsınız.');
    }

    setTodos([...todos, {title: input, id: Math.random(), isCompleted: true}]);
    console.log(input);
    setInput('');
  };
  console.log(todos);
  const renderToDo = ({item}) => (
    <ToDoCard todo={item} isChanged={changeIsDone} />
  );

  const changeIsDone = id => {
    const newTodoList = todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todos;
    });
    setTodos(newTodoList);
  };

  const activeTodo = todos.filter(todo => todo.isCompleted);
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <FlatList
        data={todos}
        renderItem={renderToDo}
        ListHeaderComponent={() => {
          return (
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Yapılacaklar</Text>
              <Text style={styles.header}>{activeTodo.length}</Text>
            </View>
          );
        }}
      />
      <AddToDo
        handleAddToDo={handleAddToDo}
        input={input}
        setInput={setInput}
      />
    </SafeAreaView>
  );
};

export default ToDoCardFlatList;
