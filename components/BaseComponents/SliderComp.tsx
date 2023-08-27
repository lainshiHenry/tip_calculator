import React from 'react'
import Slider from '@react-native-community/slider';
import { StyleSheet } from 'react-native';

interface SliderProps{
    minValue: number,
    maxValue: number,
    currentValue: number,
    onSliderCompleteCallback: Function
};

const SliderComp = ({minValue = 0, maxValue, currentValue, onSliderCompleteCallback}: SliderProps) => {
  return (
    <Slider
      style={sliderStyles.slider}
      value={currentValue}
      maximumValue = {maxValue}
      minimumValue = {minValue}
      lowerLimit = {minValue}
      upperLimit = {maxValue}
      step={1}
      onSlidingComplete={(newValue: number) => {onSliderCompleteCallback(newValue)}}
      
    >

    </Slider>
  )
}

export default SliderComp

const sliderStyles = StyleSheet.create({
  slider: {
    width: '70%'
  }

}); 