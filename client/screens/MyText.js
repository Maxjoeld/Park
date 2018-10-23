import React from 'react';
import { Text } from 'react-native';


export default props => <Text {...props} style={[{fontFamily: 'HelveticaNeue', fontSize: 16}, props.style]}>{props.children}</Text>