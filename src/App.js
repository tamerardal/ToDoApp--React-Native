import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import ToDoCardFlatList from './components/ToDoCard/ToDoCardFlatList';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ToDoCardFlatList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f4f4f',
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    color: 'orange',
    padding: 5,
    paddingLeft: 10,
  },
  headerContainer: {
    flexDirection: 'row',
  },
});

export default App;
