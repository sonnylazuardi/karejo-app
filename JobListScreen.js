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
var API_URL = 'http://busintime.id:6001/karejo/search?location=jakarta';

var JobListScreen = React.createClass({
  getInitialState: function () {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false
    };
  },

  componentDidMount: function () {
    this.fetchData();
  },

  fetchData: function () {
    console.log('test');
    fetch(API_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        })
      })
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderJobs}
        style={styles.listView}
      />
    );
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Memuat list pekerjaan ...
        </Text>
      </View>
    )
  },

  renderJobs: function (job) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: job.image}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.detail}>{job.detail}</Text>
        </View>
      </View>
    );
  },
});

var styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    marginBottom: 3,
    marginLeft: 3,
    textAlign: 'left',
  },
  detail: {
    textAlign: 'left',
    fontSize: 10,
    marginLeft: 3,
    color: '#999',
  },
  thumbnail: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 50,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  },
};

module.exports = JobListScreen;