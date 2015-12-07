'use strict';

var React = require('react-native');
var NavigationBar = require('./NavigationBar');
var SecondPage = require('./SecondPage');

var {
    View
    } = React;

var FirstPage = React.createClass({
    render(){
        return(
            <View style = {{backgroundColor:'red',flex:1}} >
                <NavigationBar
                    barTitle = 'Fist'
                    leftText = ''
                    rightText = 'Next Page'
                    onRightItemPress = {this.rightItemPress}
                    />
            </View>
        );
    },

    rightItemPress(){
        var navigator = this.props.navigator;
        if(navigator){
            navigator.push({
                name:'second',
                component: SecondPage,
                passProps:{id:'First'}
            });
        }
    }
});

module.exports = FirstPage;
