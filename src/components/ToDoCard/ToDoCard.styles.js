import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  noncontainer: {
    flex: 1,
    backgroundColor: '#228b22',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  compContainer: {
    backgroundColor: '#696969',
    flex: 1,
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 22,
    color: 'white',
  },
  titleComp: {
    fontSize: 22,
    color: 'white',
    textDecorationLine: 'line-through',
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
    flex: 1,
    justifyContent: 'space-between',
    paddingRight: 5,
  },
});
