

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} = React;

// var PlaceListScreen = require('./PlaceListScreen');
var JobListScreen = require('./JobListScreen');

var Karejo = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.layout}
        initialRoute={{
          title: 'Job Listing',
          component: JobListScreen,
        }}
      />
    )
  }
});

var styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('Karejo', () => Karejo);
