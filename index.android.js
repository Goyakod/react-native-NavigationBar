/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var FirstPage = require('./FirstPage');

var {
    AppRegistry,
    StyleSheet,
    View,
    Navigator
    } = React;

var NavigatorDemo = React.createClass({

    _renderScene(route, navigator){
        let Componet = route.component;
        if(route.component){
            return(<Componet {...route.passProps} navigator = {navigator} />);
        }else{
            return(<View style = {{flex:1,backgroundColor:'blue'}} ></View>);
        }
    },

    render: function () {
        return (
            <Navigator
                initialRoute={{name:'first',component:FirstPage}}
                renderScene={(route, navigator) => this._renderScene(route, navigator)}/>
        );
    }

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'pink'
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    barStyle: {
        backgroundColor: 'green'
    }
});

AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
