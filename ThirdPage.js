/**
 * Created by bhyt-pro1 on 15/12/7.
 */
'use strict';

var React = require('react-native');
var NavigationBar = require('./NavigationBar');
var ThirdPage = require('./ThirdPage');

var {
    View
    } = React;

var ThirdPage = React.createClass({
    render(){
        return(
            <View style = {{backgroundColor:'yellow',flex:1}} >
                <NavigationBar
                    barTitle = 'Third'
                    leftText = {this.props.id}
                    rightText = ''
                    onLeftItemPress = {this.leftItemPress}
                    />
            </View>
        );
    },

    leftItemPress(){
        var navigator = this.props.navigator;
        if (navigator) {
            navigator.pop();
        }
    },

});

module.exports = ThirdPage;
