/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View, Text, Alert} from 'react-native';
import ToDoCard from './ToDoCard';
import styles from './ToDoCard.styles';
import AddToDo from '../ToDoAdd/ToDoInput';

let dataTodo = [];

const ToDoCardFlatList = () => {
  const [todos, setTodos] = useState(dataTodo);
  const [input, setInput] = useState('');

  const handleAddToDo = () => {
    let todoItem = {
      id: Math.random(),
      title: input.trim(),
      isCompleted: true,
    };
    dataTodo.push(todoItem);
    setTodos(dataTodo);
    setInput('');
  };

  const deleteTodo = id => {
    dataTodo = dataTodo.filter(item => item.id !== id);
    setTodos(dataTodo);
  };

  const changeIsDone = id => {
    dataTodo.map(item => {
      if (item.id === id) {
        item.isCompleted = false;
        return item;
      } else {
        return item;
      }
    });
    setTodos(dataTodo);
  };

  const renderToDo = ({item}) => (
    <ToDoCard todo={item} onPress={changeIsDone} onLongPress={deleteTodo} />
  );

  const listHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Yapılacaklar</Text>
        <Text style={styles.header}>{activeTodo.length}</Text>
      </View>
    );
  };

  const activeTodo = todos.filter(todo => todo.isCompleted);
  const todoKey = item => item.id.toString();

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <FlatList
        data={todos}
        renderItem={renderToDo}
        keyExtractor={todoKey}
        ListHeaderComponent={listHeader}
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
