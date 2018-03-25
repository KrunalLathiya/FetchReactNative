import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import SearchComponent from './src/components/SearchComponent';

export default class App extends React.Component {
  render() {
    return (
        <NavigatorIOS
          style={styles.container}
          initialRoute = {{
           title: 'Fetch Example',
           component: SearchComponent
         }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});
