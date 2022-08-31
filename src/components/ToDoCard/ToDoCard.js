import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = ({todo, isChanged}) => {
  return (
    <View>
      <TouchableOpacity onPress={isChanged}>
        <View
          style={todo.isCompleted ? styles.noncontainer : styles.compContainer}>
          <Text style={todo.isCompleted ? styles.title : styles.titleComp}>
            {todo.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoCard;
