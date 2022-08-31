import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, Alert} from 'react-native';
import ToDoCardFlatList from './components/ToDoCard/ToDoCardFlatList';
import AddToDo from './components/ToDoAdd/ToDoInput';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ToDoCardFlatList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f4f4f',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
});

export default App;
