import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRNCY = 'CAD';

class CurrencyList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }
    handlePress = () => {
        // console.log('row press');
        this.props.navigation.goBack(null);
    }
    render() {
            return (<View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="default" />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => 
                        <ListItem 
                            text={item}
                            selected={item === TEMP_CURRENT_CURRNCY}
                            onPress={this.handlePress}
                        />
                    }
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />    
            </View>);   
        };
}
export default CurrencyList;