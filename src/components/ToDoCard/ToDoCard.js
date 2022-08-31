import React from 'react';
import {View, Text} from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = ({todo}) => {
  return (
    <View>
      {todo.isCompleted ? (
        <View style={styles.noncontainer}>
          <Text style={styles.title}>{todo.title}</Text>
        </View>
      ) : (
        <View style={styles.compContainer}>
          <Text style={styles.titleComp}>{todo.title}</Text>
        </View>
      )}
    </View>
  );
};

export default ToDoCard;
