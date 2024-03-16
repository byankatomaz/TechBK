import React from 'react';
import { StatusBar as RNStatusBar} from 'react-native';

function CustomStatusBar() {
    return (
        <RNStatusBar
            animated={true}
            backgroundColor="black"
            barStyle="default"
            hidden={false}
        />
    );
}

export default CustomStatusBar;
