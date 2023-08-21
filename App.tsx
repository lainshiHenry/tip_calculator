import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import SliderComp from './components/BaseComponents/SliderComp';

export default function App() {
  const [slideValueText, setSlideValueText] = useState(0);

  function _updateSliderValueCallback(newValue: number){
    setSlideValueText(newValue);
    console.log(newValue);
  }

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <TextInput
        editable={false}
        style={{height: 40, width: 150, borderStyle: 'solid', borderWidth: 1, textAlign: 'center'}}
        value={slideValueText.toString()}
      />
      <StatusBar style="auto" />
      <SliderComp 
        minValue={0}
        maxValue={100}
        currentValue={0.5}
        onSliderCompleteCallback={_updateSliderValueCallback}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
