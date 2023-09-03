import React from 'react'
import { StyleSheet, View } from 'react-native'

const LineComp = () => {
  return (
    <View style={lineStyle.line} />
  )
}

export default LineComp

const lineStyle = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  }
});