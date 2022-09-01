import React, {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = ({todo, onPress, onLongPress}) => {
  const pressed = () => onPress(todo.id);
  const longPressed = () => onLongPress(todo.id);

  return (
    <TouchableOpacity onPress={pressed} onLongPress={longPressed}>
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
