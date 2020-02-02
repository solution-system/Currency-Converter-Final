import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const Header_BASE_CURRENCY = 'USD';
const Header_QUOTE_CURRENCY = 'GBP';
const Header_BASE_PRICE = '100';
const Header_QUOTE_PRICE = '79.74';
const Header_CONVERSION_RATE = '0.17974';
const Header_CONVERSION_DATE = new Date();

 class Home extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }
    handlePressBaseCurrency = () => {
       // console.log("Press base");
       this.props.navigation.navigate('CurrencyList', { title: 'Base Currency'});
    };
    handlePressQuoteCurrency = () => {
        // console.log("Press quote");
        this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency'});
    };    
    handleTextChange = (text) => {
        console.log('change text: ', text)
    };
    handleSwapCurrency = () => {
        console.log("Press handleSwapCurrency");
    };

    handleOptionsPress = () => {
        // console.log('options press');
        this.props.navigation.navigate('Options', { title: 'Options'});
      };
   

    render() {
    return ( 
        <Container>
        <StatusBar translucent = {false} barStyle = "light-content" />        
        <Header onPress={this.handleOptionsPress} />

        <KeyboardAvoidingView behavior="padding"/>      
        <Logo />
        <InputWithButton 
            buttonText={Header_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={Header_BASE_PRICE}
            keyboardType="numeric"            
            onChangeText={this.handleTextChange}
        />
        <InputWithButton 
            buttonText={Header_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={Header_QUOTE_PRICE}
        />
        <LastConverted
            base={Header_BASE_CURRENCY}
            quote={Header_QUOTE_CURRENCY}
            date={Header_CONVERSION_DATE}
            conversionRate={Header_CONVERSION_RATE}
        />
        <ClearButton
            text="Reserve Currencies" 
            onPress={this.handleSwapCurrency} />       
        </Container>
        );
    };
};

export default Home;