import React, {useEffect, useRef, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import SliderComp from './components/BaseComponents/SliderComp';
import TextInputComp from './components/BaseComponents/TextInputComp';
import LineComp from './components/BaseComponents/LineComp';

const windowWidth = Dimensions.get('window').width;

export default function App() {
  
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [tipsValue, setTipsValue] = useState(0);
  const [tipsPerc, setTipsPerc] = useState(15);

  function _updateValues(){
    if( subTotal <= 0 ){
      setTotal(0);
    } else {
      let temp = subTotal + tipsValue;
      setTotal(temp);
    }
  }

  function _updateTipsValue(){
    if( subTotal <= 0){
      setTipsValue(0);
    } else {
      setTipsValue(subTotal * (tipsPerc / 100));
    }
  }

  useEffect(() => {
    _updateTipsValue();
    _updateValues();
  }, [subTotal, tipsValue])

  useEffect(() => {
    _updateTipsValue();
  }, [tipsPerc])

  return (
    <View style={styles.container}>
      {/* Text input for subtotal */}
      <View style={styles.topSection}>
        <Text>SubTotal</Text>
        <TextInputComp 
          value={subTotal}
          isNumField={true}
          prependString='$'
          onUpdateCallbackFn={(newValue) => {
            setSubTotal(newValue);
          }}
        />

        {/* Text input for tips */}
        <Text>Tips: </Text>
        <TextInputComp 
          isEditable={false}
          value={tipsValue}
          prependString='$'
        />

        {/* Text input for total */}
        <Text>Total</Text>
        <TextInputComp 
          isEditable={false}
          value={total}
          prependString='$'
        />
      </View>
      <LineComp />
      <View style={styles.bottomSection}>
        {/* Text input for tips */}
        <Text>Tips %: </Text>
        {/* Slider bar for tips */}
        <SliderComp 
          minValue={0}
          maxValue={50}
          currentValue={15}
          onSliderCompleteCallback={setTipsPerc}
        />
      </View>

      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topSection: {
    width: '70%',
  },
  bottomSection: {
    width: '70%',
    alignItems: 'center'
  }
});
