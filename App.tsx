import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import SliderComp from './components/BaseComponents/SliderComp';
import TextInputComp from './components/BaseComponents/TextInputComp';

export default function App() {
  
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [taxValue, setTaxValue] = useState(0);
  const [tipsValue, setTipsValue] = useState(0);
  const [tipsPerc, setTipsPerc] = useState(15);

  function _updateValues(){
    if( subTotal <= 0 ){
      setTotal(0);
    } else {
      let temp = subTotal + taxValue + tipsValue;
      console.log(temp);
      setTotal(temp);
    }
  }

  useEffect(() => {
    _updateValues();
  }, [subTotal, taxValue, tipsValue])

  return (
    <View style={styles.container}>
      {/* Text input for subtotal */}
      <Text>SubTotal</Text>
      <TextInputComp 
        valueNum={subTotal}
        isNumField={true}
        onUpdateCallbackFn={(newValue: number) => {
          // console.log(newValue);
          setSubTotal(newValue);
        }}
      />

      {/* Text input for tips */}
      <Text>Tips</Text>
      <TextInputComp 
        isEditable={false}
        valueNum={tipsValue}
      />

      {/* Text input for total */}
      <Text>Total</Text>
      <TextInputComp 
        isEditable={false}
        valueNum={total}
      />

      {/* Text input for tips */}
      <TextInputComp
        valueNum={tipsValue}
        onUpdateCallbackFn={setTipsValue}
      />

      {/* Slider bar for tips */}
      <SliderComp 
        minValue={0}
        maxValue={50}
        currentValue={15}
        onSliderCompleteCallback={setTipsValue}
      />

      <StatusBar style="auto" />
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
  topSection: {},
  bottomSection: {}
});
