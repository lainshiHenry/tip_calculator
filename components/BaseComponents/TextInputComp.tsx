import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export interface TextInputCompInterface{
  placeholder?: string,
  valueNum?: number,
  onUpdateCallbackFn?: Function,
  isEditable?: boolean,
  isNumField?: boolean,
}

const TextInputComp = ({
  placeholder = '',
  valueNum = 0,
  onUpdateCallbackFn = () => {},
  isEditable = true, 
  isNumField = false,
}: TextInputCompInterface) => {

  return (
    <TextInput 
      editable={isEditable}
      value={valueNum.toString()}
      onChangeText={(newValue) => {
        if( newValue === ''){
          onUpdateCallbackFn(0);
        } else {
          onUpdateCallbackFn(parseInt(newValue))
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
    width: 150, 
    borderStyle: 'solid', 
    borderWidth: 1, 
    textAlign: 'center'
  }
});

export default TextInputComp