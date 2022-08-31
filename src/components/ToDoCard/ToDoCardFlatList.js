import React, {useState} from 'react';
import {FlatList, SafeAreaView, View, Text} from 'react-native';
import ToDoCard from './ToDoCard';
import tododata from '../../todo-data.json';
import styles from './ToDoCard.styles';

const ToDoCardFlatList = todo => {
  const [todos, setTodos] = useState(tododata);
  const renderToDo = ({item}) => <ToDoCard todo={item} />;
  const renderKey = item => item.id.toString();

  const activeTodo = todos.filter(todo => todo.isCompleted);
  return (
    <SafeAreaView>
      <FlatList
        data={tododata}
        renderItem={renderToDo}
        keyExtractor={renderKey}
        ListHeaderComponent={() => {
          return (
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Yapılacaklar</Text>
              <Text style={styles.header}>{activeTodo.length}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default ToDoCardFlatList;
