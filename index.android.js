

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} = React;

var JobListScreen = require('./JobListScreen');

var Karejo = React.createClass({
 
  render: function() {
    return (
      <View>
        <JobListScreen />
      </View>
    );
  },

});


AppRegistry.registerComponent('Karejo', () => Karejo);
