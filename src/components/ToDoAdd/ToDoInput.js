import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import tododata from '../../todo-data.json';

const Separator = () => <View style={styles.separator} />;

const AddToDo = ({setInput, input, handleAddToDo}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacak..."
        onChangeText={setInput}
        value={input}
      />
      <Separator />
      <TouchableOpacity style={styles.button} onPress={handleAddToDo}>
        <Text style={styles.buttonText}>KAYDET</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#778899',
    margin: 5,
    borderRadius: 10,
  },
  input: {
    fontSize: 18,
    marginTop: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 5,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: '500',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'darkgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default AddToDo;
