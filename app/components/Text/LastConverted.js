import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({base, quote, conversionRate, date}) => {
    return (
        <Text style={styles.smallText}>
            1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM DD YYYY')}
        </Text>
    )
};

LastConverted.prototypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number,

}
export default LastConverted;