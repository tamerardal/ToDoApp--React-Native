import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = ({todo, isChanged}) => {
  const isChangedd = () => isChanged(todo.id);

  return (
    <TouchableOpacity onPress={isChangedd}>
      <View
        style={todo.isCompleted ? styles.noncontainer : styles.compContainer}>
        <Text style={todo.isCompleted ? styles.title : styles.titleComp}>
          {todo.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ToDoCard;
