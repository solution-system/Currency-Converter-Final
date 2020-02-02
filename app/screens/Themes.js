import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { StatusBar, ScrollView } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import {ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

class Themes extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }
    handleThemePress = (color) => {
        // console.log('handle theme press: ', color)
        this.props.navigation.goBack();
    }
    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false}
                    barStyle="default"
                />
                <ListItem   selected 
                            selected={true} 
                            text="Blue" 
                            onPress={() => this.handleThemePress(styles.$blue)} 
                            checkmark={false}
                            iconBackground={styles.$blue}
                            />
                <Separator/>
                <ListItem selected={true} text="Orange" 
                            onPress={() => this.handleThemePress(styles.$orange)} 
                            checkmark={false}
                            iconBackground={styles.$orange}
                />
                <Separator/>
                <ListItem   selected={true} 
                            text="Green" 
                            onPress={() => this.handleThemePress(styles.$green)} 
                            checkmark={false}
                            iconBackground={styles.$green}
                            />
                <Separator/>
                <ListItem   selected={true} text="Purple" 
                            onPress={() => this.handleThemePress(styles.$purple)} 
                            checkmark={false}
                            iconBackground={styles.$purple}
                            />
                <Separator/>
            </ScrollView>
        )
    }
}

export default Themes;