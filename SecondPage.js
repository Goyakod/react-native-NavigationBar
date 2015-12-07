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

var SecondPage = React.createClass({
    render(){
        console.log(this.props.passProps);
        return(
            <View style = {{backgroundColor:'orange',flex:1}} >
                <NavigationBar
                    barTitle = 'Second'
                    leftText = {this.props.id}
                    rightText = 'Next Page'
                    onLeftItemPress = {this.leftItemPress}
                    onRightItemPress = {this.rightItemPress}
                    />
            </View>
        );
    },

    leftItemPress(){
        var navigator = this.props.navigator;
        if(navigator){
            navigator.pop();
        }
    },

    rightItemPress(){
        var navigator = this.props.navigator;
        if(navigator){
            navigator.push({
                name:'third',
                component: ThirdPage,
                passProps:{
                    id:'Second'
                }
            });
        }
    }

});

module.exports = SecondPage;
