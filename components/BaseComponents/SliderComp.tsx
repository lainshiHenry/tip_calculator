import React, { useState } from 'react'
import Slider from '@react-native-community/slider';
import { StyleSheet, View, Text } from 'react-native';

interface SliderProps{
    minValue: number,
    maxValue: number,
    currentValue: number,
    onSliderCompleteCallback: Function,
};

const SliderComp = ({minValue = 0, maxValue, currentValue, onSliderCompleteCallback}: SliderProps) => {
  const [currentSelectedValue, setCurrentSelectedValue] = useState(currentValue);

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        value={currentValue}
        maximumValue = {maxValue}
        minimumValue = {minValue}
        lowerLimit = {minValue}
        upperLimit = {maxValue}
        step={1}
        // onSlidingComplete={(newValue: number) => {onSliderCompleteCallback(newValue)}} 
        onValueChange={(newValue: number) => {
          setCurrentSelectedValue(newValue);
          onSliderCompleteCallback(newValue);
        }}
      >
      </Slider>
      <View style={styles.textContainer}>
        <Text>{minValue} %</Text>
        <Text>{currentSelectedValue + '%'}</Text>
        <Text>{maxValue + '%'}</Text>
      </View>
    </View>
    
  )
}

export default SliderComp

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000'
  },
  slider: {
    width: '100%'
  },
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

}); 