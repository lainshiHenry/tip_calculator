import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export interface TextInputCompInterface{
  placeholder?: string,
  value?: number,
  onUpdateCallbackFn?: Function,
  isEditable?: boolean,
  isNumField?: boolean,
  appendString?: string,
  prependString?: string,
}

const TextInputComp = ({
  placeholder = '',
  value = 0.00,
  onUpdateCallbackFn = () => {},
  isEditable = true, 
  isNumField = false,
  appendString = '',
  prependString = '',
}: TextInputCompInterface) => {

  return (
    <TextInput 
      placeholder='$0.00'
      editable={isEditable}
      value={value === 0 || value === undefined ? '' : `${value.toFixed(2)}${appendString}`}
      onKeyPress={(e) => {

        if( e.nativeEvent.key === 'Backspace' ){
          if(value === 0 || value.toString().length === 1 ){
            onUpdateCallbackFn(0);
          } else {
            let temp = value.toString();
            temp = temp.slice(0, temp.length - 1);
            onUpdateCallbackFn(parseInt(temp));
          }
        } else {
            let temp = value.toString() + e.nativeEvent.key;
            onUpdateCallbackFn(parseInt(temp));
        }
        
      }}
      style={styles.textInput}
      keyboardType={isNumField ? 'numeric' : 'default'}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 40, 
    width: '100%', 
    borderWidth: 0, 
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderStyle: 'solid', 
    textAlign: 'center',
    marginBottom: 20
  }
});

export default TextInputComp