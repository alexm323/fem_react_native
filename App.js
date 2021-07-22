import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* we can pass in an array of styles and it will cascade so the last one shows */}
      <View style={[styles.container]}>
        <Text style={styles.text}>
          Here are some boxes of different colours
        </Text>
        <ColorBox colorName="Cyan" hexCode="#2aa198" />
        <ColorBox colorName="Blue" hexCode="#268bd2" />
        <ColorBox colorName="Magenta" hexCode="#d33682" />
        <ColorBox colorName="Orange" hexCode="#cb4b16" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default App;
