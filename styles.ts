import {StyleSheet} from 'react-native';

export function StyleSheetContent() {
  return StyleSheet.create({
    bold: {
      fontWeight: 'bold',
    },
    buttonContainer: {
      height: 300,
      width: '80%',
      justifyContent: 'space-between',
      marginTop: 30,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E5ECFF',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    textInput: {
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: 1,
      height: 40,
      marginTop: 20,
      textAlign: 'center',
      width: '80%',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });
}
