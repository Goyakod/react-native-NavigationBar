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
    TouchableHighlight,
    NavigatorIOS,
    } = React;

var NavigatorDemo = React.createClass({

    onRightButtonPress: function(){
        this.refs.nav.push({
            title: 'Green',
            component: ForRightScene
        });
    },

    render: function() {

        return (
            <NavigatorIOS ref='nav'
                style = {styles.container}
                initialRoute = {{
                    component:HomeScene,
                    title:'Demo',
                    rightButtonTitle:'More',
                    onRightButtonPress: this.onRightButtonPress
                }} />
        );
    }
});

var HomeScene = React.createClass({
    onPress(){
        this.props.navigator.push({
            title: 'Yellow',
            component: ForTouchScene
        });
    },

    render(){
        return(
          <View style = {[styles.scene,{backgroundColor:'#DAF6FF'}]} >
              <TouchableHighlight onPress = {this.onPress} >
                  <Text>Press Me</Text>
              </TouchableHighlight>
          </View>
        );
    }

});

var ForRightScene = React.createClass({

    render(){
        return (
            <View style = {[styles.scene,{backgroundColor:'green'}]} >
                <Text>You come here from Right button !</Text>
            </View>
        );
    }
});

var  ForTouchScene = React.createClass({
    render(){
        return(
            <View style = {[styles.scene,{backgroundColor:'yellow'}]} >
                <Text>You come here from TouchableHighlight !</Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container:{
        flex: 1
    },
    scene:{
        padding: 10,
        paddingTop: 74,
        flex: 1
    }
});

AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
